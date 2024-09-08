import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.aora",
  projectId: "66c05287003354e98e30",
  databaseId: "66c0b437000a08481a60",
  userCollectionId: "66c0b4750020385125b5",
  videoCollectionId: "66c0b4b300332422185c",
  storageId: "66c0b7390017c6d1fd6c",
};

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId,
} = config;

const client = new Client();

client.setEndpoint(endpoint).setProject(projectId).setPlatform(platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    console.log(
      "email:" + email,
      "password:" + password,
      "username:" + username
    );

    if (!newAccount) throw Error;

    const avatarsUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarsUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log("email:" + email, "password:" + password);

    return session;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async () => {
  try {
    const post = await databases.listDocuments(
      databaseId,
      videoCollectionId
    );
    return post.documents;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const searchPosts = async (query) => {
  try {
    const post = await databases.listDocuments(
      databaseId,
      videoCollectionId,
      [Query.search('title', query)]
    );
    return post.documents;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getLatestPosts = async () => {
  try {
    const post = await databases.listDocuments(
      databaseId,
      videoCollectionId,
      [Query.orderDesc('$createdAt', Query.limit(7))]
    );
    return post.documents;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

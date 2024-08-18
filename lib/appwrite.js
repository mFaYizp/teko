import { Account, Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.aora",
  projectId: "66c05287003354e98e30",
  databaseId: "66c0b437000a08481a60",
  userCollectionId: "66c0b4750020385125b5",
  videoCollectionId: "66c0b4b300332422185c",
  storageId: "66c0b7390017c6d1fd6c",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {setUser, setIsLoggedIn} = useGlobalContext();

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      //set it to global state
      setUser(result);
      setIsLoggedIn(true);
      router.replace("/home ");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full items-center justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-3xl text-semibold font-psemibold text-center mt-10">
            Sign Up to Aora{" "}
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
          />
          <CustomButton
            text="Sign Up"
            handlePress={submit}
            containerStyle={"mt-7 w-full"}
            isLoading={isSubmitting}
          />

          <View className="flex-row justify-center pt-5 gap-2">
            <Text className="text-gray-100 font-pregular text-sm text-center">
              Already have an account?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-secondary font-psemibold text-sm"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

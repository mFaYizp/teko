import {Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className="text-3xl font-pblack">Teko!</Text>
      <StatusBar style="auto" />
      <Link className="text-red-500 mt-10" href={"/home"}>Go to Profile</Link>
    </View>
  );
};

export default index;

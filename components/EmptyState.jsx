import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

import { images } from "../constants";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-xl font-psemibold text-white text-center mt-2">
        {title}
      </Text>
      <Text className="text-sm font-pmedium text-gray-100 text-center">
        {subtitle}
      </Text>
      <CustomButton
        text="Create video"
        handlePress={() => router.push("/create")}
        containerStyle={"w-full my-5"}
      />
    </View>
  );
};

export default EmptyState;

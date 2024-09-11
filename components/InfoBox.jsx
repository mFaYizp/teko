import { View, Text } from "react-native";
import React from "react";

const InfoBox = ({ title, subTitle, containerStyles, textStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${textStyles}`}>
        {title}
      </Text>
      <Text className="text-gray-100 text-sm text-center font-pregular">
        {subTitle}
      </Text>
    </View>
  );
};

export default InfoBox;

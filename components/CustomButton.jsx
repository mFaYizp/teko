import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({
  text,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

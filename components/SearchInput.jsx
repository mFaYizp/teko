import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      className={`border-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4 `}
    >
      <TextInput
        className="text-base text-white flex-1 font-pregular"
        {...props}
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
      />


        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>

    </View>
  );
};

export default SearchInput;

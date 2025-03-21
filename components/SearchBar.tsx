import { View, Image, TextInput, Text } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [text, setText] = React.useState<string>("");
  return (
    <View className="w-full flex-row gap-2 items-center justify-center h-10 bg-bgcolor px-6 rounded-full">
      <Image source={icons.search} className="size-6" tintColor="#AB8BFF" />
      <TextInput
        placeholder={placeholder}
        className="h-full w-full rounded-full  text-white "
        value={text}
        onChangeText={setText}
        placeholderTextColor={"#A8B5DB"}
      />
    </View>
  );
};

export default SearchBar;

import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { images } from "@/constants/images";
import React from "react";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
// absolute translate-x-32 translate-y-40
export default function Index() {
  return (
    <View className="bg-primary flex-1 ">
      <Image source={images.bg} className="absolute w-full" />

      <ScrollView
        className="flex-1 w-full "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
          alignItems: "center",
          paddingTop: 80,
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        <Image source={icons.logo} className="size-9" />
        <SearchBar placeholder="Search for a movie" />
      </ScrollView>
    </View>
  );
}

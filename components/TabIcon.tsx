import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";

const TabIcon = ({
  text,
  imgbg,
  imgicon,
  focused,
}: {
  text: string;
  imgbg: any;
  imgicon: any;
  focused: boolean;
}) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          source={imgbg}
          className="w-full rounded-full flex flex-row min-w-[100px] min-h-16 items-center justify-center gap-2 mt-4 overflow-hidden"
        >
          <Image source={imgicon} tintColor="#151312" className="size-5" />
          <Text className="text-base font-semibold">{text}</Text>
        </ImageBackground>
      </>
    );
  }

  return (
    <View className="justify-end h-10">
      <Image source={imgicon} className="size-5 " tintColor={"#A8B5DB"}></Image>
    </View>
  );
};

export default TabIcon;

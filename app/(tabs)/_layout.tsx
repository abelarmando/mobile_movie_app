import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { Image, ImageBackground, Text, View } from "react-native";

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

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: { width: "100%", height: "100%" },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 10,
          height: 52,
          position: "absolute",
          borderWidth: 2,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text="Home"
              imgbg={images.highlight}
              imgicon={icons.home}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text="Search"
              imgbg={images.highlight}
              imgicon={icons.search}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text="Saved"
              imgbg={images.highlight}
              imgicon={icons.save}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text="Profile"
              imgbg={images.highlight}
              imgicon={icons.person}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

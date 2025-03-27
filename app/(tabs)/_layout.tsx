import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/atoms/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors.dark.secondary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {
            backgroundColor: Colors.dark.background,
            borderColor: Colors.dark.secondary,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Films",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="film.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="planets"
        options={{
          title: "Planets",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="circle.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          title: "Characters",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

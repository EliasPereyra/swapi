import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";

interface IconProps {
  quantity: number;
  iconName: keyof typeof icons;
}

/**
 * Utilizando Material Icons, solo es necesario agregar el nombre del icono. Para ver la lista de iconos disponibles, visita: https://icons.expo.fyi.
 * Además del ícono, se puede agregar un texto no largo,
 */

export default function Icon({ quantity, iconName }: IconProps) {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icons[iconName]}
        style={{
          width: 24,
          height: 24,
          tintColor: "#70660c",
        }}
      />
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  quantity: {
    fontSize: 16,
    color: "#70660c",
  },
});

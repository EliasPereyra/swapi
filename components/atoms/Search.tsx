import { icons } from "@/constants/icons";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface SearchProps {
  value?: string;
  onChange?: (text: string) => void;
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <View style={styles.searchInputContainer}>
      <Image source={icons.search} style={{ width: 24, height: 24 }} />
      <TextInput
        placeholder="Buscar el nombre del personaje"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    backgroundColor: "#FFFCE5",
    borderRadius: 8,
    marginTop: 16,
  },
});

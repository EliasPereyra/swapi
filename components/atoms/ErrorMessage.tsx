import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <SafeAreaView>
      <Text style={styles.title}>{message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 16,
    color: "#FFF",
    textAlign: "center",
  },
});

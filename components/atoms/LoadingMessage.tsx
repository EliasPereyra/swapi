import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoadingMessage({ message }: { message: string }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator />
      <Text style={styles.title}>{message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBlock: 16,
    color: "#FFF",
    textAlign: "center",
  },
});

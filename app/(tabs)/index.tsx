import { StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/templates/ParallaxScrollView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { useFilms } from "@/hooks/useFilms";
import FilmCard from "@/components/molecules/FilmCard";

export default function HomeScreen() {
  const { data, error, isPending } = useFilms();

  if (isPending) return <ThemedText>Loading films...</ThemedText>;

  if (error) return <ThemedText>{error.message}</ThemedText>;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#191700" }}
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.title}>Películas</Text>
        <Text style={styles.description}>
          Lista de películas del Star Wars universe
        </Text>
      </ThemedView>

      <View style={styles.filmsList}>
        {data?.results.map((film: Film) => (
          <FilmCard key={film.url} film={film} />
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 16,
    color: "#FFF",
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  filmsList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 8,
  },
});

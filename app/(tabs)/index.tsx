import { StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/templates/ParallaxScrollView";
import { ThemedView } from "@/components/atoms/ThemedView";
import { useFilms } from "@/hooks/useFilms";
import FilmCard from "@/components/molecules/FilmCard";
import { Colors } from "@/constants/Colors";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import LoadingMessage from "@/components/atoms/LoadingMessage";

export default function HomeScreen() {
  const { films, error, isPending } = useFilms();

  if (isPending) return <LoadingMessage message="Cargando peliculas..." />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#474108" }}
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.title}>Películas</Text>
        <Text style={styles.description}>
          Lista de películas del Star Wars universe
        </Text>
      </ThemedView>

      <View style={styles.filmsList}>
        {films.map((film: Film) => (
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
    color: Colors.dark.primary,
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
  },
  filmsList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 8,
  },
});

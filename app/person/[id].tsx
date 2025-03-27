import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ErrorMessage from "@/components/atoms/ErrorMessage";
import LoadingMessage from "@/components/atoms/LoadingMessage";
import ParallaxScrollView from "@/components/templates/ParallaxScrollView";
import { usePersonDetails } from "@/hooks/usePersonDetails";

export default function Person() {
  const { id } = useLocalSearchParams();
  const { isPending, error, personDetails } = usePersonDetails(id);

  if (isPending) return <LoadingMessage message="Cargando personaje..." />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <View>
        <Text style={styles.title}>{personDetails?.name}</Text>
        <Text style={styles.label}>Todos los detalles sobre el personaje</Text>
        <View style={styles.details}>
          <Text style={styles.description}>
            Año de nacimiento: {personDetails?.birth_year}
          </Text>
          <Text style={styles.description}>
            Género: {personDetails?.gender}
          </Text>
          <Text style={styles.description}>
            Altura: {personDetails?.height}
          </Text>
          <Text style={styles.description}>Masa: {personDetails?.mass}</Text>
          <Text style={styles.description}>
            Color de cabello: {personDetails?.hair_color}
          </Text>
          <Text style={styles.description}>
            Color de piel: {personDetails?.skin_color}
          </Text>
          <Text style={styles.description}>
            Color de ojos: {personDetails?.eye_color}
          </Text>
          <Text style={styles.description}>
            Cantidad de peliculas: {personDetails?.films.length}
          </Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    color: "#a09212",
  },
  description: {
    fontSize: 16,
    color: "#ddd",
  },
  details: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flexWrap: "wrap",
  },
});

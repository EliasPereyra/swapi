import { StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/templates/ParallaxScrollView";
import { usePlanets } from "@/hooks/usePlanets";
import PlanetCard from "@/components/molecules/PlanetCard";
import { Colors } from "@/constants/Colors";
import LoadingMessage from "@/components/atoms/LoadingMessage";
import ErrorMessage from "@/components/atoms/ErrorMessage";

export default function Planets() {
  const { isPending, error, data } = usePlanets();

  if (isPending) return <LoadingMessage message="Cargando planetas..." />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#474108" }}
    >
      <View style={styles.planetsContainer}>
        <Text style={styles.title}>Planetas</Text>
        <Text style={styles.description}>Planetas del Star Wars universe</Text>
        <View style={styles.planetsList}>
          {data?.results.map((planet: Planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  planetsContainer: {},
  title: {
    fontSize: 32,
    marginBottom: 16,
    color: Colors.dark.primary,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
  },
  planetsList: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});

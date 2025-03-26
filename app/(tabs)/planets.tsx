import ParallaxScrollView from "@/components/templates/ParallaxScrollView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { usePlanets } from "@/hooks/usePlanets";
import { StyleSheet, Text, View } from "react-native";
import PlanetCard from "@/components/molecules/PlanetCard";

export default function Planets() {
  const { isPending, error, data } = usePlanets();

  if (isPending) return <ThemedText>Loading planets...</ThemedText>;

  if (error) return <ThemedText>{error.message}</ThemedText>;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
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
    color: "#FFF",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  planetsList: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
});

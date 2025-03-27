import { Colors } from "@/constants/Colors";
import { icons } from "@/constants/icons";
import { StyleSheet, Text } from "react-native";
import { Image, View } from "react-native";

interface PlanetCardProps {
  planet: Planet;
  key: string;
}

export default function PlanetCard({ planet, key }: PlanetCardProps) {
  return (
    <View style={styles.planetContainer}>
      <View style={styles.header}>
        <Image
          source={icons.planet}
          style={{ width: 20, height: 20, tintColor: "#70660c" }}
        />
        <Text style={styles.title}>{planet.name}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Detalles</Text>
        <View style={styles.detailsList}>
          <Text>Clima: {planet.climate}</Text>
          <Text>Terreno: {planet.terrain}</Text>
          <Text>Población: {planet.population}</Text>
          <Text>Agua de superficie: {planet.surface_water}</Text>
          <Text>Diámetro: {planet.diameter}</Text>
          <Text>Período Orbital: {planet.orbital_period}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  planetContainer: {
    width: 150,
    padding: 16,
    backgroundColor: "#f2eeca",
    borderRadius: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detailsList: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});

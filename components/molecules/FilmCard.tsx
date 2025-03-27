import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "../atoms/Icon";
import { usePersonDetails } from "@/hooks/usePersonDetails";
import { getPeopleEndpointResourceNumber } from "@/utils/utils";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

interface CardProps {
  key: string;
  film: Film;
}

export default function FilmCard({ film, key }: CardProps) {
  const characterNames = film.characters.map((character) => {
    const characterId = getPeopleEndpointResourceNumber(character);
    const { personDetails } = usePersonDetails(characterId);

    return {
      name: personDetails?.name,
      url: personDetails?.url,
    };
  });

  return (
    <View key={key} style={styles.cardBg}>
      <View style={styles.header}>
        <Text style={styles.title}>{film.title}</Text>
        <Text style={styles.episode}>Episodio {film.episode_id}</Text>
        <View style={styles.info}>
          <Text style={styles.label}>Fecha de lanzamiento</Text>
          <Text style={styles.description}>{film.release_date}</Text>
        </View>
        <View>
          <Text style={styles.label}>Sinopsis</Text>
          <Text style={styles.filmDescription}>{film.opening_crawl}</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.mainInfoContainer}>
        <View style={styles.mainInfo}>
          <Text style={styles.label}>Director</Text>
          <Text style={styles.description}>{film.director}</Text>
          <Text style={styles.label}>Productor</Text>
          <Text style={styles.description}>{film.producer}</Text>
        </View>
        <Text style={styles.label}>Personajes:</Text>
        {/* <View style={styles.charactersList}>
          {characterNames.map(({ name: character, url }) => (
            <Text style={styles.description} key={character + url}>
              {character}
            </Text>
          ))}
        </View> */}
      </View>
      <View style={styles.separator} />
      <View style={styles.details}>
        <Text style={styles.label}>Detalles de la película</Text>
        <View style={styles.detailsList}>
          <Icon quantity={film.planets.length} iconName="planet" />
          <Icon quantity={film.vehicles.length} iconName="vehicle" />
          <Icon quantity={film.starships.length} iconName="starship" />
          <Icon quantity={film.species.length} iconName="species" />
        </View>
      </View>
      <TouchableOpacity style={styles.visitBtn}>
        <Text style={styles.visitTxt}>Visita la página</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBg: {
    backgroundColor: "#f2eeca",
    padding: 12,
    borderRadius: 16,
    borderColor: "#ECEDEE",
    borderWidth: 1,
    width: 150,
  },
  header: {
    gap: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  info: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    overflow: "hidden",
  },
  episode: {
    fontSize: 18,
    color: "#777",
  },
  label: {
    marginTop: 12,
    fontSize: 18,
    color: Colors.dark.secondary,
  },
  description: {
    fontSize: 14,
    marginTop: 2,
    color: "#333",
  },
  filmDescription: {
    fontSize: 14,
    marginTop: 4,
    color: "#555",
  },
  separator: {
    marginTop: 8,
    borderColor: Colors.dark.secondary,
    borderWidth: 1,
    borderRadius: 8,
  },
  mainInfoContainer: {
    marginTop: 8,
  },
  mainInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  charactersList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 8,
  },
  details: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  detailsList: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  visitBtn: {
    marginTop: 16,
    padding: 14,
    borderRadius: 2,
    borderColor: "#ECEDEE",
    borderWidth: 1,
    backgroundColor: "#FFE300",
  },
  visitTxt: {
    textAlign: "center",
    fontWeight: "black",
    color: "#283300",
  },
});

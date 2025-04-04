import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/templates/ParallaxScrollView";
import PersonCard from "@/components/molecules/PersonCard";
import Search from "@/components/atoms/Search";
import { usePeople } from "@/hooks/usePeople";
import LoadingMessage from "@/components/atoms/LoadingMessage";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import { Colors } from "@/constants/Colors";

export default function People() {
  const { isPending, error, people } = usePeople();
  const [nombre, setNombre] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(people);

  useEffect(() => {
    if (nombre) {
      setTimeout(() => {
        setFilteredPeople(
          people.filter((person: Person) =>
            person.nombre.toLowerCase().includes(nombre.toLowerCase())
          )
        );
      }, 400);
    } else {
      setFilteredPeople(people);
    }
  }, [nombre]);

  if (isPending) return <LoadingMessage message="Cargando personajes..." />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#474108" }}
    >
      <Text style={styles.title}>Personajes</Text>
      <Text style={styles.description}>Personajes del Star Wars universe</Text>
      <Search value={nombre} onChange={setNombre} />

      <View style={styles.peopleList}>
        {filteredPeople?.length > 0 ? (
          filteredPeople.map((person: Person) => (
            <PersonCard key={person.nombre} person={person} />
          ))
        ) : (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>
              No se encontraron resultados.
            </Text>
          </View>
        )}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: Colors.dark.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
  },
  peopleList: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  noResults: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
  },
  noResultsText: {
    color: "#ccc",
    textAlign: "center",
    width: "70%",
    lineHeight: 20,
  },
});

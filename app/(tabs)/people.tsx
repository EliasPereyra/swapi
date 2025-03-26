import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ParallaxScrollView from "@/components/templates/ParallaxScrollView";
import Person from "@/components/molecules/PersonCard";
import Search from "@/components/atoms/Search";
import { usePeople } from "@/hooks/usePeople";
import LoadingMessage from "@/components/atoms/LoadingMessage";

export default function People() {
  const { isPending, error, data } = usePeople();
  const [name, setName] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(data?.results);

  useEffect(() => {
    if (name) {
      setTimeout(() => {
        setFilteredPeople(
          data?.results.filter((person: Person) =>
            person.name.toLowerCase().includes(name.toLowerCase())
          )
        );
      }, 400);
    }
  }, [name]);

  if (isPending) return <LoadingMessage message="Cargando personajes..." />;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <Text style={styles.title}>Personajes</Text>
      <Text style={styles.description}>Personajes del Star Wars universe</Text>
      <Search value={name} onChange={setName} />

      <View style={styles.peopleList}>
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person: Person) => (
            <Person key={person.name} person={person} />
          ))
        ) : (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>
              No se encontraron resultados. Intente nuevamente con otro nombre.
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
    color: "#FFF",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  peopleList: {
    marginTop: 20,
    display: "flex",
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

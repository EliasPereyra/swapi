import { getPeopleEndpointResourceNumber } from "@/utils/utils";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PersonCardProps {
  person: Person;
  key: string;
}

export default function PersonCard({ person, key }: PersonCardProps) {
  const personId = getPeopleEndpointResourceNumber(person.url);

  return (
    <Link href={`/person/${personId}`} asChild>
      <TouchableOpacity>
        <View key={key} style={styles.personContainer}>
          <Text style={styles.title}>{person.name}</Text>

          <View>
            <Text>Gender: {person.gender}</Text>
            <Text>Height: {person.height}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  personContainer: {
    width: 148,
    padding: 16,
    backgroundColor: "#f2eeca",
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginBottom: 8,
  },
});

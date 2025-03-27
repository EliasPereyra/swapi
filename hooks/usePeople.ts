import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/api";
import {
  filmTranslations,
  peopleTranslations,
  translateArray,
} from "@/utils/translateApiResponse";

export const usePeople = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: () => fetch(`${BASE_URL}/people/`).then((res) => res.json()),
  });

  let people: Person[] = data?.results;
  people = translateArray(data?.results, peopleTranslations);

  return { isPending, error, people };
};

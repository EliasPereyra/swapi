import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/api";
import {
  planetTranslations,
  translateArray,
} from "@/utils/translateApiResponse";

export const usePlanets = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["planets"],
    queryFn: () => fetch(`${BASE_URL}/planets/`).then((res) => res.json()),
  });

  let planets: Planet[] = data?.results;
  planets = translateArray(data?.results, planetTranslations);

  return { isPending, error, planets };
};

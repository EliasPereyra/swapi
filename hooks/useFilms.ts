import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/api";
import { filmTranslations, translateArray } from "@/utils/translateApiResponse";

export const useFilms = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["films"],
    queryFn: () => fetch(`${BASE_URL}/films/`).then((res) => res.json()),
  });

  let films: Film[] = data?.results;
  films = translateArray(data?.results, filmTranslations);

  return { isPending, error, films };
};

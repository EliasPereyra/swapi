import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/api";

export const useFilms = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["films"],
    queryFn: () => fetch(`${BASE_URL}/films/`).then((res) => res.json()),
  });

  return { isPending, error, data };
};

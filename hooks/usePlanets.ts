import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/api";

export const usePlanets = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["planets"],
    queryFn: () => fetch(`${BASE_URL}/planets/`).then((res) => res.json()),
  });

  return { isPending, error, data };
};

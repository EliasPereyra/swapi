import { BASE_URL } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";

export const usePersonDetails = (id: string | string[]) => {
  const {
    isPending,
    error,
    data: personDetails,
  } = useQuery({
    queryKey: ["person", id],
    queryFn: () => fetch(`${BASE_URL}/people/${id}`).then((res) => res.json()),
  });

  return {
    isPending,
    error,
    personDetails,
  };
};

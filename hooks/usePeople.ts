import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/api";

export const usePeople = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: () => fetch(`${BASE_URL}/people/`).then((res) => res.json()),
  });

  return { isPending, error, data };
};

import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetTypes = () => {
  return useSuspenseQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/api/operations");
      return await res.json();
    },
  });
};

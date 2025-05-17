import { useSuspenseQuery } from "@tanstack/react-query";

import { BenchmarkSearch } from "/src/routeTree.tsx";
import { BASE_URL } from "/src/const .ts";

export const useGetTypes = ({ base, size, fn, type, repeat }: BenchmarkSearch) => {
  return useSuspenseQuery<{ value: string; result: [string[], string[]] }>({
    queryKey: ["bench-result", fn, type, base, repeat, size],
    queryFn: async () => {
      const res = await fetch(
        `${BASE_URL}api/benchmark/${type}/${size}/${base}/${repeat}`,
      );

      return await res.json();
    },
  });
};

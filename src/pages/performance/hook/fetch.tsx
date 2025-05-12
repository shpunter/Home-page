import { useSuspenseQuery } from "@tanstack/react-query";
import { PerformanceSearch } from "/src/routeTree.tsx";

export const useGetTypes = ({ base, fn, type, repeat }: PerformanceSearch) => {
  return useSuspenseQuery<{ value: string; result: [string[], string[]] }>({
    queryKey: ["bench-result", fn, type, base, repeat],
    queryFn: async () => {
      const res = await fetch(`https://numio.deno.dev/api/benchmark/${type}/sm/${base}/${repeat}`);
      // const res = await fetch(
      //   `http://localhost:8000/api/benchmark/${type}/sm/${base}/${repeat}`,
      // );

      return await res.json();
    },
  });
};

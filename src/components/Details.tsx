import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

async function fetchDetail(type: string) {
  const response = await fetch(`http://localhost:8000/api/operations/${type}`);
  if (!response.ok) {
    throw new Error("Failed to fetch operation Details");
  }
  return response.json();
}

export function Details() {
  const { type } = useParams({ from: "/operation/$type" });
  const {
    data: operation,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["operations", type],
    queryFn: () => fetchDetail(type),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h2>{type}</h2>
      <p>{operation?.description}</p>
    </div>
  );
}

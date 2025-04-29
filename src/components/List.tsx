import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

async function fetchOperations() {
  const response = await fetch("http://localhost:8000/api/operations");
  if (!response.ok) {
    throw new Error("Failed to fetch operations");
  }
  return response.json();
}

export function List() {
  const {
    data: operations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["operations"],
    queryFn: fetchOperations,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h2>List</h2>
      <ul>
        {operations?.map((op: { type: string; description: string }) => (
          <li key={op.type}>
            <Link
              to="/operation/$type"
              params={{ type: op.type }}
            >
              {op.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import Sort from "/client/src/pages/sort/sort.tsx";

export const Route = createFileRoute("/sort")({
  component: Sort,
});

import { createFileRoute } from "@tanstack/react-router";
import Subtraction from "/src/components/subtraction/subtraction.tsx";

export const Route = createFileRoute("/sub")({
  component: Subtraction,
});

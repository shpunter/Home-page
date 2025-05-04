import { createFileRoute } from "@tanstack/react-router";
import Subtraction from "@comp/subtraction/subtraction.tsx";

export const Route = createFileRoute("/sub")({
  component: Subtraction,
});

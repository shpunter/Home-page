import { createFileRoute } from "@tanstack/react-router";
import Subtraction from "/src/components/Subtraction.tsx";

export const Route = createFileRoute("/sub")({
  component: Subtraction,
});

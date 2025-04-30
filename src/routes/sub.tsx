import { createFileRoute } from "@tanstack/react-router";
import Subtraction from "../components/Subtraction.tsx";

export const Route = createFileRoute("/sub")({
  component: Subtraction,
});

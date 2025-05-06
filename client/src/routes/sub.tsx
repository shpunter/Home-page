import { createFileRoute } from "@tanstack/react-router";
import Subtraction from "/client/src/pages/subtraction/subtraction.tsx";

export const Route = createFileRoute("/sub")({
  component: Subtraction,
});

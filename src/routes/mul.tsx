import { createFileRoute } from "@tanstack/react-router";
import Multiplication from "/src/components/multiplication/multiplication.tsx";

export const Route = createFileRoute("/mul")({
  component: Multiplication,
});

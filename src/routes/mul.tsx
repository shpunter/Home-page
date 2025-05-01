import { createFileRoute } from "@tanstack/react-router";
import Multiplication from "/src/components/Multiplication.tsx";

export const Route = createFileRoute("/mul")({
  component: Multiplication,
});

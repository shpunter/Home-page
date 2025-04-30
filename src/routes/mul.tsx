import { createFileRoute } from "@tanstack/react-router";
import Multiplication from "../components/Multiplication.tsx";

export const Route = createFileRoute("/mul")({
  component: Multiplication,
});

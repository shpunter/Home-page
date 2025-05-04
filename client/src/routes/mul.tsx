import { createFileRoute } from "@tanstack/react-router";
import Multiplication from "@comp/";

export const Route = createFileRoute("/mul")({
  component: Multiplication,
});

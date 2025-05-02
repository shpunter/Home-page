import { createFileRoute } from "@tanstack/react-router";
import Addition from "/src/components/addition/addition.tsx";

export const Route = createFileRoute("/add")({
  component: Addition,
});

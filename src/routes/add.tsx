import { createFileRoute } from "@tanstack/react-router";
import Addition from "/src/components/Addition.tsx";

export const Route = createFileRoute("/add")({
  component: Addition,
});

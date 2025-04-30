import { createFileRoute } from "@tanstack/react-router";
import Addition from "../components/Addition.tsx";

export const Route = createFileRoute("/add")({
  component: Addition,
});

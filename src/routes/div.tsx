import { createFileRoute } from "@tanstack/react-router";
import Division from "/src/components/Division.tsx";

export const Route = createFileRoute("/div")({
  component: Division,
});

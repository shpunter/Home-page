import { createFileRoute } from "@tanstack/react-router";
import Division from "/client/src/components/division/division.tsx";

export const Route = createFileRoute("/div")({
  component: Division,
});

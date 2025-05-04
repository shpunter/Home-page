import { createFileRoute } from "@tanstack/react-router";
import Division from "@comp/division/division.tsx";

export const Route = createFileRoute("/div")({
  component: Division,
});

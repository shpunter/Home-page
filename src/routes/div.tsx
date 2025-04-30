import { createFileRoute } from "@tanstack/react-router";
import Division from "../components/Division.tsx";

export const Route = createFileRoute("/div")({
  component: Division,
});

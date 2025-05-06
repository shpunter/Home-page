import { createFileRoute } from "@tanstack/react-router";
import Min from "/client/src/components/min/min.tsx";

export const Route = createFileRoute("/min")({
  component: Min,
});

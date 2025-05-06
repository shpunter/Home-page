import { createFileRoute } from "@tanstack/react-router";
import Max from "/client/src/components/max/max.tsx";

export const Route = createFileRoute("/max")({
  component: Max,
});

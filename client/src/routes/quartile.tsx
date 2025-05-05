import { createFileRoute } from "@tanstack/react-router";
import Quartile from "/client/src/components/quartile/quartile.tsx";

export const Route = createFileRoute("/quartile")({
  component: Quartile,
});

import { createFileRoute } from "@tanstack/react-router";
import Quartile from "/client/src/pages/quartile/quartile.tsx";

export const Route = createFileRoute("/quartile")({
  component: Quartile,
});

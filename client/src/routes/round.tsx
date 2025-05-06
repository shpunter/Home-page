import { createFileRoute } from "@tanstack/react-router";
import Round from "/client/src/pages/round/round.tsx";

export const Route = createFileRoute("/round")({
  component: Round,
});

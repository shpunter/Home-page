import { createFileRoute } from "@tanstack/react-router";
import AbsDoc from "/client/src/pages/abs/abs.tsx";

export const Route = createFileRoute("/abs")({
  component: AbsDoc,
});

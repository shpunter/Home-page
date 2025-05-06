import { createFileRoute } from "@tanstack/react-router";
import IsEqual from "/client/src/pages/isEqual/isEqual.tsx";

export const Route = createFileRoute("/isEqual")({
  component: IsEqual,
});

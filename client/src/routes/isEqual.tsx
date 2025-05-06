import { createFileRoute } from "@tanstack/react-router";
import IsEqual from "/client/src/components/isEqual/isEqual.tsx";

export const Route = createFileRoute("/isEqual")({
  component: IsEqual,
});

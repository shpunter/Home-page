import { createFileRoute } from "@tanstack/react-router";
import IsLeftGreaterOrEqual from "/client/src/components/isLeftGreaterOrEqual/isLeftGreaterOrEqual.tsx";

export const Route = createFileRoute("/isLeftGreaterOrEqual")({
  component: IsLeftGreaterOrEqual,
});

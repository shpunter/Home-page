import { createFileRoute } from "@tanstack/react-router";
import IsLeftGreaterOrEqual from "/client/src/pages/isLeftGreaterOrEqual/isLeftGreaterOrEqual.tsx";

export const Route = createFileRoute("/isLeftGreaterOrEqual")({
  component: IsLeftGreaterOrEqual,
});

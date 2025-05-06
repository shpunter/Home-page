import { createFileRoute } from "@tanstack/react-router";
import IsLeftGreater from "/client/src/components/isLeftGreater/isLeftGreater.tsx";

export const Route = createFileRoute("/isLeftGreater")({
  component: IsLeftGreater,
});

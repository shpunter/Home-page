import { createFileRoute } from "@tanstack/react-router";
import IsLeftGreater from "/client/src/pages/isLeftGreater/isLeftGreater.tsx";

export const Route = createFileRoute("/isLeftGreater")({
  component: IsLeftGreater,
});

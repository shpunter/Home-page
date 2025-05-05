import { createFileRoute } from "@tanstack/react-router";
import Pipe from "/client/src/components/pipe/pipe.tsx";

export const Route = createFileRoute("/pipe")({
  component: Pipe,
});

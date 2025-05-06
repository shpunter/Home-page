import { createFileRoute } from "@tanstack/react-router";
import Pipe from "/client/src/pages/pipe/pipe.tsx";

export const Route = createFileRoute("/pipe")({
  component: Pipe,
});

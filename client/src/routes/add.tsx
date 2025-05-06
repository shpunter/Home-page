import { createFileRoute } from "@tanstack/react-router";
import Addition from "/client/src/pages/addition/addition.tsx";

export const Route = createFileRoute("/add")({
  component: Addition,
});

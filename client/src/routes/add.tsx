import { createFileRoute } from "@tanstack/react-router";
import Addition from "@comp/addition/addition.tsx";

export const Route = createFileRoute("/add")({
  component: Addition,
});

import { createFileRoute } from "@tanstack/react-router";
import Home from "/src/components/Home.tsx";

export const Route = createFileRoute("/")({
  component: Home,
});


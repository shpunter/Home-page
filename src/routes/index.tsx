import { createFileRoute } from "@tanstack/react-router";
import Home from "/src/components/home/home.tsx";

export const Route = createFileRoute("/")({
  component: Home,
});


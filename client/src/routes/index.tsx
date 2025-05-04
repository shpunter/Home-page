import { createFileRoute } from "@tanstack/react-router";
import Home from "@comp/home/home.tsx";

export const Route = createFileRoute("/")({
  component: Home,
});


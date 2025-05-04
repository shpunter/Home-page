import { createFileRoute } from "@tanstack/react-router";
import Installation from "@comp/install/install.tsx";

export const Route = createFileRoute("/install")({
  component: Installation,
});

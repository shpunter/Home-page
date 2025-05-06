import { createFileRoute } from "@tanstack/react-router";
import Installation from "/client/src/pages/install/install.tsx";

export const Route = createFileRoute("/install")({
  component: Installation,
});

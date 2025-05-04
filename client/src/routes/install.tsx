import { createFileRoute } from "@tanstack/react-router";
import Installation from "/client/src/components/install/install.tsx";

export const Route = createFileRoute("/install")({
  component: Installation,
});

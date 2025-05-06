import { createFileRoute } from "@tanstack/react-router";
import SqrtDoc from "/client/src/components/sqrt/sqrt.tsx";

export const Route = createFileRoute("/sqrt")({
  component: SqrtDoc,
});

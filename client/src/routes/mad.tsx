import { createFileRoute } from "@tanstack/react-router";
import MADDoc from "/client/src/pages/MAD/MAD.tsx";

export const Route = createFileRoute("/mad")({
  component: MADDoc,
});

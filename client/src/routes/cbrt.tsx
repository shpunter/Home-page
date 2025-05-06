import { createFileRoute } from "@tanstack/react-router";
import CbrtDoc from "/client/src/pages/cbrt/cbrt.tsx";

export const Route = createFileRoute("/cbrt")({
  component: CbrtDoc,
});

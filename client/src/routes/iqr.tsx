import { createFileRoute } from "@tanstack/react-router";
import IQRDoc from "/client/src/pages/IQR/IQR.tsx";

export const Route = createFileRoute("/iqr")({
  component: IQRDoc,
});

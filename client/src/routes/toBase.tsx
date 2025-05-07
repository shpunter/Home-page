import { createFileRoute } from "@tanstack/react-router";
import ToBaseDoc from "/client/src/pages/toBase/toBase.tsx";

export const Route = createFileRoute("/toBase")({
  component: ToBaseDoc,
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsNumberDoc = lazy(() =>
  import("/client/src/pages/isNumber/isNumber.tsx")
);

export const Route = createFileRoute("/isNumber")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsNumberDoc />
      </Suspense>
    );
  },
});
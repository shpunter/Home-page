import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsDecimalDoc = lazy(() =>
  import("/client/src/pages/isDecimal/isDecimal.tsx")
);

export const Route = createFileRoute("/isDecimal")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsDecimalDoc />
      </Suspense>
    );
  },
});
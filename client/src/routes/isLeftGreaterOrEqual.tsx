import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsLeftGreaterOrEqualDoc = lazy(() =>
  import("/client/src/pages/isLeftGreaterOrEqual/isLeftGreaterOrEqual.tsx")
);

export const Route = createFileRoute("/isLeftGreaterOrEqual")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsLeftGreaterOrEqualDoc />
      </Suspense>
    );
  },
});

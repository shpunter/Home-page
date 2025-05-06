import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsEqualDoc = lazy(() => import("/client/src/pages/isEqual/isEqual.tsx"));

export const Route = createFileRoute("/isEqual")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsEqualDoc />
      </Suspense>
    );
  },
});

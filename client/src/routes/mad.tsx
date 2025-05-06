import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const MADDoc = lazy(() => import("/client/src/pages/MAD/MAD.tsx"));

export const Route = createFileRoute("/mad")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <MADDoc />
      </Suspense>
    );
  },
});

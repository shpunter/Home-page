import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const MeanDoc = lazy(() => import("/client/src/pages/mean/mean.tsx"));

export const Route = createFileRoute("/mean")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <MeanDoc />
      </Suspense>
    );
  },
});

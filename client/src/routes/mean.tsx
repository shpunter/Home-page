import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const MeanDoc = lazy(() => import("/client/src/pages/mean/mean.tsx"));

export const Route = createFileRoute("/mean")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <MeanDoc />
      </Suspense>
    );
  },
});

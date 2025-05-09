import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const MinDoc = lazy(() => import("/client/src/pages/min/min.tsx"));

export const Route = createFileRoute("/min")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <MinDoc />
      </Suspense>
    );
  },
});


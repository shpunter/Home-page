import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const PipeDoc = lazy(() => import("/client/src/pages/pipe/pipe.tsx"));

export const Route = createFileRoute("/pipe")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <PipeDoc />
      </Suspense>
    );
  },
});

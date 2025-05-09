import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const MaxDoc = lazy(() => import("/client/src/pages/max/max.tsx"));

export const Route = createFileRoute("/max")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <MaxDoc />
      </Suspense>
    );
  },
});

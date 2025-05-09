import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const SortDoc = lazy(() => import("/client/src/pages/sort/sort.tsx"));

export const Route = createFileRoute("/sort")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <SortDoc />
      </Suspense>
    );
  },
});

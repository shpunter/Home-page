import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const Float = lazy(() =>
  import(
    "/client/src/pages/performance/add/sm/int/float/float.tsx"
  )
);

export const Route = createFileRoute("/performance/add/sm/float/decimal")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <Float />
      </Suspense>
    );
  },
});
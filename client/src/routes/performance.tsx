import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const PerfAddSmallInt = lazy(() =>
  import("/client/src/pages/performance/add/perfAddSmallInt/perfAddSmallInt.tsx")
);

export const Route = createFileRoute("/performance")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <PerfAddSmallInt />
      </Suspense>
    );
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const Binary = lazy(() =>
  import(
    "/client/src/pages/performance/add/sm/int/binary/binary.tsx"
  )
);

export const Route = createFileRoute("/performance/add/sm/int/binary")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <Binary />
      </Suspense>
    );
  },
});

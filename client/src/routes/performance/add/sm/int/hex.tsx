import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const Hex = lazy(() =>
  import(
    "/client/src/pages/performance/add/sm/int/hex/hex.tsx"
  )
);

export const Route = createFileRoute("/performance/add/sm/int/hex")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <Hex />
      </Suspense>
    );
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const Decimal = lazy(() =>
  import(
    "/client/src/pages/performance/add/sm/int/decimal/decimal.tsx"
  )
);

export const Route = createFileRoute("/performance/add/sm/int/decimal")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <Decimal />
      </Suspense>
    );
  },
});

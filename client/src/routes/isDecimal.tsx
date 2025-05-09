import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsDecimalDoc = lazy(() =>
  import("/client/src/pages/isDecimal/isDecimal.tsx")
);

export const Route = createFileRoute("/isDecimal")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsDecimalDoc />
      </Suspense>
    );
  },
});
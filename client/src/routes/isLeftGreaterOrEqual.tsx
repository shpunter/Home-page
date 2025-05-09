import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsLeftGreaterOrEqualDoc = lazy(() =>
  import("/client/src/pages/isLeftGreaterOrEqual/isLeftGreaterOrEqual.tsx")
);

export const Route = createFileRoute("/isLeftGreaterOrEqual")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsLeftGreaterOrEqualDoc />
      </Suspense>
    );
  },
});

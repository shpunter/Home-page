import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsEqualDoc = lazy(() => import("/client/src/pages/isEqual/isEqual.tsx"));

export const Route = createFileRoute("/isEqual")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsEqualDoc />
      </Suspense>
    );
  },
});

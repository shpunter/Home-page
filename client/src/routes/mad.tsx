import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const MADDoc = lazy(() => import("/client/src/pages/MAD/MAD.tsx"));

export const Route = createFileRoute("/mad")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <MADDoc />
      </Suspense>
    );
  },
});

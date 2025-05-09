import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const AbsDoc = lazy(() => import("/client/src/pages/abs/abs.tsx"));

export const Route = createFileRoute("/abs")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <AbsDoc />
      </Suspense>
    );
  },
});

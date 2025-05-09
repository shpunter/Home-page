import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const SqrtDoc = lazy(() => import("/client/src/pages/sqrt/sqrt.tsx"));

export const Route = createFileRoute("/sqrt")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <SqrtDoc />
      </Suspense>
    );
  },
});

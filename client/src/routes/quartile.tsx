import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const QuartileDoc = lazy(() => import("/client/src/pages/quartile/quartile.tsx"));

export const Route = createFileRoute("/quartile")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <QuartileDoc />
      </Suspense>
    );
  },
});

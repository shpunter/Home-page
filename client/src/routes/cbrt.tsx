import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const CbrtDoc = lazy(() => import("/client/src/pages/cbrt/cbrt.tsx"));

export const Route = createFileRoute("/cbrt")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <CbrtDoc />
      </Suspense>
    );
  },
});
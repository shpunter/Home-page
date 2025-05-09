import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const DivisionDoc = lazy(() => import("/client/src/pages/division/division.tsx"));

export const Route = createFileRoute("/div")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <DivisionDoc />
      </Suspense>
    );
  },
});

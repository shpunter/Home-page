import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const ToBaseDoc = lazy(() =>
  import("/client/src/pages/subtraction/subtraction.tsx")
);

export const Route = createFileRoute("/toBase")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <ToBaseDoc />
      </Suspense>
    );
  },
});
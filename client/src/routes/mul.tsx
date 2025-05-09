import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const MultiplicationDoc = lazy(() =>
  import("/client/src/pages/multiplication/multiplication.tsx")
);

export const Route = createFileRoute("/mul")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <MultiplicationDoc />
      </Suspense>
    );
  },
});

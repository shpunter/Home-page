import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsBinaryDoc = lazy(() =>
  import("/client/src/pages/isBinary/isBinary.tsx")
);

export const Route = createFileRoute("/isBinary")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsBinaryDoc />
      </Suspense>
    );
  },
});

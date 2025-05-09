import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsLeftGreaterDoc = lazy(() =>
  import("/client/src/pages/isLeftGreater/isLeftGreater.tsx")
);

export const Route = createFileRoute("/isLeftGreater")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsLeftGreaterDoc />
      </Suspense>
    );
  },
});

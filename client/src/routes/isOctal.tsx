import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsOctalDoc = lazy(() =>
  import("/client/src/pages/isOctal/isOctal.tsx")
);

export const Route = createFileRoute("/isOctal")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsOctalDoc />
      </Suspense>
    );
  },
});

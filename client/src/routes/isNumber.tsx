import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsNumberDoc = lazy(() =>
  import("/client/src/pages/isNumber/isNumber.tsx")
);

export const Route = createFileRoute("/isNumber")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsNumberDoc />
      </Suspense>
    );
  },
});
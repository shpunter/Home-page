import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const Octal = lazy(() =>
  import(
    "/client/src/pages/performance/add/sm/int/octal/octal.tsx"
  )
);

export const Route = createFileRoute("/performance/add/sm/int/octal")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <Octal />
      </Suspense>
    );
  },
});

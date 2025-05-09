import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const RoundDoc = lazy(() => import("/client/src/pages/round/round.tsx"));

export const Route = createFileRoute("/round")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <RoundDoc />
      </Suspense>
    );
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const RoundDoc = lazy(() => import("/client/src/pages/round/round.tsx"));

export const Route = createFileRoute("/round")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <RoundDoc />
      </Suspense>
    );
  },
});

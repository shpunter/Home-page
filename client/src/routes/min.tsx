import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const MinDoc = lazy(() => import("/client/src/pages/min/min.tsx"));

export const Route = createFileRoute("/min")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <MinDoc />
      </Suspense>
    );
  },
});


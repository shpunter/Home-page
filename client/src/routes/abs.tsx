import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const AbsDoc = lazy(() => import("/client/src/pages/abs/abs.tsx"));

export const Route = createFileRoute("/abs")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <AbsDoc />
      </Suspense>
    );
  },
});

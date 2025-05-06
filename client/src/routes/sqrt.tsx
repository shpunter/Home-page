import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const SqrtDoc = lazy(() => import("/client/src/pages/sqrt/sqrt.tsx"));

export const Route = createFileRoute("/sqrt")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <SqrtDoc />
      </Suspense>
    );
  },
});

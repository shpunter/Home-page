import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const QuartileDoc = lazy(() => import("/client/src/pages/quartile/quartile.tsx"));

export const Route = createFileRoute("/quartile")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <QuartileDoc />
      </Suspense>
    );
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const MaxDoc = lazy(() => import("/client/src/pages/max/max.tsx"));

export const Route = createFileRoute("/max")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <MaxDoc />
      </Suspense>
    );
  },
});

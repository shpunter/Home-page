import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const PipeDoc = lazy(() => import("/client/src/pages/pipe/pipe.tsx"));

export const Route = createFileRoute("/pipe")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <PipeDoc />
      </Suspense>
    );
  },
});

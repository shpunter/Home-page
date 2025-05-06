import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const SortDoc = lazy(() => import("/client/src/pages/sort/sort.tsx"));

export const Route = createFileRoute("/sort")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <SortDoc />
      </Suspense>
    );
  },
});

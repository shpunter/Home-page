import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const DivisionDoc = lazy(() => import("/client/src/pages/division/division.tsx"));

export const Route = createFileRoute("/div")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <DivisionDoc />
      </Suspense>
    );
  },
});

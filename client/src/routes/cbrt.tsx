import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const CbrtDoc = lazy(() => import("/client/src/pages/cbrt/cbrt.tsx"));

export const Route = createFileRoute("/cbrt")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <CbrtDoc />
      </Suspense>
    );
  },
});
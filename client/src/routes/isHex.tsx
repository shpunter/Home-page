import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsHexDoc = lazy(() => import("/client/src/pages/isHex/isHex.tsx"));

export const Route = createFileRoute("/isHex")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsHexDoc />
      </Suspense>
    );
  },
});


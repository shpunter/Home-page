import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IsHexDoc = lazy(() => import("/client/src/pages/isHex/isHex.tsx"));

export const Route = createFileRoute("/isHex")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IsHexDoc />
      </Suspense>
    );
  },
});


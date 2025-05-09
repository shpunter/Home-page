import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const IQRDoc = lazy(() => import("/client/src/pages/IQR/IQR.tsx"));

export const Route = createFileRoute("/iqr")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <IQRDoc />
      </Suspense>
    );
  },
});

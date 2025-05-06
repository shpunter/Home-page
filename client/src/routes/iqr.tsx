import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IQRDoc = lazy(() => import("/client/src/pages/IQR/IQR.tsx"));

export const Route = createFileRoute("/iqr")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IQRDoc />
      </Suspense>
    );
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const InstallDoc = lazy(() => import("/client/src/pages/install/install.tsx"));

export const Route = createFileRoute("/install")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <InstallDoc />
      </Suspense>
    );
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const InstallDoc = lazy(() => import("/client/src/pages/install/install.tsx"));

export const Route = createFileRoute("/install")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <InstallDoc />
      </Suspense>
    );
  },
});

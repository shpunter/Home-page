import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsLeftGreaterDoc = lazy(() =>
  import("/client/src/pages/isLeftGreater/isLeftGreater.tsx")
);

export const Route = createFileRoute("/isLeftGreater")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsLeftGreaterDoc />
      </Suspense>
    );
  },
});

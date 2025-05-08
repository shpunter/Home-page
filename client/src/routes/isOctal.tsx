import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsOctalDoc = lazy(() =>
  import("/client/src/pages/isOctal/isOctal.tsx")
);

export const Route = createFileRoute("/isOctal")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsOctalDoc />
      </Suspense>
    );
  },
});

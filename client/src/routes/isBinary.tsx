import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const IsBinaryDoc = lazy(() =>
  import("/client/src/pages/isBinary/isBinary.tsx")
);

export const Route = createFileRoute("/isBinary")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <IsBinaryDoc />
      </Suspense>
    );
  },
});

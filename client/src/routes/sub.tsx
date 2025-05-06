import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const SubtractionDoc = lazy(() =>
  import("/client/src/pages/subtraction/subtraction.tsx")
);

export const Route = createFileRoute("/sub")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <SubtractionDoc />
      </Suspense>
    );
  },
});

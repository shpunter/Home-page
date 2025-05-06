import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const MultiplicationDoc = lazy(() =>
  import("/client/src/pages/multiplication/multiplication.tsx")
);

export const Route = createFileRoute("/mul")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <MultiplicationDoc />
      </Suspense>
    );
  },
});

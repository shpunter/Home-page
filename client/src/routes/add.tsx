import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const AdditionDoc = lazy(() => import("/client/src/pages/addition/addition.tsx"));

export const Route = createFileRoute("/add")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <AdditionDoc />
      </Suspense>
    );
  },
});
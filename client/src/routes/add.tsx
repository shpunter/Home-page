import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const AdditionDoc = lazy(() => import("/client/src/pages/addition/addition.tsx"));

export const Route = createFileRoute("/add")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <AdditionDoc />
      </Suspense>
    );
  },
});
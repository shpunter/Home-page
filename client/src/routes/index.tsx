import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import DocSkeleton from "/client/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const Home = lazy(() => import("/client/src/pages/home/home.tsx"));

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <Home />
      </Suspense>
    );
  },
});

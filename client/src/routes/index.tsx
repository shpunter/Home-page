import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("/client/src/pages/home/home.tsx"));

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <Suspense fallback={<span>loading</span>}>
        <Home />
      </Suspense>
    );
  },
});

import { createRootRoute } from "@tanstack/react-router";
import RootComponent from "/src/components/rootComponent/rootComponent.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});

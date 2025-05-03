import { createRootRoute } from "@tanstack/react-router";
import RootComponent from "/client/src/components/rootComponent/rootComponent.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});

import { createRootRoute } from "@tanstack/react-router";
import { List } from "./components/List.tsx";
import { Details } from "./components/Details.tsx";
import { Layout } from "./components/Layout.tsx";
import { createRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: List,
});

const operationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "operation/$type",
  component: Details,
});

export const routeTree = rootRoute.addChildren([indexRoute, operationRoute]);
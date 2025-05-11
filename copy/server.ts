import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import data from "./data.json" with { type: "json" };

const app = new Hono();

app.use(
  "/api/*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 600,
  }),
);

app.get("/", (c) => {
  return c.text("Welcome to the @numio/bigmath API!");
});

app.get("/api/operations", (c) => {
  return c.json(data);
});

app.get("/api/operations/:operation", (c) => {
  if (!c.req.param("operation")) {
    return c.text("No operation type provided.");
  }

  const operation = data.find((item) =>
    item.type.toLowerCase() === c.req.param("operation").toLowerCase()
  );

  if (operation) {
    return c.json(operation);
  } else {
    return c.notFound();
  }
});

export default app;

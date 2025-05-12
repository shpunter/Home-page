import { data } from "./data.ts";

const BOOK_ROUTE = new URLPattern({
  pathname: "/api/benchmark/:type/:size/:base/:repeat",
});

function handler(req: Request): Response {
  const match = BOOK_ROUTE.exec(req.url);

  if (match) {
    const { type = "", size = "", base = "", repeat = "" } =
      match.pathname.groups;

    if (data?.[type]?.[size].result?.[base]?.[repeat]) {
      const { result, value } = data[type][size];

      const str = JSON.stringify({
        value,
        result: result[base][repeat],
      });

      return new Response(str, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }
  }

  return new Response("Not found", {
    status: 404,
  });
}
Deno.serve({ port: 8000 }, handler);

import { data } from "./data.ts";
import {
  serveDir,
  serveFile,
} from "https://deno.land/std@0.224.0/http/file_server.ts";

const PORT = Number(Deno.env.get("PORT")) || 3000;

async function handler(req: Request): Promise<Response> {
  // Serve static files from the ./dist directory
  const response = await serveDir(req, {
    fsRoot: ".",
    urlRoot: "",
    showDirListing: false, // Disable directory listing
    enableCors: true, // Enable CORS for static files
    quiet: true, // Suppress logging for a cleaner output
    headers: [
      "Cache-Control: max-age=2592000", // 30d
      "Strict-Transport-Security: max-age=3600; includeSubDomains",
    ],
  });

  // If the requested file is not found, serve index.html for SPA routing
  if (response.status === 404) {
    return await serveFile(req, "./index.html");
  }

  return response;
}

Deno.serve({ port: PORT }, handler);

const BOOK_ROUTE = new URLPattern({
  pathname: "/api/benchmark/:type/:size/:base/:repeat",
});

function fn(req: Request): Response {
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
Deno.serve({ port: 8000 }, fn);

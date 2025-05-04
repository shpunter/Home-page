import {
  serveDir,
  serveFile,
} from "https://deno.land/std@0.224.0/http/file_server.ts";

const PORT = Number(Deno.env.get("PORT")) || 3000;

async function handler(req: Request): Promise<Response> {
  // Serve static files from the ./dist directory
  const response = await serveDir(req, {
    fsRoot: "./dist",
    urlRoot: "",
    showDirListing: false, // Disable directory listing
    enableCors: true, // Enable CORS for static files
    quiet: true, // Suppress logging for a cleaner output
  });

  // If the requested file is not found, serve index.html for SPA routing
  if (response.status === 404) {
    return await serveFile(req, "./client/dist/index.html");
  }

  return response;
}

// Start the server
Deno.serve({ port: PORT }, handler);

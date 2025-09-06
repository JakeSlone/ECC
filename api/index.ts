import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle API routes
  if (req.url?.startsWith("/api/ping")) {
    const ping = process.env.PING_MESSAGE ?? "ping";
    return res.json({ message: ping });
  }

  if (req.url?.startsWith("/api/demo")) {
    return res.json({
      message: "Hello from Vercel API!",
      timestamp: new Date().toISOString(),
    });
  }

  // Default response for unknown API routes
  res.status(404).json({ error: "API route not found" });
}

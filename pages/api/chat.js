/**
 * /api/chat
 *
 * Currently unused — the app uses client-side keyword matching from lib/match.js
 *
 * When your fine-tuned Tigrinya model is ready, this is where you plug it in.
 * The frontend will call POST /api/chat with { messages: [...] }
 * and this route will proxy to your model endpoint.
 *
 * The frontend Chat component already has the fetch call written and commented out.
 * Uncomment it, delete the client-side findBest call, and you're done.
 */

export default function handler(req, res) {
  res.status(503).json({ error: 'Model not connected yet.' })
}

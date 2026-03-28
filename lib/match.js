/**
 * match.js — Tigrinya keyword matching engine
 *
 * Pure functions only. No DOM, no React, no side effects.
 *
 * Future swap point — replace findBest with a model call:
 *   export async function findBest(query, pairs) {
 *     const res = await fetch('/api/chat', { body: query })
 *     return res.json()
 *   }
 */

/**
 * Tokenise a Tigrinya string into meaningful tokens.
 * Strips punctuation, lowercases, filters short tokens.
 */
function tokenise(text) {
  return text
    .toLowerCase()
    .replace(/[?!።፡፣،.،:;]/g, '')
    .split(/\s+/)
    .filter(t => t.length > 1)
}

/**
 * Score a query against a single candidate question.
 * Returns a number between 0 and 1.
 *
 * Uses substring matching to handle Tigrinya morphology —
 * root words shift with inflection so exact match is too strict.
 */
function score(query, candidate) {
  const qTokens = tokenise(query)
  const cTokens = tokenise(candidate)

  if (qTokens.length === 0) return 0

  let hits = 0
  for (const qt of qTokens) {
    for (const ct of cTokens) {
      if (ct === qt || ct.includes(qt) || qt.includes(ct)) {
        hits++
        break
      }
    }
  }

  return hits / qTokens.length
}

/**
 * Find the best matching pair for a query.
 *
 * Returns:
 *   { match: pair | null, confidence: number, candidates: pair[] }
 *
 * match is null if nothing clears the confidence threshold.
 * candidates are the top 3 closest pairs (for "did you mean?" UI).
 */
function findBest(query, pairs) {
  const THRESHOLD = 0.25

  const scored = pairs
    .map(pair => ({ pair, s: score(query, pair.q) }))
    .sort((a, b) => b.s - a.s)

  const top       = scored[0]
  const match     = top && top.s >= THRESHOLD ? top.pair : null
  const candidates = scored
    .slice(0, 3)
    .filter(x => x.s > 0)
    .map(x => x.pair)

  return { match, confidence: top?.s ?? 0, candidates }
}

/**
 * Select the correctly gendered answer from a pair.
 *
 * @param {object} pair   - a pair from pairs.js
 * @param {'m'|'f'|null} gender
 * @returns {string}
 */
function getAnswer(pair, gender) {
  if (!pair.a) return ''
  if (gender === 'm' && pair.a.m) return pair.a.m
  if (gender === 'f' && pair.a.f) return pair.a.f
  // Fallback: prefer m as default if no gender known
  return pair.a.m || pair.a.f || ''
}

module.exports = { tokenise, score, findBest, getAnswer }

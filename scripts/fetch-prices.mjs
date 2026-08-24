// Runs in GitHub Actions on a schedule. Fetches a live quote for every
// portfolio ticker from Finnhub (key comes from the FINNHUB_API_KEY repo
// secret, never committed) and writes prices.json, which the published page
// reads with a same-origin fetch() — no key ever touches the browser.
const TICKERS = ['CLSK', 'CRWV', 'IREN', 'LEU', 'NOW', 'ORCL', 'PLTR', 'RIOT', 'SNDK'];

const key = process.env.FINNHUB_API_KEY;
if (!key) {
  console.error('FINNHUB_API_KEY is not set');
  process.exit(1);
}

async function fetchQuote(ticker) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(ticker)}&token=${encodeURIComponent(key)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${ticker}: HTTP ${res.status}`);
  const data = await res.json();
  if (!data || typeof data.c !== 'number') throw new Error(`${ticker}: bad payload`);
  return { c: data.c, pc: data.pc };
}

const quotes = {};
const errors = [];
for (const ticker of TICKERS) {
  try {
    quotes[ticker] = await fetchQuote(ticker);
  } catch (err) {
    errors.push(String(err));
  }
}

if (Object.keys(quotes).length === 0) {
  console.error('All quote requests failed:', errors.join('; '));
  process.exit(1);
}
if (errors.length) {
  console.warn('Some quotes failed:', errors.join('; '));
}

const fs = await import('node:fs/promises');
await fs.writeFile(
  'prices.json',
  JSON.stringify({ updatedAt: new Date().toISOString(), quotes }, null, 2) + '\n'
);
console.log(`Wrote prices.json with ${Object.keys(quotes).length}/${TICKERS.length} quotes`);

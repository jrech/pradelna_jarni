const pages = ['', 'sluzby', 'cenik', 'kontakt', 'llm-info', 'ochrana-osobnich-udaju', 'zasady-cookies'];

export function GET({ site }) {
  const base = site ?? new URL('https://www.pradelnajarni.cz');
  const urls = pages
    .map((page) => `<url><loc>${new URL(page, base).href}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}

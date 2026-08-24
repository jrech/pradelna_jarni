export const siteConfig = {
  name: 'Prádelna Jarní', legalName: 'Prádelna JARNÍ s.r.o.', url: 'https://www.pradelnajarni.cz',
  description: 'Profesionální prádelenský servis pro firmy, hotely, ubytování a gastro provozy v Brně a okolí.',
  logo: '/assets/logo-ink.svg', image: '/assets/hero-laundry.png',
  address: { streetAddress: 'Valchařská 24/36', postalCode: '614 00', addressLocality: 'Brno', addressCountry: 'CZ' },
  contacts: { operations: { telephone: '+420702000109', email: 'info@pradelnajarni.cz' }, sales: { telephone: '+420604113337', email: 'obchod@pradelnajarni.cz' } },
  areaServed: 'Brno a okolí',
} as const;

<!-- impeccable:product-schema 1 -->
# Prádelna Jarní — product context

## Platform

Veřejný responzivní marketingový web pro desktop, tablet a mobil. Primární jazyk je čeština.

## Stack

- Astro, JavaScript a nativní CSS
- statický výstup připravený pro Vercel
- minimum klientského JavaScriptu; motion pouze jako progresivní vylepšení
- Geist Variable podle schválené Figmy

## Users

- hotely a wellness provozy
- penziony, apartmány a menší ubytování
- restaurace, kavárny a catering
- firmy a průmyslové provozy

Uživatel typicky řeší pravidelný tok provozního textilu a chce rychle zjistit, zda Prádelna Jarní převezme celý cyklus včetně svozu a doručení.

## Product Purpose

Web má získávat relevantní nezávazné B2B poptávky a současně vysvětlit službu, logistiku, cenu a způsob spolupráce. Návštěvník má bez hledání pochopit, pro koho služba je, co přesně zahrnuje a kam se ozvat.

## Positioning

Prádelna Jarní je schopný lokální partner pro profesionální praní v Brně a okolí. Neprodává abstraktní „svěžest“, ale klidnější provoz: vyzvednutí, zpracování a návrat připraveného prádla v domluveném režimu.

## Operating Context

- Hlavní konverze: nezávazná obchodní poptávka.
- Primární region: Brno a okolí.
- Provozní a obchodní kontakt musí být jasně oddělené.
- Web nesmí slibovat neověřenou kapacitu, termíny ani zákaznické reference.
- Reálné fotografie provozu zatím nejsou součástí podkladů; Figma fotografie jsou dočasné prezentační assety.

## Capabilities / Constraints

- Služby: praní, sušení, mandlování, třídění, skládání, balení, svoz a doručení.
- Pro menší ubytování lze praní spojit s úklidem apartmánů.
- Náhradní plnění je relevantní benefit; přesné právní znění musí zůstat konzervativní.
- Ceník je orientační, bez DPH, a může se měnit podle rozsahu, pravidelnosti a logistiky.
- Neexistuje potvrzený backend ani služba pro odesílání formuláře. Kontaktní tok proto musí mít bezpečný e-mailový a telefonní fallback.

## Brand Commitments

- Industrial reliability × hospitality warmth.
- Ink Blue, Warm White/Cream a střídmý Orange akcent.
- Typografický, klidný, lokální a provozně důvěryhodný výraz.
- Proof má přednost před claimem.
- Žádná generická SaaS estetika, greenwashing ani prádelenská klišé.

## Evidence on Hand

- `PROJECT.md`: schválený business, obsahový a faktický source of truth.
- `DESIGN.md`: schválený designový source of truth.
- Figma soubor Prádelna Jarní: layout homepage, logo, fotografie a podpisový footer asset.
- Ověřené veřejné kontakty a aktuální položky ceníku ze stávajícího webu.

## Product Principles

1. Návštěvník nejdřív pochopí službu, potom detaily.
2. Jedna dominantní akce v jednom kontextu.
3. Konkrétní proces a kontakty místo nepodložených superlativů.
4. Existující komponenta a pattern mají přednost před novou variantou.
5. Obsah musí fungovat bez animací a bez klientského JavaScriptu.

## Accessibility

- WCAG AA kontrast, viditelné focus states a sémantická struktura.
- Kompletní ovládání klávesnicí.
- Respektování `prefers-reduced-motion`.
- Fotografie mají věcné alt texty; dekorativní assety jsou skryté před asistivními technologiemi.
- Tap targets mají alespoň 44 × 44 px.

## Open Decisions

- Nahradit dočasné Figma fotografie reálnými fotografiemi provozu, týmu a logistiky.
- Napojit formulář na schválenou e-mailovou službu nebo CRM.
- Před publikací znovu potvrdit ceník, kontakty a právní formulaci náhradního plnění.

# Prádelna Jarní — design system pro Codex

> Praktický source of truth podle dosavadní Figmy a konverzace. Design má být klidný, typografický, lokální a provozně důvěryhodný. Nepřidávat nové vizuální směry bez konkrétního důvodu.

## 1. Design direction

**Industrial reliability × hospitality warmth**

Jarní má působit jako schopný lokální B2B partner: přesný, lidský, klidný a sebevědomý. Vizuál nesmí sklouznout do sterilní nemocnice, eco drogerie, samoobslužné prádelny, facility-management korporace ani generického SaaS webu.

Hlavní principy:

- **Funkce před dekorací.** Každý detail má podporovat orientaci nebo zapamatovatelnost.
- **Typografie je hlavní brand asset.** Velké měřítko, whitespace, lehčí váhy.
- **Proof > claims.** Fotografie provozu a konkrétní proces mají větší hodnotu než obecné marketingové sliby.
- **Jeden výrazný moment stačí.** Ne každá sekce potřebuje motion nebo oversized asset.
- **Nebát se prázdna.** Stránka nemá být namačkaná.

## 2. Color tokens

### Core palette

| Token | Hodnota | Použití |
|---|---|---|
| `--color-ink` | `#19333D` | dark sections, text, logo, navigace |
| `--color-cream` | `#F3EEE3` | hlavní canvas, text na Ink |
| `--color-orange` | `#E85D32` | CTA, active state, progress, drobné akcenty |
| `--color-warm-white` | `#FAF8F3` | světlé sekundární plochy |
| `--color-soft-grey` | `#D8D6D0` | borders, disabled/muted UI |
| `--color-muted-ink` | `#66777D` | sekundární text na světlém pozadí |
| `--color-near-black` | `#10252D` | nejtmavší text/kontrastní detail |

Pracovní poměr homepage: přibližně **Cream/Warm White 65 % · Ink 30 % · Orange 5 %**.

Pravidla:

- Orange je akcent, ne velká dekorativní plocha.
- Nepřidávat zelenou jen proto, že jde o praní nebo jarní motiv.
- Nepoužívat gradientové logo ani gradienty jako výchozí styl.
- Footer: Ink Blue; oversized wordmark v Cream s nízkou opacity, prodloužené `í` může být Orange nebo Cream.
- Všechny barvy musí mít dostatečný kontrast; ověřit CTA, muted text a text přes fotografie.

## 3. Logo a brand assets

### Wordmark

Základní hierarchie je `prádelna` sekundárně a `jarní` dominantně. Character asset je prodloužené `í`, abstraktní tvar mezi listem, textilním záhybem a tahem štětce.

Varianty:

- stacked primary: `prádelna` nad `jarní`;
- horizontal logo;
- samostatný wordmark `jarní`;
- samostatný `í`/stroke symbol;
- zjednodušený micro mark pro favicon, avatar nebo výšivku.

Použití barev: Ink na Cream, Cream na Ink, White na fotografii, výjimečně Orange detail. Logo nepřekreslovat, nenatahovať, neotáčet, nedoplňovat ikonou pračky nebo listu.

### Extended `í` / Jarní Stroke

Primární podpisový asset:

- **micro:** malý akcent vedle labelu nebo čísla;
- **oversized:** velký crop mimo viewport;
- **image crop:** část assetu v rohu fotografie;
- **motion:** subtilní draw/extend reveal;
- **wordmark detail:** Orange/Cream v prodlouženém `í`.

Používat střídmě. Pokud se objeví v každé sekci, přestává být signature.

### Fold

Sekundární geometrický motiv inspirovaný skládáním textilu. Používat jen pro přechody, dokumenty, social nebo fyzické materiály. Nemá se stát ilustrací ručníku ani opakujícím se patternem na každé ploše.

## 4. Typography

### Typeface

Primární rodina: **Early Sans**, pokud je dostupná a licenčně připravená. Preferovat jednu konzistentní rodinu před kombinací více fontů.

- Regular: body text;
- Medium: headline, navigation, UI;
- Semibold: pouze důraz, CTA nebo vybrané labely;
- žádné ultra-bold hero nadpisy jako default.

### Major Third scale

Typografická škála vychází z Major Third poměru přibližně `1.25`. Pracovní tokeny:

| Role | Desktop | Mobilní pracovní hodnota | Line-height |
|---|---:|---:|---:|
| Display | 76 px | 48–56 px | 0.95–1.0 |
| Hero | 64 px | 44–52 px | 0.98–1.02 |
| H1 | 48 px | 38–44 px | 1.0–1.05 |
| H2 | 40 px | 32–36 px | 1.05–1.1 |
| H3 | 32 px | 26–30 px | 1.1 |
| H4 | 24 px | 22–24 px | 1.15 |
| Lead | 20 px | 18–20 px | 1.35 |
| Body L | 18 px | 17–18 px | 1.45 |
| Body | 16 px | 16 px | 1.5 |
| Small | 14 px | 14 px | 1.4 |
| Eyebrow | 12 px | 11–12 px | 1.2 |

Pravidla:

- Velké nadpisy mají být výrazné měřítkem, ne tloušťkou.
- Eyebrow používat jako orientační metadata: `01 / BRNO / PRÁDELENSKÝ SERVIS`.
- U oversized textu povolit crop, ale nikdy ne na úkor čitelnosti hlavního sdělení.
- Nepoužívat sentence case a uppercase náhodně; uppercase je pro krátké labely, ne dlouhé odstavce.

## 5. Spacing a layout

### Spacing scale

Používat základní kroky:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 120 · 160`

Pracovní CSS tokeny pro section rhythm:

```css
--section-compact: 80px;   /* tablet 64px / mobile 48px */
--section-standard: 120px; /* tablet 96px / mobile 64px */
--section-large: 160px;    /* tablet 120px / mobile 80px */
```

Interní vztahy používají samostatné tokeny, ne section padding:

```css
--rel-eyebrow-heading: 16px;
--rel-heading-copy: 24px;
--rel-intro-content: 64px;
--rel-content-group: 48px;
--rel-card-gap: 24px;
```

Homepage rhythm:

| Sekce | Kategorie | Poznámka |
|---|---|---|
| Hero | custom | Figma composition; 32px top, standard bottom |
| Audience / segments | sticky composition | Height and centering drive rhythm; no generic padding |
| Services | large | 160px desktop, 120px tablet, 80px mobile |
| Textile marquee | compact component | 24px internal padding; not a normal section |
| Process | sticky composition | Scroll range drives rhythm; no arbitrary section padding |
| Sticky values | sticky composition | Intro uses large spacing; item bodies own scroll rhythm |
| About / trust | standard | 120px desktop, 96px tablet, 80px mobile |
| FAQ | standard | 120px desktop, 96px tablet, 64px mobile |
| Final CTA | large | Orange composition needs generous internal breathing room |
| Footer | custom | 80px / 64px main padding plus legal row |

### Grid

- Desktop: 12 sloupců.
- Max content width: přibližně 1280–1440 px podle viewportu.
- Gutter a padding musí zůstat velkorysé; konkrétní breakpointy přizpůsobit reálnému browser testu.
- Mobil: single column, 20–24 px boční padding jako pracovní výchozí bod.

### Section rhythm

- standardní sekce: 120 px top/bottom;
- showcase/editorial sekce: 140–160 px;
- compact transition/strip: 64–96 px;
- mobile: 64–96 px podle hustoty obsahu;
- mezi Hero a další sekcí nechat přibližně 140–180 px desktop breathing room, pokud layout dovolí.

Nevyrábět rytmus z desítek náhodných marginů. Každá sekce má mít jasný top/bottom rhythm a vlastní mechanismus.

## 6. Radii, borders a surfaces

- Výchozí radius: `0` pro editorial blocks a fotografie.
- Jemný radius: přibližně `8 px`, pouze tam, kde pomáhá seskupení nebo použitelnosti.
- Nepoužívat různé radius hodnoty na každé kartě.
- Borders: 1 px, Soft Grey na světlém pozadí, translucent Cream/Muted Ink na tmavém.
- Avoid shadow-heavy UI. Hloubku vytváří kontrast ploch, spacing a fotografie.
- Cards jsou nástroj pro grouping, ne výchozí obal každého textu.

## 7. Buttons a links

### Primary button

- Orange background;
- Ink nebo White text podle kontrastu;
- jednoduchý tvar, minimální radius;
- label: `Nezávazně poptat praní →`;
- hover: jemná změna odstínu/posun šipky, bez přehnaného scale.

### Secondary link

- textový link s malou šipkou nebo směrovým znakem;
- `Prohlédnout služby ↓`, `Zjistit více →`;
- vlastní subtilní underline/line reveal, ne automatické těžké podtržení;
- na mobilu musí být dostatečně velká tap area.

### CTA hierarchy

- navbar: primární konverzní CTA;
- hero: sekundární explorativní link;
- final CTA: opakování hlavní konverze;
- neumisťovat dvě stejné výrazné CTA do jednoho viewportu.

## 8. Homepage patterns

### Hero 24 / editorial hero

Výchozí vítězný směr:

- velký H1 vlevo;
- vysvětlující text a textový link vpravo;
- velká fotografie pod textem, téměř přes content width;
- velkorysý whitespace mezi navigací, copy a fotografií;
- žádné čtyři benefit ikonky pod hero;
- navbar CTA zůstává jediným primárním CTA v úvodu.

Pracovní copy:

> Profesionální praní pro hotely, gastro a firmy.

> Postaráme se o vaše provozní prádlo od svozu až po doručení. Vypereme, usušíme, připravíme a přivezeme zpět.

`Prohlédnout služby ↓`

Hero photo reveal: text nejdřív, fotografie potom clip/reveal zespodu, pouze velmi lehký image scale/parallax.

### Dark segment section

Ink background, Cream typography, Orange jen jako active state nebo číslo. Segmenty mají být seznam/typografická navigace, ne čtyři rounded SaaS cards.

Segmenty: Hotely & wellness · Penziony & apartmány · Gastro · Firmy & průmysl.

Možný pattern: sticky levý statement + scrollující pravý seznam s aktivním bodem. Pokud se použije, rozsah přibližně 140–180vh; ne 300vh.

### Services cards + textile marquee

Služby na Cream backgroundu. Cards mají jasně seskupit čtyři core operations: Praní, Sušení, Mandlování, Třídění. Skládání/balení uvést v popisu nebo procesu.

Pod cards:

1. úklidový callout pro apartmány;
2. full-bleed Ink textile strip.

Textile strip:

`LOŽNÍ PRÁDLO — RUČNÍKY — ŽUPANY — UBRUSY — UTĚRKY — ZÁSTĚRY — PROVOZNÍ TEXTIL —`

- výška přibližně 70–90 px desktop;
- Cream text, Orange separators/dots;
- pomalý marquee 20–30 s na průjezd;
- při `prefers-reduced-motion` statický nebo bez transformace;
- hover nesmí strip zrychlit ani z něj udělat atrakci.

### Process timeline

Čtyři kroky: Domluva → Vyzvednutí → Zpracování → Doručení.

- jednoduché číslo/label + popis;
- může se postupně vyplňovat Orange vertikální linka;
- nepoužívat fullscreen sticky storytelling;
- timeline musí fungovat i bez JS/motion.

### Sticky value proposition

Hlavní motion signature homepage:

- fullscreen nebo téměř fullscreen Ink segment;
- sticky intro/statement;
- aktivní body: Spolehlivost → Flexibilita → Přímá komunikace;
- jemné změny textu/opacity/line progress;
- žádné čtyři další scrollytelling sekce, fullscreen fotopanely ani accordion v accordionu.

Pracovní statement:

> Prádlo vyřešíme. Vy řešte svůj provoz.

### About / trust

Editorial split nebo široká reálná fotografie. Headline:

> Prádelna, která rozumí vašemu provozu.

Náhradní plnění jako samostatný trust řádek s checkmarkem, ne jako hlavní headline feature.

### Footer

Footer je poslední designová sekce.

Horní část:

- Ink Blue background;
- logo vlevo;
- sloupce `Služby`, `Navigace`, `Kontakt` podle reálné IA;
- vlevo případně `Brno a okolí` a krátký descriptor;
- vpravo CTA copy typu `Máte prádlo? Postaráme se o zbytek.` + link.

Spodní část:

- tenká rule;
- oversized `jarní`, klidně částečně cropnuté spodním viewportem;
- Cream s nízkou opacity přibližně 18–25 %, ne neutrální šedá;
- prodloužené `í`/leaf-stroke v Orange nebo Cream, ne hnědé;
- legal řádek menší a vizuálně utlumený;
- sociální ikony pouze pokud profily skutečně existují.

## 9. Photography direction

**Modern documentary 35mm.** Fotografie má působit observed, not staged — teplá, hmatová, lehce nedokonalá, ale pořád profesionální.

Preferovat:

- přirozené nebo měkké dostupné světlo;
- jemný film grain, ne digitální noise;
- měkčí kontrast, utlumené highlights, ne crushed black;
- přirozené skin tones a lehce desaturované barvy;
- momentky práce, ruce, textil, páru, kov, vozík, nakládku, předání;
- wide environmental shot + medium pracovní moment + close detail;
- občas foreground obstruction nebo lehký motion blur.

Vyhnout se:

- smějícímu se člověku u pračky;
- modrým „cleanliness“ stock fotkám;
- laboratorním rukavicím, pokud nepatří do procesu;
- přepálené bílé;
- falešným AI zaměstnancům;
- stocku, který implikuje provoz Jarní.

Placeholder je v pořádku pro vývoj, ale reálné musí být O nás, tým, provoz, dodávka, svoz, předání a reference.

## 10. Motion principles

Motion komunikuje **calm efficiency**.

### Default reveal

- opacity `0 → 1`;
- translateY `24px → 0`;
- přibližně 600–900 ms;
- easing měkký, bez bounce.

### Images

- subtilní scale `1.03 → 1`;
- clip/reveal zespodu nebo z boku;
- žádný agresivní parallax.

### Stroke

- draw/extend animation při loadu nebo vstupu do viewportu;
- max jeden signature reveal na sekci;
- footer může mít velmi pomalý posun wordmarku nahoru o 40–60 px.

### Accessibility

- respektovat `prefers-reduced-motion`;
- obsah nesmí být dostupný pouze po animaci;
- sticky sekce musí mít smysluplný fallback na mobilu;
- marquee musí být možné vnímat i jako statický seznam.

## 11. Responsive behavior

### Desktop

- 12-column grid;
- editorial asymmetry a velká fotografie;
- sticky value proposition může zůstat hlavním wow momentem;
- preserve whitespace, nekomprimovat sekce jen kvůli výšce screenshotu.

### Tablet

- zmenšit grid a přejít na 6–8 logických sloupců;
- zachovat pořadí copy před detailem;
- kontrolovat, aby hero image neztratila dominantní roli.

### Mobile

- jednosloupcový tok;
- navbar CTA může přejít do menu, ale hlavní CTA se vrací pod hero copy;
- sticky value proposition převést na krátké scrollované bloky nebo přirozený stack;
- nechat crop fotografií řídit `object-position`, ne deformaci;
- cards mohou být full-width, ale zůstat jednoduché;
- textile marquee zpomalit nebo staticky zobrazit;
- footer columns skládat do logické sekvence, oversized wordmark ponechat jako brand signature bez nečitelného cropu.

## 12. Anti-patterns

Nedělat:

- generické SaaS rounded cards a dashboardové layouty;
- gradienty, glassmorphism, neon nebo přemíru shadows;
- zelené listy a „eco laundry“ symboliku bez důvodu;
- ikonku pro každý benefit;
- další stejné CTA v každé sekci;
- příliš mnoho sticky efektů;
- hero s falešným provozem Jarní;
- oversized wordmark v neutrální šedé nebo s hnědým leaf assetem;
- fotografický collage, kde každá sekce používá jiný styl;
- sekce vytvořené pouze proto, aby stránka „vypadala plnější“.

## 13. Implementation checklist pro Codex

Před přidáním nové komponenty zkontrolovat:

- Existuje už stejný pattern v tomto dokumentu nebo v kódu?
- Jakou konkrétní otázku zákazníka řeší?
- Má obsah ověřený proof, nebo je to jen claim?
- Drží se Cream/Ink/Orange systému?
- Nevzniká další stejné CTA nebo další sticky moment?
- Funguje bez motion, na mobilu, klávesnicí a s reduced motion?
- Nepůsobí jako generický SaaS template?

Před odevzdáním zkontrolovat také kontrast, focus states, alt texty, skutečné kontakty, placeholdery a to, že žádný placeholder není vydáván za reálný provoz Jarní.

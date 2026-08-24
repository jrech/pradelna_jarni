# Prádelna Jarní — projektový kontext

> Praktický source of truth pro Codex. Dokument popisuje, co má web říkat, komu slouží a co se nesmí vymýšlet bez potvrzení klienta.

## 1. Rychlé shrnutí

**Značka:** Prádelna Jarní  
**Typ firmy:** lokální B2B prádelenský servis  
**Region:** Brno a okolí  
**Hlavní výsledek pro zákazníka:** čisté provozní prádlo je vyzvednuté, zpracované a doručené v domluveném režimu, takže zákazník řeší svůj provoz místo prádla.

**Pracovní hlavní claim:**

> Prádlo vyřešíme. Vy řešte svůj provoz.

**Pracovní positioning:**

> Spolehlivý lokální partner pro profesionální péči o prádlo, svoz, zpracování a doručení pro hotely, ubytování, gastro a firmy.

Značka nemá působit jako „čistota, svěžest a ekologie“. Má působit jako klidný, schopný a lidský partner, který ubírá zákazníkovi provozní starost.

## 2. Co je potvrzené a co je pracovní

### Potvrzené nebo převzaté ze stávajícího webu

- Firma působí v Brně a okolí.
- Nabídka je B2B a míří na hotely, wellness, penziony/apartmány, gastro a firmy/průmysl.
- Základní služba zahrnuje svoz, zpracování prádla a doručení zpět.
- Relevantní operace jsou praní, sušení, mandlování, třídění, skládání a balení.
- Praní lze u menších ubytování spojit také s úklidem apartmánů/Airbnb.
- Na služby lze uplatnit náhradní plnění — přesné právní a obchodní znění musí před publikací potvrdit klient.
- Stávající web uvádí možnost spolupráce bez dlouhodobé smlouvy, případně zkušební období; dlouhodobější spolupráce může přinést lepší cenu a garanci kapacity. Tuto informaci umístit až po ověření aktuálních podmínek.
- Na stávajícím webu není potvrzený silný proof údaj typu počet klientů, kg/den, kapacita nebo garantovaný turnaround time.

### Pracovní rozhodnutí z Figmy a konverzace

- Homepage flow: Hero → Pro koho → Služby → Proces → Value proposition → O nás → FAQ → Final CTA → Footer.
- Hlavní CTA je „Nezávazná poptávka“ / „Nezávazně poptat praní“.
- Hero má sekundární textový link „Prohlédnout služby ↓“, nikoli druhé stejné CTA.
- Ceník patří na samostatnou stránku `/cenik`, ne jako velká tabulka na homepage.
- FAQ, kontakt a footer se mají odvodit z hotového systému v Codexu, ne ručně překreslovat jako nové Figma obrazovky.

### Nikdy nevymýšlet

- počty zákazníků, kilogramy, denní kapacitu, počet vozů, počet zaměstnanců nebo rychlost zpracování;
- konkrétní garance termínů, pokud nejsou potvrzené klientem;
- reference, loga zákazníků, hodnocení, certifikace, ekologické certifikáty nebo ocenění;
- tvrzení „ekologické“, „udržitelné“, „nejmodernější“ či „největší“ bez důkazu;
- ceny mimo aktuální ceník a podmínky, zejména DPH, logistické příplatky a minimální odběr;
- pracovní jména, role nebo fotografie lidí vydávané za tým Jarní, pokud nejsou skutečné;
- kontaktní údaje z placeholderu.

Pokud informace není jistá, buď ji vynechat, nebo označit jako `TODO: ověřit u klienta`.

## 3. Business a obchodní cíl

Prádelna Jarní neprodává pouze vyprané kusy. Prodává klidnější provozní režim:

1. klient se domluví na režimu;
2. Jarní prádlo vyzvedne;
3. prádlo vypere, usuší, případně vymandluje, vytřídí, složí a zabalí;
4. čisté prádlo doručí zpět;
5. při změně potřeb komunikuje zákazník přímo s prádelnou.

Hlavní obchodní cíl webu je získat relevantní nezávazné poptávky. Sekundární cíle jsou vysvětlit vhodnost pro konkrétní typ provozu, odstranit obavy ze svozu/ceny/smlouvy a dát návštěvníkovi důvod věřit, že jde o skutečného lokálního dodavatele.

Web nemá optimalizovat pouze na návštěvnost. Má rychle odpovědět:

- Co Jarní dělá?
- Je to pro můj typ provozu?
- Co přesně převezme za mě?
- Jak probíhá svoz a doručení?
- Jak se domluvím a kolik informací potřebuji pro poptávku?

## 4. Cílové skupiny

### Hotely a wellness

Potřebují pravidelný cyklus ložního prádla, ručníků, županů a dalšího textilu. Důležitá je předvídatelnost, kvalita výsledku, kapacita a návaznost na obsazenost.

Komunikace: „Čisté prádlo připravené podle rytmu vašeho provozu.“

### Penziony, apartmány a menší ubytování

Potřebují flexibilní servis a často řeší více dodavatelů najednou. Pro tuto skupinu je relevantní kombinace praní a úklidu.

Komunikace: „Praní a případně úklid na jednom místě.“

### Gastro

Restaurace, kavárny, catering a další provozy řeší ubrusy, utěrky, zástěry a provozní textil. Důležitá je pravidelnost, čistota, třídění a logistika.

Komunikace: „Provozní textil se vrací připravený na další směnu.“

### Firmy a průmysl

Potřebují provozní, pracovní nebo úklidový textil podle konkrétního režimu. Náhradní plnění může být relevantní obchodní benefit, ale nesmí zastínit základní službu.

Komunikace: „Domluvený servis bez zbytečné administrativy.“

## 5. Služby

### Primární služby

- praní;
- sušení;
- mandlování;
- třídění;
- skládání a balení;
- svoz a doručení.

### Typy textilu

Používat konkrétní seznam, pokud je potřeba vysvětlit rozsah:

`Ložní prádlo · ručníky · župany · ubrusy · utěrky · zástěry · provozní textil · úklidové textilie`

Na homepage se seznam objeví jako typografický textile strip/marquee, ne jako další karta.

### Úklid apartmánů

Sekundární callout pod hlavními service cards:

> **Pro apartmány ještě jednodušší provoz**  
> U menších ubytování můžeme praní spojit také s úklidem. Místo koordinace několika dodavatelů řešíte vše s námi.

CTA: `Zjistit více →`

Nezobrazovat úklid jako pátou rovnocennou kartu hlavní prádelenské služby.

## 6. Svoz a logistika

Logistika je součást core nabídky, ne doplňková poznámka.

Základní popis procesu:

1. **Domluva** — zjistit typ provozu, objem, textil a požadovaný režim.
2. **Vyzvednutí** — svoz podle dohodnutého režimu.
3. **Zpracování** — praní, sušení a dle potřeby mandlování, třídění, skládání a balení.
4. **Doručení** — čisté prádlo zpět k zákazníkovi.

Nepřidávat konkrétní dny, časová okna, minimální objemy, oblast svozu ani garance, dokud je klient nepotvrdí.

## 7. Messaging

### Hierarchie

**Brand:**  
Prádlo vyřešíme. Vy řešte svůj provoz.

**Functional:**  
Profesionální praní pro hotely, gastro a firmy.

**Service:**  
Od svozu po čisté prádlo zpět u vás.

**Pillars:**  
Spolehlivost · Flexibilita · Přímá komunikace

**CTA:**  
Nezávazně poptat praní

### O nás — pracovní verze

> **Prádelna, která rozumí vašemu provozu.**  
> Nejde jen o čisté prádlo. Důležité je, aby bylo připravené ve správný čas a služba fungovala podle potřeb vašeho provozu.

Pod tím může být trust řádek:

> **✓ Možnost využít náhradní plnění**  
> Na naše služby lze uplatnit náhradní plnění.

Právní formulaci před nasazením ověřit.

## 8. Informační architektura homepage

### 1. Hero

- positioning: profesionální praní pro hotely, gastro a firmy;
- velká dokumentární fotografie/prozatímní placeholder;
- krátké vysvětlení od svozu po doručení;
- sekundární link `Prohlédnout služby ↓`;
- hlavní konverzní CTA zůstává v navigaci.

### 2. Pro koho

Ink/dark segment s typy zákazníků: Hotely & wellness, Penziony & apartmány, Gastro, Firmy & průmysl. Má návštěvníka rychle zařadit, ne být katalogem benefitů.

### 3. Služby

Cards: Praní, Sušení, Mandlování, Třídění. Skládání a balení uvést v popisu/procesu, ne nutně jako další kartu.

Pod cards: úklidový callout pro apartmány.

Pod callout: full-bleed textile strip s pomalým marquee.

### 4. Jak to funguje

Jednoduchá timeline: Domluva → Vyzvednutí → Zpracování → Doručení. Může mít jemný scroll progress, ale nemá být další sticky show.

### 5. Value proposition

Hlavní tmavý sticky moment homepage. Pracovní body: Spolehlivost, Flexibilita, Přímá komunikace. Hlavní statement:

> Prádlo vyřešíme. Vy řešte svůj provoz.

### 6. O nás / trust

Editorial text s reálnou fotografií provozu/týmu, pokud je k dispozici. Náhradní plnění jako sekundární proof/detail, ne jako hero claim.

### 7. FAQ

Odvozený accordion, minimálně:

- Musím se vázat smlouvou?
- Jak funguje svoz a rozvoz?
- Jak se stanovuje cena?
- Lze využít náhradní plnění?

Obsah cen, termínů a právních podmínek ověřit.

### 8. Final CTA

Krátké, konkrétní, s jednou akcí: nezávazná poptávka. Neopakovat dlouhý seznam služeb.

### 9. Footer

Ink Blue. Utilitární horní část s logem, službami, navigací a kontaktem. Dole oversized `jarní` wordmark v Cream s nízkou opacity a charakteristickým prodlouženým `í` jako Orange/Cream assetem. Footer je poslední brandová sekce, ne odpadkový koš na odkazy.

## 9. Plánované podstránky

### `/sluzby`

Rozšířit core služby, textil, svoz a případně úklid apartmánů. Použít existující service/card a editorial patterns.

### `/cenik`

Přehledná tabulka nebo seznam aktuálních orientačních cen. Uvést, zda jsou ceny bez DPH, a že se mohou měnit podle rozsahu, pravidelnosti a logistiky — pouze pokud to klient potvrdí. Ve starším průzkumu byly vidět například orientační ceny ručník 14 Kč, osuška 18 Kč, jednolůžkové prostěradlo 22 Kč, povlak na jednolůžkovou deku 32 Kč a župan 55 Kč; před použitím vždy načíst aktuální ceník.

### `/jak-to-funguje`

Podrobný proces domluvy, svozu, zpracování a doručení. Bez vymyšlených časových garancí.

### `/kontakt`

Oddělit obchodní poptávku od provozního kontaktu, aby návštěvník věděl, kam volat.

### `/faq`

Praktické námitky: smlouva, svoz, cena, náhradní plnění, případně úklid.

## 10. Kontaktní a logické informace

Ve starším průzkumu byly nalezeny tyto údaje; před publikací je nutné potvrdit jejich aktuálnost:

- **Provozní kontakt:** `+420 702 000 109` · `info@pradelnajarni.cz`
- **Obchodní poptávky:** `+420 604 113 337` · `obchod@pradelnajarni.cz`
- **Kontaktní osoba pro poptávky:** Mgr. Simona Strakoňová
- **Provozovna:** Valchařská 24/36, Brno
- **Web:** `pradelnajarni.cz`

Na homepage a ve footeru prioritně směrovat na obchodní poptávku. Provozní kontakt uvést na `/kontakt` a případně v rozšířeném footeru.

## 11. SEO a obsahové zásady

### Primární témata

- profesionální prádelna Brno;
- praní pro hotely, penziony a apartmány;
- praní pro restaurace a gastro;
- praní provozního textilu;
- svoz a rozvoz prádla Brno;
- úklid apartmánů + praní;
- náhradní plnění u prádelenských služeb.

### Obsah

- Psát konkrétně: co se stane, kdo co udělá a co zákazník dostane zpět.
- Preferovat „vyzvedneme, vypereme, připravíme, přivezeme“ před abstraktními formulacemi.
- Každá důležitá claim věta má mít oporu v reálné službě nebo procesu.
- Nepřehánět opakování slova „provoz“; je to důležitý motiv, ale ne každá druhá věta.
- Ceník, smluvní podmínky a náhradní plnění držet fakticky přesné.
- Přidat lokální kontext Brna přirozeně, ne keyword stuffingem.
- Přístupnost: správná hierarchie nadpisů, textové alternativy fotografií, dostatečný kontrast, ovládání bez hoveru.

### Title/meta pracovní směr

`Profesionální prádelna Brno | Prádelna Jarní`

Popis má spojit profesionální praní, svoz/rozvoz a cílové segmenty. Finální SEO text ověřit proti aktuální nabídce a lokálnímu cílení.

## 12. Fotografie a důvěryhodnost

### Reálné fotografie nutné pro

- provoz a stroje Jarní;
- tým a majitele;
- dodávku a svoz;
- předání zákazníkovi;
- reference a zákaznické prostředí;
- cokoli, co explicitně tvrdí „takto fungujeme“.

### Placeholder/stock může být použit pro

- obecný detail textilu;
- atmosférický hospitality detail;
- dočasný hero asset během vývoje;
- abstraktní texturu nebo kompozici, která nic konkrétního nedokazuje.

AI/stock nesmí předstírat zaměstnance, provoz, vůz ani reference Jarní.

Fotografický směr: modern documentary 35mm — přirozené světlo, jemný grain, teplejší grading, měkčí kontrast, přirozené momenty, ruce/textil/stroje/logistika, žádné pózování u pračky.

## 13. Pravidla pro Codex

1. Nejprve použij existující pattern, token nebo komponentu. Nový pattern vytvoř jen při jasné obsahové potřebě.
2. Proof má přednost před claimem. Když proof chybí, nevymýšlej ho.
3. Nepřidávej generické SaaS dashboardy, ikonkové benefity, gradienty ani „eco laundry“ klišé.
4. Nepřeváděj každou část obsahu do rounded card. Layout může být typografický, listový, timeline nebo editorial split.
5. Jedna stránka nemá mít několik stejně silných CTA. Navbar konvertuje, hero naviguje, pozdější CTA uzavírá.
6. Zachovej hierarchii: lokální B2B partner, ne anonymní korporace.
7. Nepoužívej falešné fotky Jarní jako reálné.
8. Při nejistotě vlož `TODO: ověřit u klienta` nebo se drž konzervativní formulace.
9. Každý nový obsahový blok musí odpovědět na konkrétní otázku zákazníka.
10. Při implementaci kontroluj desktop, tablet, mobil, reduced motion, klávesnici a čitelnost.


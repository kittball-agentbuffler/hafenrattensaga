# Hafenrattensaga Website — Kontext für Claude

## Projekt
- **Domain:** hafenratten.de
- **Stack:** Reines HTML/CSS/JS, eine Datei: `index.html`
- **Hosting:** Cloudflare Pages — auto-deploy bei `git push origin main`
- **Repo:** https://github.com/kittball-agentbuffler/hafenrattensaga.git
- **Lokaler Pfad:** `/Users/agentbuffler/HAFENRATTEN WEBSITE/`
- **Domain-Registrar:** INWX (nur DNS, nie anfassen)

## Deploy-Workflow
```bash
git add <files> && git commit -m "..." && git push
```
Live in ~1 Minute. Kein SSH, kein Server, kein INWX-Login.

## KRITISCHE REGEL
**NIEMALS lange Bindestriche (—) in Texten verwenden.** Immer Kurzstrich (-) oder Punkt.

## Fonts & Design-Tokens
- `--ink: #0d0a08` | `--parchment: #f0e8d8` | `--parchment2: #e6d9c2`
- `--gold: #c8a44a` | `--gold-dark: #8a6a1f` | `--rust: #7a2e1a` | `--muted: #5a4a38`
- Fonts: **Cinzel** (Überschriften/Nav), **IM Fell English** (Hero-Body), **Crimson Text** (Karten/Body)

## Sektionen (Reihenfolge)
1. **Hero** — Banner + Geschwister-Einleitung (Yara & Tavi)
2. **Unsere Helden** (`#figuren`) — 8 Charakterkarten, gold-dark Rollen
3. **Verborgene Absichten** (`#verborgene`) — 4 Karten, grauer Titel + graue Rollen
4. **Gegner und Fieslinge** (`#antagonisten`) — 4 Karten, roter Titel + rote Tags
5. **Die Welt** (`#welt`) — Locations + Karten
6. **Buch** (`#buch`) — Klappentext + Release-Badge
7. **Späher** (`#newsletter`) — "Kommt bald" Placeholder
8. **Footer** — Social Links

## Charaktere

### Unsere Helden (Reihenfolge: m/f abwechselnd)
| Name | Rolle | Bild |
|------|-------|------|
| Tavi | Ein Funkenkind | tavi.jpg |
| Yara | Hafenratte und Schwester | yara.jpg |
| Grymm | Ausbilder der Hafenratten | grymm.jpg |
| Grooba | Meisterin der Mondküche | grooba.png |
| Cian Al Taki | Küchenjunge aus Asharu | cian.jpg |
| Prinzessin Nimara | Prinzessin von Velmaris | nimara.png |
| Vynn | Dunkelelf Meisterdieb | vynn.jpg |
| Kip | Ein Gobbo aus den Rostklippen | kip-gobbo.jpg |

### Verborgene Absichten (grau, zwischen Fronten)
| Name | Rolle | Bild |
|------|-------|------|
| Panjim Faro | Schmugglerkapitan | panjim.jpg |
| Tsu | Die Beste der Ratten | tsu.jpg |
| Brom | Gildenboss | brom.png |
| Maren | Novizin der Barmherzigen Schwestern | maren.jpg |

### Gegner und Fieslinge (rot)
| Name | Rolle | Bild |
|------|-------|------|
| Sorath Arrys | Erzinquisitor des Ordens der Reinen Flamme | sorath.jpg |
| Grafin van Zabor | Herrin des Hafenviertels | zabor.jpg |
| Lysara Varanth | Kriegsfurstin von Dornburg | lysara.jpg |
| Kale | Der Bully der Hafenratten | kale.jpg |

## Nav
- Links: Figuren, Welt, Buch, Späher
- Rechts: Instagram/TikTok/YouTube SVG-Icons (18px)
- Social URLs: `instagram.com/hafenrattensaga`, `tiktok.com/@hafenrattensaga`, `youtube.com/@hafenrattensaga`

## Lightbox
Alle Bilder klickbar via `openLightbox(this.src)` — bereits implementiert.

## Impressum
Email: julie@andoloki.de

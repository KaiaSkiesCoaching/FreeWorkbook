# Kaia — Design System

> **Design name: “Kaia.”** Refer to this visual language as the **Kaia** design/style.

A reusable style reference distilled from the **website** (`index.html`, `legal/terms/privacy.html`) and the **workbook PDFs** (`workbook/fearless-flyer-*.html` → Chrome-headless print). Apply this to keep future projects on-brand.

> **Essence:** _Calm luxury at altitude._ Deep midnight-navy night sky + warm shimmering gold, set in an elegant serif/sans pairing. Cinematic and reassuring, never loud. Generous space, soft glows, slow drifting motion. Premium but gentle — it should feel like a calm cabin at night, not a tech startup.

---

## 1. Color Tokens

Shared palette across web (dark UI) and print (dark *and* light pages). Use CSS custom properties.

```css
:root{
  /* Navy — backgrounds & depth (dark → light) */
  --navy-950:#030B18;  --navy-900:#07152B;  --navy-800:#0D2247;
  --navy-700:#133060;  --navy-600:#1A3F7A;

  /* Gold — the single accent (deep → bright) */
  --gold-700:#8A6E22;  --gold-600:#A8882C;  --gold-500:#C9A84C;
  --gold-400:#E8C97A;  --gold-300:#EFD9A0;

  /* Neutrals — light/“paper” surfaces & body ink (print) */
  --cream:#F5F0E8;   --paper:#F7F3EA;   --paper-2:#FBF8F1;   --white:#FFFFFF;
  --ink:#1A2A42;     --ink-soft:#46566E; --ink-faint:#8A93A3;
  --line:#D8CEBC;

  /* Functional (print tables / yes-no) — use sparingly */
  --green:#2E7D4F;   --red:#B1452F;

  /* Muted text on dark backgrounds */
  --text-muted:rgba(245,240,232,.55);
}
```

**Rules**
- **One accent only: gold.** No secondary brand hue. Variety comes from navy depth + gold brightness, not new colors.
- On **dark** surfaces: text is `--cream` / `--text-muted`; accents are bright gold (`--gold-400/500`).
- On **light/paper** surfaces (print): text is `--ink` / `--ink-soft` / `--ink-faint`; accents are deep gold (`--gold-600/700`).
- Gold is precious — use for accents, hairlines, eyebrows, numbers, icons, one primary CTA. Never large flat gold fills (except small CTA pills/badges).
- Green/red only for table yes/no and status — never decorative.

---

## 2. Typography

Two families, loaded from Google Fonts.

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
--font-display:'Cormorant Garamond', Georgia, serif;  /* headlines, numbers, brand */
--font-body:'Inter', system-ui, sans-serif;            /* body, UI, labels */
```

**Principles**
- **Display = Cormorant Garamond, light weight (300–400).** Large headings are airy and elegant; `line-height` ~1.08–1.12, slight negative tracking on big sizes.
- Emphasis words inside headings use `<em>` italic in gold (`em.gold` / `.hero-title em`).
- **Body = Inter**, 300–400 weight, `line-height` 1.6–1.7.
- **Eyebrows / kickers / labels:** Inter, uppercase, `font-size` ~.7–.8rem (web) / 7.5–8pt (print), `letter-spacing` .16–.28em, gold. Often flanked by a thin gradient rule.

**Web scale (fluid)**
| Role | Style |
|---|---|
| Hero title | `clamp(3rem, 8vw, 6.5rem)`, display 300 |
| Section title | `clamp(2.25rem, 5vw, 3.75rem)`, display 300 |
| Section lead | `clamp(.94rem, 2vw, 1.06rem)`, muted |
| Stat number | `3.5rem`, display 300, gold |
| Eyebrow/label | `.69–.75rem`, uppercase, tracked, gold |

**Print scale (A4, pt)**
| Role | Style |
|---|---|
| Section head `.h-section` | 27pt display 300, navy-900 (white on dark) |
| Part roman numeral | 90pt display, transparent w/ 1px gold stroke |
| Part title | 34pt display 300 |
| Lead | 10.5pt, ink-soft |
| Body `p` | 10pt | Small 8.5pt · Tiny 7.5pt |
| Stat number | 30pt display 300, gold |

---

## 3. Spacing, Radius, Shadows

```css
/* Radius (web) */
--radius-sm:6px; --radius-md:12px; --radius-lg:20px; --radius-xl:32px;
/* Print uses 8–14px on cards/notes; pill = 50px everywhere */

/* Shadows / glows (web) */
--shadow-gold:0 0 40px rgba(201,168,76,.25);
--shadow-card:0 8px 40px rgba(3,11,24,.5);

/* Motion (web) */
--ease-out-expo:cubic-bezier(0.16,1,0.3,1);
--ease-in-out:cubic-bezier(0.4,0,0.2,1);
--duration-fast:200ms; --duration-mid:350ms; --duration-slow:600ms;
```

- **Generous whitespace.** Web sections: `padding:6rem 1.5rem`, `max-width:1100px` centered. Print pages: dark `22mm 19mm`, light `18mm 17mm 15mm`.
- Rounded but restrained — `12px` is the default card radius; pills (`50px`) for CTAs/badges.
- Depth via soft navy shadows + faint gold glow, never hard drop shadows.

---

## 4. Signature Components

### Eyebrow (section label)
Uppercase tracked gold text with thin gradient rules on each side.
```css
.eyebrow{display:flex;align-items:center;gap:.6rem;font-size:8pt;font-weight:600;
  letter-spacing:.26em;text-transform:uppercase;color:var(--gold-600);}
.eyebrow::before,.eyebrow::after{content:"";height:1px;width:28px;
  background:linear-gradient(90deg,transparent,var(--gold-500));}
```

### Primary CTA (gold pill)
```css
.btn-primary{display:inline-flex;align-items:center;gap:.625rem;
  background:linear-gradient(135deg,var(--gold-600),var(--gold-400),var(--gold-500));
  background-size:200% 200%;color:var(--navy-950);font-weight:600;
  padding:.875rem 2.25rem;border-radius:50px;min-height:56px;
  box-shadow:0 4px 24px rgba(201,168,76,.3),0 1px 0 rgba(255,255,255,.15) inset;
  transition:transform .2s,box-shadow .2s,background-position .35s;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 36px rgba(201,168,76,.45);
  background-position:right center;}
```
Secondary action = quiet text link at `opacity:.7` → 1 on hover. Nav CTA = outlined gold pill (transparent fill).

### Badge / pill
```css
.badge{display:inline-flex;align-items:center;gap:.4rem;font-size:.75rem;font-weight:700;
  letter-spacing:.12em;text-transform:uppercase;color:var(--gold-400);
  border:1px solid rgba(201,168,76,.4);background:rgba(201,168,76,.1);
  padding:.3rem .875rem;border-radius:50px;}
```
Variants: `100% Free` (outline gold), `Coming Soon` (solid gold gradient fill, navy text), neutral meta badge (faint cream border, no caps).

### Card (dark UI)
```css
.fact-card{background:rgba(13,34,71,.45);border:1px solid rgba(201,168,76,.12);
  border-radius:20px;padding:2rem 1.75rem;transition:transform .35s var(--ease-out-expo),
  border-color .35s,box-shadow .35s;}
.fact-card:hover{transform:translateY(-4px);border-color:rgba(201,168,76,.25);
  box-shadow:var(--shadow-card),0 0 0 1px rgba(201,168,76,.06);}
/* top hairline glow appears on hover */
.fact-card::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(201,168,76,.3),transparent);opacity:0;}
.fact-card:hover::before{opacity:1;}
```
Print card (light): `background:#fff;border:1px solid var(--line);border-radius:9px`; tinted variant = warm paper gradient.

### Note / callout
Left gold border, faint gold wash:
```css
.note{border-left:3px solid var(--gold-500);background:rgba(201,168,76,.08);
  padding:3.5mm 4.5mm;border-radius:0 8px 8px 0;color:var(--ink-soft);}
```

### Numbered step
Circular gold-outlined number (display serif) + title + muted body. Web: 56px circle; print: 8.5mm. On the web a thin connecting line runs behind the row of steps.

### Stat / number block
Big display-serif gold number + bold title + small muted body. Web cards animate a **count-up** on scroll into view.

### Hairline rule / divider
```css
.divider{height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.2),transparent);}
```
Used between every major section. Gold fades in from both ends — never a solid line.

### Tables (print)
Uppercase tracked header on faint gold wash, gold bottom-border, `nth-child(even)` rows tinted `rgba(168,136,44,.04)`, yes=green / no=red.

---

## 5. Layout Patterns

**Web**
- Fixed transparent nav → gains blurred navy bg + bottom hairline on scroll (`nav.scrolled`).
- Full-viewport hero (`min-height:100dvh`), centered content, `max-width:780px`.
- Alternating section tints over a shared fixed background: `rgba(3,11,24,.55)` / `rgba(7,21,43,.6)` with light `backdrop-filter:blur()`.
- Two-column “showcase” block (`1fr 1fr`, `gap:4rem`) → stacks & centers under 768px.
- Footer: brand + legal links + centered fine-print copyright with top hairline.

**Print (A4)**
```css
@page{size:A4;margin:0;}
.page{position:relative;width:210mm;height:297mm;overflow:hidden;page-break-after:always;}
```
- **Alternate `.page.dark` and `.page.light`** for rhythm. Dark = radial navy glows + gold vignette gradient; light = warm paper.
- **Inset frame** on every page: `::before/::after{inset:7–8mm;border:1px solid rgba(gold,.2–.28)}`.
- **Running footer** `.pfoot`: brand (display serif) left, “The Fearless Flyer · {auto page #}” right, via CSS counters (`counter-reset:pg` / `counter-increment`).
- Cover: dark, centered star mark + huge display title + gold eyebrow “A Workbook by …”.
- Part dividers: giant outlined roman numeral over dark page.
- `-webkit-print-color-adjust:exact` is required so Chrome keeps the dark backgrounds.

**Render pipeline (PDF):** Chrome headless →
`chrome --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=12000 --print-to-pdf="OUT.pdf" "IN.html"`.
Render to a temp file then rename (Acrobat may lock the target). Verify no page overflow (`scrollHeight-clientHeight>3`).

---

## 6. Motion & Atmosphere (web)

Slow, subtle, premium. All gated behind `prefers-reduced-motion`.

- **Drifting orbs:** large blurred radial gradients (navy + faint gold) animating on 22–36s loops — the “cloud” atmosphere.
- **Star canvas:** sparse twinkling gold dots (`rgba(232,201,122,a)`) gently drifting; count scales with viewport width.
- **Cursor glow:** soft gold radial that lerps toward the pointer (non-touch only), fades after 2.5s idle.
- **Gold shimmer:** headline `<em>` runs a slow moving gradient sheen across the gold text.
- **Reveal on scroll:** elements fade up 36px via `IntersectionObserver` + `.visible`, with `reveal-delay-1..4` stagger.
- **Line reveal:** headings split into lines that clip-slide up (`translateY(105%)→0`) sequentially.
- **Count-up:** stat numbers ease from 0 to target when scrolled into view.
- **Float:** book mockups bob gently (`book-float`, ~6s).

**Easing:** `cubic-bezier(0.16,1,0.3,1)` (expo-out) for entrances; durations 200/350/600ms. Hover = lift `translateY(-2px..-4px)` + slightly stronger gold glow.

---

## 7. Iconography & Marks

- **Star mark** is the recurring brand glyph (5-point, gold stroke + faint gold fill) — covers, book spines, section accents.
- Inline SVG line icons, ~1.5–2px stroke, gold, often at low opacity (`.15`) as a decorative corner mark on cards.
- Functional diagrams (panic-wave curve, four-forces-of-flight, fear loop, exposure ladder) are hand-built inline SVG in navy/gold — same palette, no external icon libraries, no photography.

---

## 8. Voice & Do / Don’t

**Voice:** warm, calm, second-person (“you”), reassuring and evidence-based. English primary; German secondary (“The Fearless Flyer” stays English). No hype, no fake social proof/testimonials.

**Do**
- Lean on space, hairlines, and one gold accent.
- Pair light-serif display headings with Inter body.
- Keep motion slow and optional.
- Alternate navy depths for rhythm; reserve gold for meaning.

**Don’t**
- Introduce a second accent color or large flat gold fills.
- Use heavy/bold serif headings, drop shadows, or hard borders.
- Crowd the layout or animate aggressively.
- Add stock photos or invented testimonials.

---

## 9. Quick-start snippet (new web page)

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root{ /* paste §1 tokens + §3 radius/motion */ }
  body{font-family:var(--font-body);background:var(--navy-950);color:var(--cream);line-height:1.6;}
  h1,h2{font-family:var(--font-display);font-weight:300;}
  h1 em{font-style:italic;color:var(--gold-400);}
  .eyebrow{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-500);}
  .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.2),transparent);}
  /* CTA + card + badge from §4 */
</style>
```

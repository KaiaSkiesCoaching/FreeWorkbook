/* ─────────────────────────────────────────────────────────────────────────
   lang.js — Kaia Skies  |  EN (primary) · DE (secondary)
   "The Fearless Flyer" stays in English in both languages.
   ───────────────────────────────────────────────────────────────────────── */

const TRANSLATIONS = {

  en: {
    nav: {
      cta:  'Free Workbook',
      back: '← Back to Home'
    },
    cookie: {
      text:    'We use cookies to understand how visitors experience our site via Google Analytics. No personal data is sold. See our <a href="privacy.html">Privacy Policy</a> for details.',
      decline: 'Decline',
      accept:  'Accept Cookies'
    },
    hero: {
      eyebrow: 'Fear of Flying Coaching',
      title:   'Your journey to the<br><em>fearless skies</em><br>starts here',
      sub:     'You deserve to travel without anxiety holding you back. Discover a gentle, evidence-based approach that transforms fear into freedom — one flight at a time.',
      cta:     'Get The Free Workbook',
      how:     'How it works ↓',
      scroll:  'Scroll'
    },
    facts: {
      label:    'You Are Not Alone',
      titleL1:  'Fear of flying is',
      titleL2:  '<em>more common</em> than you think',
      lead:     'Millions of people quietly endure anxiety before and during flights. Understanding the science behind your fear is the first step toward releasing it.',
      c1title:  'of all adults experience flight anxiety',
      c1body:   'An estimated 1 in 4 people feel significant fear when flying — making it one of the most widespread phobias worldwide.',
      c2title:  'safer than driving your car',
      c2body:   'Flying is statistically one of the safest forms of transport ever invented — yet our brains are wired to feel the opposite.',
      c3title:  'improvement rate with the right approach',
      c3body:   'Cognitive-behavioural and exposure-based techniques have strong evidence behind them — most people see profound relief within weeks.',
      c4title:  'destinations waiting for you',
      c4body:   "Every place you've ever dreamed of visiting is still reachable. Your fear is not permanent — it's a pattern, and patterns can change."
    },
    how: {
      label:   'The Method',
      titleL1: 'Three steps to',
      titleL2: '<em>taking flight</em>',
      lead:    'The Fearless Flyer workbook guides you through a proven sequence — gentle, personal, and entirely at your own pace.',
      s1title: 'Understand Your Fear',
      s1body:  'Explore the root of your anxiety with guided reflection. Your fear has a story — and once you hear it, it begins to lose its power.',
      s2title: 'Rewire Your Response',
      s2body:  'Use science-backed techniques to gently shift how your mind and body respond to flight triggers — before, during, and after.',
      s3title: 'Take Your Flight',
      s3body:  'Board with new tools, a calmer nervous system, and the quiet confidence that you have everything you need to fly freely.'
    },
    wb: {
      badge:    '100% Free',
      bookSub:  'A Workbook by Kaia Skies',
      titleL1:  'Your <em>free workbook</em>',
      titleL2:  'is waiting',
      lead:     '"The Fearless Flyer" is a beautifully crafted, printable workbook designed to walk you from anxiety to ease — no prior experience required.',
      b1:       'Guided exercises to identify and understand your triggers',
      b2:       'Calming techniques you can use in the moment on board',
      b3:       'Mindset shifts that reframe the flying experience',
      b4:       'A personal flight plan to build lasting confidence',
      cta:      'Download Free'
    },
    footer: {
      copy:    '© 2025 Kaia Skies. All rights reserved.',
      ai:      'This website uses AI-assisted tools to enhance the coaching experience.',
      terms:   'Terms & Conditions',
      legal:   'Legal Notice',
      privacy: 'Privacy Policy',
      home:    'Home'
    },
    /* Legal pages */
    terms: {
      pageTitle: 'Terms & Conditions — Kaia Skies',
      h1:        'Terms & Conditions',
      updated:   'Last updated: June 2025',
      back:      '← Back to Home'
    },
    legal: {
      pageTitle: 'Legal Notice — Kaia Skies',
      h1:        'Legal Notice',
      updated:   'Imprint / Impressum — Last updated: June 2025',
      back:      '← Back to Home'
    },
    privacy: {
      pageTitle: 'Privacy Policy — Kaia Skies',
      h1:        'Privacy Policy',
      updated:   'Last updated: June 2025 — GDPR compliant',
      back:      '← Back to Home'
    }
  },

  /* ── GERMAN ─────────────────────────────────────────────────────────── */
  de: {
    nav: {
      cta:  'Gratis Workbook',
      back: '← Zurück'
    },
    cookie: {
      text:    'Wir nutzen Google Analytics, um zu verstehen, wie Besucher unsere Website erleben. Deine Daten werden nicht weitergegeben. Mehr dazu in unserer <a href="privacy.html">Datenschutzerklärung</a>.',
      decline: 'Ablehnen',
      accept:  'Cookies akzeptieren'
    },
    hero: {
      eyebrow: 'Flugangst Coaching',
      title:   'Deine Reise zu<br><em>stressfreiem Fliegen</em><br>beginnt hier',
      sub:     'Du verdienst es, zu reisen – ohne dass Angst dich zurückhält. Entdecke einen einfühlsamen, wissenschaftlich fundierten Ansatz, der Flugangst Schritt für Schritt in echte Freiheit verwandelt.',
      cta:     'Workbook gratis sichern',
      how:     'Wie es funktioniert ↓',
      scroll:  'Scrollen'
    },
    facts: {
      label:    'Du bist nicht allein',
      titleL1:  'Flugangst ist',
      titleL2:  '<em>verbreiteter</em> als du glaubst',
      lead:     'Millionen Menschen kennen dieses stille Unbehagen – vor dem Abflug, beim Start, irgendwo über den Wolken. Den Ursprung deiner Angst zu verstehen, ist der erste Schritt, sie hinter dir zu lassen.',
      c1title:  'aller Erwachsenen kennen Flugangst',
      c1body:   'Etwa jeder Vierte erlebt beim Fliegen echte Angst – sie gehört damit zu den häufigsten Phobien überhaupt.',
      c2title:  'mal sicherer als Autofahren',
      c2body:   'Fliegen ist statistisch eines der sichersten Fortbewegungsmittel der Welt. Unser Gehirn weiß das – und glaubt es trotzdem nicht immer.',
      c3title:  'Besserungsrate mit der richtigen Methode',
      c3body:   'Kognitive und expositionsbasierte Techniken zeigen beeindruckende Ergebnisse – die meisten Menschen erleben spürbare Erleichterung schon nach wenigen Wochen.',
      c4title:  'Orte, die noch auf dich warten',
      c4body:   'Jedes Reiseziel, von dem du je geträumt hast, ist noch erreichbar. Flugangst ist kein Urteil – sie ist ein Muster. Und Muster lassen sich verändern.'
    },
    how: {
      label:   'Die Methode',
      titleL1: 'Drei Schritte –',
      titleL2: '<em>ein neues Gefühl</em>',
      lead:    'Das Workbook „The Fearless Flyer" begleitet dich durch eine bewährte Abfolge – sanft, persönlich und ganz in deinem eigenen Tempo.',
      s1title: 'Versteh deine Angst',
      s1body:  'Mit gezielten Reflexionsfragen spurest du auf, wo deine Angst wirklich herkommt. Wenn du ihre Geschichte kennst, verliert sie ihren Griff.',
      s2title: 'Kontrolliere deine Gefühle',
      s2body:  'Wissenschaftlich erprobte Techniken helfen dir, die Reaktion von Kopf und Körper auf Flugsituationen sanft neu auszurichten – vor, während und nach dem Flug.',
      s3title: 'Flieg los',
      s3body:  'Steig ein mit neuen Werkzeugen, einem ruhigeren Nervensystem und dem stillen Vertrauen: Du hast alles, was du brauchst.'
    },
    wb: {
      badge:    '100 % kostenlos',
      bookSub:  'Ein Workbook von Kaia Skies',
      titleL1:  'Dein <em>kostenloses Workbook</em>',
      titleL2:  'wartet auf dich',
      lead:     '„The Fearless Flyer" ist ein sorgfältig gestaltetes, druckbares Workbook, das dich behutsam von der Angst zur Leichtigkeit führt – ganz ohne Vorkenntnisse.',
      b1:       'Geführte Übungen, um deine persönlichen Auslöser zu erkennen',
      b2:       'Beruhigungstechniken, die du direkt an Bord einsetzen kannst',
      b3:       'Perspektivwechsel, die das Fliegen in einem neuen Licht erscheinen lassen',
      b4:       'Dein persönlicher Flugplan für dauerhaftes Vertrauen',
      cta:      'Jetzt gratis sichern'
    },
    footer: {
      copy:    '© 2025 Kaia Skies. Alle Rechte vorbehalten.',
      ai:      'Diese Website nutzt KI-gestützte Werkzeuge zur Unterstützung des Coaching-Erlebnisses.',
      terms:   'AGB',
      legal:   'Impressum',
      privacy: 'Datenschutz',
      home:    'Startseite'
    },
    /* Legal pages */
    terms: {
      pageTitle: 'AGB — Kaia Skies',
      h1:        'Allgemeine Geschäftsbedingungen',
      updated:   'Zuletzt aktualisiert: Juni 2025',
      back:      '← Zurück'
    },
    legal: {
      pageTitle: 'Impressum — Kaia Skies',
      h1:        'Impressum',
      updated:   'Stand: Juni 2025',
      back:      '← Zurück'
    },
    privacy: {
      pageTitle: 'Datenschutz — Kaia Skies',
      h1:        'Datenschutzerklärung',
      updated:   'Zuletzt aktualisiert: Juni 2025 — DSGVO-konform',
      back:      '← Zurück'
    }
  }
};

/* ─────────────────────────────────────────────────────────────────────────
   CORE ENGINE
   ───────────────────────────────────────────────────────────────────────── */

function get(obj, path) {
  return path.split('.').reduce((o, k) => o && o[k], obj);
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;
  localStorage.setItem('kaia_lang', lang);

  // Update switcher buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });

  // Plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = get(t, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  // HTML (inline tags, line-reveal spans)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = get(t, el.dataset.i18nHtml);
    if (val === undefined) return;
    const alreadyVisible = el.classList.contains('visible');
    el.innerHTML = val;
    // Re-apply visible state so animations don't replay after language switch
    if (alreadyVisible) {
      el.querySelectorAll('.line-inner').forEach(li => {
        li.style.transform = 'translateY(0)';
        li.style.opacity   = '1';
      });
    }
  });

  // Aria labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = get(t, el.dataset.i18nAria);
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  // document.title (legal pages)
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const val = get(t, el.dataset.i18nTitle);
    if (val !== undefined) document.title = val;
  });

  // CSS-toggled blocks (legal page long-form content)
  // html[lang="en"] .lang-de { display:none } handled in CSS
}

function detectLang() {
  const stored = localStorage.getItem('kaia_lang');
  if (stored && TRANSLATIONS[stored]) return stored;
  const browser = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
  return TRANSLATIONS[browser] ? browser : 'en';
}

/* ─────────────────────────────────────────────────────────────────────────
   INIT — runs on every page
   ───────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyLang(lang);

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.langBtn));
  });
});

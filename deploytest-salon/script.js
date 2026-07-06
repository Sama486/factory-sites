/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- translations ---------- */
  const I18N = {"de":{"nav.about":"Über uns","nav.principles":"Werte","nav.training":"Leistungen","nav.contact":"Kontakt","nav.cta":"Kontakt","idx.process":"Ablauf","hero.eyebrow":"friseur — Offenbach","hero.title":"Schön, dass du<br><span class=\"ital\">hier bist.</span>","hero.lead":"Willkommen bei Deploytest Salon. friseur aus Offenbach. Dieser Text ist ein Platzhalter — hier kommt deine echte Beschreibung hin.","hero.cta":"Jetzt anfragen","hero.instagram":"Instagram ansehen","statement.label":"Philosophie","statement.text":"Wir machen <span class=\"ital\">friseur</span> mit Anspruch — ehrlich, sorgfältig und auf dich zugeschnitten.","about.h2":"Das ist<br><span class=\"ital\">Deploytest Salon.</span>","about.p1":"Willkommen bei Deploytest Salon. friseur aus Offenbach. Dieser Text ist ein Platzhalter — hier kommt deine echte Beschreibung hin.","about.p2":"Platzhalter-Absatz: Hier beschreibst du, was dich besonders macht, für wen du arbeitest und warum Kund:innen dir vertrauen.","tag.strength":"Qualität","tag.fatloss":"Erfahrung","tag.nutrition":"Persönlich","tag.mindset":"Zuverlässig","about.langs":"Auf Deutsch · English · Español","stat.years":"Jahre Erfahrung","stat.clients":"Zufriedene Kunden","stat.languages":"Sprachen","principles.title":"Wofür wir stehen","p1.h3":"Qualität","p1.p":"Platzhalter-Text für dein erstes Prinzip.","p2.h3":"Erfahrung","p2.p":"Platzhalter-Text für dein zweites Prinzip.","p3.h3":"Persönlich","p3.p":"Platzhalter-Text für dein drittes Prinzip.","p4.h3":"Zuverlässig","p4.p":"Platzhalter-Text für dein viertes Prinzip.","offers.title":"Unsere Leistungen","o1.tag":"Leistung","o1.h3":"Leistungen 1","o1.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o1.li1":"Merkmal 1","o1.li2":"Merkmal 2","o1.li3":"Merkmal 3","o1.unit":"/ Leistung","o2.tag":"Beliebtes Paket","o2.h3":"Leistungen 2","o2.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o2.li1":"Merkmal 1","o2.li2":"Merkmal 2","o2.li3":"Merkmal 3","o2.li4":"Merkmal 4","o2.unit":"/ Monat","o3.tag":"Zusatzleistung","o3.h3":"Leistungen 3","o3.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o3.li1":"Merkmal 1","o3.li2":"Merkmal 2","o3.li3":"Merkmal 3","o3.unit":"/ Paket","offer.from":"ab","offer.cta":"Anfragen","offers.note":"Platzhalter-Preise — die echten Konditionen legen wir gemeinsam fest.","ps1.h3":"Kontakt","ps1.p":"Wir lernen dich und dein Ziel kennen. Unverbindlich.","ps2.h3":"Angebot","ps2.p":"Du bekommst einen klaren, passenden Vorschlag.","ps3.h3":"Umsetzung","ps3.p":"Wir setzen um — sauber und zuverlässig.","ps4.h3":"Ergebnis","ps4.p":"Du bist zufrieden — und wir bleiben ansprechbar.","cta.title":"Bereit?<br><span class=\"ital\">Lass uns reden.</span>","cta.lead":"Schreib uns — wir melden uns schnell und unverbindlich.","cta.whatsapp":"Per WhatsApp schreiben","cta.email":"E-Mail senden","cta.hint":"Kontaktdaten sind Platzhalter — hier kommen die echten Daten rein.","footer.role":"friseur","footer.claim":"Deploytest Salon","footer.imprint":"Impressum","footer.privacy":"Datenschutz","tst.label":"Stimmen","tst.title":"Was Kund:innen sagen","tst1.q":"Absolut empfehlenswert — schnell, freundlich und ein top Ergebnis.","tst1.a":"— Zufriedene Kundin (Platzhalter)","tst2.q":"Man fühlt sich sofort gut aufgehoben. Gerne wieder!","tst2.a":"— Stammkunde (Platzhalter)","tst3.q":"Professionell von A bis Z. Klare Empfehlung.","tst3.a":"— Neukundin (Platzhalter)","gal.label":"Galerie","gal.title":"Einblicke","hrs.label":"Zeiten","hrs.title":"Öffnungszeiten","hrs.note":"An Feiertagen können die Zeiten abweichen.","faq.label":"FAQ","faq.title":"Häufige Fragen","faq1.q":"Wie kann ich einen Termin vereinbaren?","faq1.a":"Ganz einfach per Nachricht oder Anruf — wir melden uns schnell zurück.","faq2.q":"Was kostet das Ganze?","faq2.a":"Das hängt vom Umfang ab — die genauen Preise besprechen wir persönlich.","faq3.q":"Seid ihr auch kurzfristig verfügbar?","faq3.a":"Oft ja — frag einfach an, wir finden einen Weg."},"en":{"nav.about":"About","nav.principles":"Values","nav.training":"Services","nav.contact":"Contact","nav.cta":"Contact","idx.process":"Process","hero.eyebrow":"friseur — Offenbach","hero.title":"Great to have<br><span class=\"ital\">you here.</span>","hero.lead":"Welcome to Deploytest Salon. friseur in Offenbach. This text is a placeholder — your real description goes here.","hero.cta":"Get in touch","hero.instagram":"View Instagram","statement.label":"Philosophy","statement.text":"We do <span class=\"ital\">friseur</span> with standards — honest, careful and tailored to you.","about.h2":"This is<br><span class=\"ital\">Deploytest Salon.</span>","about.p1":"Welcome to Deploytest Salon. friseur in Offenbach. This text is a placeholder — your real description goes here.","about.p2":"Placeholder paragraph: describe what makes you special, who you work for, and why clients trust you.","tag.strength":"Quality","tag.fatloss":"Experience","tag.nutrition":"Personal","tag.mindset":"Reliable","about.langs":"In German · English · Spanish","stat.years":"Years of experience","stat.clients":"Happy clients","stat.languages":"Languages","principles.title":"What we stand for","p1.h3":"Quality","p1.p":"Platzhalter-Text für dein erstes Prinzip.","p2.h3":"Experience","p2.p":"Platzhalter-Text für dein zweites Prinzip.","p3.h3":"Personal","p3.p":"Platzhalter-Text für dein drittes Prinzip.","p4.h3":"Reliable","p4.p":"Platzhalter-Text für dein viertes Prinzip.","offers.title":"Our services","o1.tag":"Service","o1.h3":"Services 1","o1.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o1.li1":"Merkmal 1","o1.li2":"Merkmal 2","o1.li3":"Merkmal 3","o1.unit":"/ service","o2.tag":"Popular package","o2.h3":"Services 2","o2.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o2.li1":"Merkmal 1","o2.li2":"Merkmal 2","o2.li3":"Merkmal 3","o2.li4":"Merkmal 4","o2.unit":"/ month","o3.tag":"Add-on","o3.h3":"Services 3","o3.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o3.li1":"Merkmal 1","o3.li2":"Merkmal 2","o3.li3":"Merkmal 3","o3.unit":"/ package","offer.from":"from","offer.cta":"Enquire","offers.note":"Placeholder prices — real terms are agreed together.","ps1.h3":"Contact","ps1.p":"We get to know you and your goal. No obligation.","ps2.h3":"Proposal","ps2.p":"You get a clear, tailored proposal.","ps3.h3":"Delivery","ps3.p":"We deliver — cleanly and reliably.","ps4.h3":"Result","ps4.p":"You're happy — and we stay reachable.","cta.title":"Ready?<br><span class=\"ital\">Let's talk.</span>","cta.lead":"Message us — we reply fast, no obligation.","cta.whatsapp":"Message on WhatsApp","cta.email":"Send an email","cta.hint":"Contact details are placeholders — the real ones go here.","footer.role":"friseur","footer.claim":"Deploytest Salon","footer.imprint":"Imprint","footer.privacy":"Privacy","tst.label":"Voices","tst.title":"What clients say","tst1.q":"Highly recommended — fast, friendly and a top result.","tst1.a":"— Happy client (placeholder)","tst2.q":"You feel in good hands right away. Would come back!","tst2.a":"— Regular (placeholder)","tst3.q":"Professional from start to finish. Clear recommendation.","tst3.a":"— New client (placeholder)","gal.label":"Gallery","gal.title":"A look inside","hrs.label":"Hours","hrs.title":"Opening hours","hrs.note":"Hours may differ on public holidays.","faq.label":"FAQ","faq.title":"Frequently asked","faq1.q":"How do I book an appointment?","faq1.a":"Simply by message or call — we get back to you quickly.","faq2.q":"How much does it cost?","faq2.a":"It depends on the scope — we discuss exact prices in person.","faq3.q":"Are you available on short notice?","faq3.a":"Often yes — just ask and we'll find a way."},"es":{"nav.about":"Nosotros","nav.principles":"Valores","nav.training":"Servicios","nav.contact":"Contacto","nav.cta":"Contacto","idx.process":"Proceso","hero.eyebrow":"friseur — Offenbach","hero.title":"Qué bueno<br><span class=\"ital\">tenerte aquí.</span>","hero.lead":"Bienvenido a Deploytest Salon. friseur en Offenbach. Este texto es un ejemplo — aquí irá tu descripción real.","hero.cta":"Contáctanos","hero.instagram":"Ver Instagram","statement.label":"Filosofía","statement.text":"Hacemos <span class=\"ital\">friseur</span> con exigencia — con honestidad y a tu medida.","about.h2":"Esto es<br><span class=\"ital\">Deploytest Salon.</span>","about.p1":"Bienvenido a Deploytest Salon. friseur en Offenbach. Este texto es un ejemplo — aquí irá tu descripción real.","about.p2":"Párrafo de ejemplo: describe qué te hace especial, para quién trabajas y por qué confían en ti.","tag.strength":"Calidad","tag.fatloss":"Experiencia","tag.nutrition":"Personal","tag.mindset":"Fiable","about.langs":"En alemán · inglés · español","stat.years":"Años de experiencia","stat.clients":"Clientes satisfechos","stat.languages":"Idiomas","principles.title":"Lo que defendemos","p1.h3":"Calidad","p1.p":"Platzhalter-Text für dein erstes Prinzip.","p2.h3":"Experiencia","p2.p":"Platzhalter-Text für dein zweites Prinzip.","p3.h3":"Personal","p3.p":"Platzhalter-Text für dein drittes Prinzip.","p4.h3":"Fiable","p4.p":"Platzhalter-Text für dein viertes Prinzip.","offers.title":"Nuestros servicios","o1.tag":"Servicio","o1.h3":"Servicios 1","o1.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o1.li1":"Merkmal 1","o1.li2":"Merkmal 2","o1.li3":"Merkmal 3","o1.unit":"/ servicio","o2.tag":"Paquete popular","o2.h3":"Servicios 2","o2.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o2.li1":"Merkmal 1","o2.li2":"Merkmal 2","o2.li3":"Merkmal 3","o2.li4":"Merkmal 4","o2.unit":"/ mes","o3.tag":"Complemento","o3.h3":"Servicios 3","o3.desc":"Kurze Platzhalter-Beschreibung dieser Leistung.","o3.li1":"Merkmal 1","o3.li2":"Merkmal 2","o3.li3":"Merkmal 3","o3.unit":"/ paquete","offer.from":"desde","offer.cta":"Consultar","offers.note":"Precios de ejemplo — las condiciones reales las definimos juntos.","ps1.h3":"Contacto","ps1.p":"Te conocemos a ti y tu objetivo. Sin compromiso.","ps2.h3":"Propuesta","ps2.p":"Recibes una propuesta clara y a medida.","ps3.h3":"Ejecución","ps3.p":"Ejecutamos — con limpieza y fiabilidad.","ps4.h3":"Resultado","ps4.p":"Quedas satisfecho — y seguimos disponibles.","cta.title":"¿Listo?<br><span class=\"ital\">Hablemos.</span>","cta.lead":"Escríbenos — respondemos rápido y sin compromiso.","cta.whatsapp":"Escribir por WhatsApp","cta.email":"Enviar un email","cta.hint":"Los datos de contacto son de ejemplo — aquí irán los reales.","footer.role":"friseur","footer.claim":"Deploytest Salon","footer.imprint":"Aviso legal","footer.privacy":"Privacidad","tst.label":"Opiniones","tst.title":"Lo que dicen los clientes","tst1.q":"Muy recomendable — rápido, amable y con gran resultado.","tst1.a":"— Cliente satisfecha (ejemplo)","tst2.q":"Te sientes en buenas manos enseguida. ¡Volveré!","tst2.a":"— Cliente habitual (ejemplo)","tst3.q":"Profesional de principio a fin. Recomendado.","tst3.a":"— Cliente nueva (ejemplo)","gal.label":"Galería","gal.title":"Un vistazo","hrs.label":"Horario","hrs.title":"Horario de apertura","hrs.note":"El horario puede variar en festivos.","faq.label":"FAQ","faq.title":"Preguntas frecuentes","faq1.q":"¿Cómo reservo una cita?","faq1.a":"Muy fácil por mensaje o llamada — respondemos rápido.","faq2.q":"¿Cuánto cuesta?","faq2.a":"Depende del alcance — los precios exactos los vemos en persona.","faq3.q":"¿Estáis disponibles a corto plazo?","faq3.a":"A menudo sí — pregunta y encontramos la manera."}};

  const STORE = "camilo-lang";
  function applyLang(lang) {
    if (!I18N[lang]) lang = "de";
    const t = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t[el.dataset.i18n]; if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = t[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
    );
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }
  let start = "de";
  try { start = localStorage.getItem(STORE) || "de"; } catch (e) {}
  applyLang(start);
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  /* ---------- mobile menu ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
    if (menu) menu.setAttribute("aria-hidden", String(!open));
  }
  if (toggle && menu) {
    toggle.addEventListener("click", () =>
      setMenu(!document.body.classList.contains("menu-open"))
    );
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    window.addEventListener("resize", () => { if (window.innerWidth > 900) setMenu(false); });
  }

  /* ---------- year ---------- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- subtle nav state on scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => { if (nav) nav.classList.toggle("scrolled", window.scrollY > 24); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- gentle reveal on view ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- animated counters ---------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      if (reduce) { el.textContent = target; countIO.unobserve(el); return; }
      const dur = 1600, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));
})();

/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* JS is running → arm the reveal animation. If this line never runs (JS blocked
     or errored before it), <html> keeps `no-js` and all content stays visible. */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* ---------- translations ---------- */
  const I18N = {"de":{"nav.about":"Über uns","nav.principles":"Werte","nav.training":"Leistungen","nav.contact":"Kontakt","nav.cta":"Kontakt","idx.process":"Ablauf","hero.eyebrow":"KI-Website-Fabrik für lokale Betriebe","hero.title":"Deine neue Website.<br><span class=\"ital\">In Minuten.</span>","hero.lead":"Helpsy baut kleinen Betrieben eine fertige, mehrsprachige Website — automatisch per KI. Du gibst frei, wir stellen sie live. Ohne Technik-Stress, ohne wochenlange Agentur-Wartezeit.","hero.cta":"Kostenlosen Entwurf holen","hero.instagram":"Instagram ansehen","statement.label":"Philosophie","statement.text":"Websites für kleine Betriebe — <span class=\"ital\">automatisch gebaut, in Minuten live.</span>","about.h2":"Das ist<br><span class=\"ital\">Helpsy.</span>","about.p1":"Helpsy ist die KI-Website-Fabrik für lokale Unternehmen. Wir recherchieren deinen Betrieb, texten, gestalten und bauen daraus eine fertige, mehrsprachige Website — in Minuten statt Wochen.","about.p2":"Kein Baukasten, keine leere Vorlage: Du bekommst einen fertigen Entwurf, der schon nach dir aussieht. Gefällt er dir, gehen wir live und richten deine Wunsch-Domain ein. So einfach ist das.","tag.strength":"In Minuten live","tag.fatloss":"Mehrsprachig","tag.nutrition":"Mobil perfekt","tag.mindset":"Fair & transparent","about.langs":"Auf Deutsch · English · Español","stat.years":"bis zum fertigen Entwurf","stat.clients":"Sprachen inklusive","stat.languages":"mobil optimiert","principles.title":"Warum Helpsy","p1.h3":"Fertig statt Baukasten","p1.p":"Du klickst nichts selbst zusammen — du bekommst eine fertige Website, die schon steht.","p2.h3":"In Minuten, nicht Monaten","p2.p":"Kein wochenlanges Hin und Her. Dein Entwurf ist in Minuten fertig und sofort ansehbar.","p3.h3":"Mehrsprachig & mobil","p3.p":"Deutsch, Englisch, Spanisch — und auf jedem Handy gestochen scharf. Automatisch.","p4.h3":"Fair & unverbindlich","p4.p":"Der erste Entwurf ist kostenlos. Du zahlst erst, wenn du wirklich live gehen willst.","offers.title":"Pakete","services.title":"Unsere Leistungen","o1.tag":"Einstieg","o1.h3":"Starter","o1.desc":"Deine Website als fertiger Entwurf — live gestellt.","o1.li1":"Fertige Website (One-Pager)","o1.li2":"Mehrsprachig DE/EN/ES","o1.li3":"Mobil optimiert","o1.unit":"/ Monat","o2.tag":"Beliebt","o2.h3":"Pro","o2.desc":"Website plus eigene Domain und laufende Pflege.","o2.li1":"Alles aus Starter","o2.li2":"Eigene Wunsch-Domain","o2.li3":"Änderungen inklusive","o2.li4":"Für Google optimiert","o2.unit":"/ Monat","o3.tag":"Rundum","o3.h3":"Business","o3.desc":"Website, Domain und automatischer Kunden-Kontakt.","o3.li1":"Alles aus Pro","o3.li2":"Kontaktformular & Leads","o3.li3":"Persönlicher Support","o3.unit":"/ Monat","offer.from":"ab","offer.cta":"Anfragen","offers.note":"Alle Preise monatlich, jederzeit kündbar. Der erste Entwurf ist immer kostenlos.","ps1.h3":"Wir finden dich","ps1.p":"Wir entdecken deinen Betrieb — oder du meldest dich einfach kurz.","ps2.h3":"Wir bauen den Entwurf","ps2.p":"Die KI recherchiert, textet und gestaltet deine fertige Website.","ps3.h3":"Du gibst frei","ps3.p":"Gefällt dir der Entwurf? Ein kurzes Wort genügt.","ps4.h3":"Live & deine Domain","ps4.p":"Wir stellen die Seite live und richten deine Wunsch-Domain ein.","cta.title":"Bereit für<br><span class=\"ital\">deine Website?</span>","cta.lead":"Schreib uns kurz — dein kostenloser Entwurf ist in Minuten fertig.","cta.whatsapp":"Per WhatsApp schreiben","cta.email":"E-Mail senden","cta.hint":"Kontaktdaten sind Platzhalter — hier kommen die echten Daten rein.","footer.role":"KI-Website-Fabrik","footer.claim":"Helpsy","footer.imprint":"Impressum","footer.privacy":"Datenschutz","tst.label":"Stimmen","tst.title":"Was Kund:innen sagen","tst1.q":"Absolut empfehlenswert — schnell, freundlich und ein top Ergebnis.","tst1.a":"— Zufriedene Kundin (Platzhalter)","tst2.q":"Man fühlt sich sofort gut aufgehoben. Gerne wieder!","tst2.a":"— Stammkunde (Platzhalter)","tst3.q":"Professionell von A bis Z. Klare Empfehlung.","tst3.a":"— Neukundin (Platzhalter)","gal.label":"Galerie","gal.title":"Einblicke","hrs.label":"Zeiten","hrs.title":"Öffnungszeiten","hrs.note":"An Feiertagen können die Zeiten abweichen.","faq.label":"FAQ","faq.title":"Häufige Fragen","faq1.q":"Was kostet der Entwurf?","faq1.a":"Der erste Entwurf ist komplett kostenlos und unverbindlich. Du zahlst erst, wenn du live gehen willst.","faq2.q":"Wie lange dauert es?","faq2.a":"Der fertige Entwurf steht in wenigen Minuten. Live-Stellung und Domain dauern meist unter 24 Stunden.","faq3.q":"Kann ich Texte und Bilder ändern?","faq3.a":"Klar — du bekommst den Entwurf, sagst uns, was anders soll, und wir passen es an. Änderungen sind ab dem Pro-Paket inklusive."},"en":{"nav.about":"About","nav.principles":"Values","nav.training":"Services","nav.contact":"Contact","nav.cta":"Contact","idx.process":"Process","hero.eyebrow":"AI website factory for local businesses","hero.title":"Your new website.<br><span class=\"ital\">In minutes.</span>","hero.lead":"Helpsy builds small businesses a finished, multilingual website — automatically, with AI. You approve, we take it live. No tech stress, no weeks of agency waiting.","hero.cta":"Get a free draft","hero.instagram":"View Instagram","statement.label":"Philosophy","statement.text":"Websites for small businesses — <span class=\"ital\">built automatically, live in minutes.</span>","about.h2":"This is<br><span class=\"ital\">Helpsy.</span>","about.p1":"Helpsy is the AI website factory for local businesses. We research your business, write, design and build a finished, multilingual website — in minutes instead of weeks.","about.p2":"No page builder, no empty template: you get a finished draft that already looks like you. If you like it, we go live and set up your domain. It's that simple.","tag.strength":"Live in minutes","tag.fatloss":"Multilingual","tag.nutrition":"Perfect on mobile","tag.mindset":"Fair & transparent","about.langs":"In German · English · Spanish","stat.years":"to a finished draft","stat.clients":"languages included","stat.languages":"mobile optimised","principles.title":"Why Helpsy","p1.h3":"Finished, not DIY","p1.p":"You don't piece anything together — you get a finished website that already stands.","p2.h3":"Minutes, not months","p2.p":"No weeks of back and forth. Your draft is ready in minutes and instantly viewable.","p3.h3":"Multilingual & mobile","p3.p":"German, English, Spanish — razor-sharp on every phone. Automatically.","p4.h3":"Fair & no obligation","p4.p":"The first draft is free. You only pay when you really want to go live.","offers.title":"Plans","services.title":"Our services","o1.tag":"Entry","o1.h3":"Starter","o1.desc":"Your website as a finished draft — taken live.","o1.li1":"Finished website (one-pager)","o1.li2":"Multilingual DE/EN/ES","o1.li3":"Mobile optimised","o1.unit":"/ month","o2.tag":"Popular","o2.h3":"Pro","o2.desc":"Website plus your own domain and ongoing care.","o2.li1":"Everything in Starter","o2.li2":"Your own domain","o2.li3":"Changes included","o2.li4":"Optimised for Google","o2.unit":"/ month","o3.tag":"All-round","o3.h3":"Business","o3.desc":"Website, domain and automatic customer contact.","o3.li1":"Everything in Pro","o3.li2":"Contact form & leads","o3.li3":"Personal support","o3.unit":"/ month","offer.from":"from","offer.cta":"Enquire","offers.note":"All prices monthly, cancel anytime. The first draft is always free.","ps1.h3":"We find you","ps1.p":"We discover your business — or you just reach out.","ps2.h3":"We build the draft","ps2.p":"The AI researches, writes and designs your finished website.","ps3.h3":"You approve","ps3.p":"Like the draft? A short reply is all it takes.","ps4.h3":"Live & your domain","ps4.p":"We take the site live and set up your domain.","cta.title":"Ready for<br><span class=\"ital\">your website?</span>","cta.lead":"Drop us a line — your free draft is ready in minutes.","cta.whatsapp":"Message on WhatsApp","cta.email":"Send an email","cta.hint":"Contact details are placeholders — the real ones go here.","footer.role":"KI-Website-Fabrik","footer.claim":"Helpsy","footer.imprint":"Imprint","footer.privacy":"Privacy","tst.label":"Voices","tst.title":"What clients say","tst1.q":"Highly recommended — fast, friendly and a top result.","tst1.a":"— Happy client (placeholder)","tst2.q":"You feel in good hands right away. Would come back!","tst2.a":"— Regular (placeholder)","tst3.q":"Professional from start to finish. Clear recommendation.","tst3.a":"— New client (placeholder)","gal.label":"Gallery","gal.title":"A look inside","hrs.label":"Hours","hrs.title":"Opening hours","hrs.note":"Hours may differ on public holidays.","faq.label":"FAQ","faq.title":"Frequently asked","faq1.q":"What does the draft cost?","faq1.a":"The first draft is completely free and without obligation. You only pay when you want to go live.","faq2.q":"How long does it take?","faq2.a":"The finished draft is ready in minutes. Going live and the domain usually take under 24 hours.","faq3.q":"Can I change text and images?","faq3.a":"Of course — you get the draft, tell us what to change, and we adjust it. Changes are included from the Pro plan."},"es":{"nav.about":"Nosotros","nav.principles":"Valores","nav.training":"Servicios","nav.contact":"Contacto","nav.cta":"Contacto","idx.process":"Proceso","hero.eyebrow":"Fábrica de webs con IA para negocios locales","hero.title":"Tu nueva web.<br><span class=\"ital\">En minutos.</span>","hero.lead":"Helpsy crea para pequeños negocios una web terminada y multilingüe — automáticamente, con IA. Tú apruebas, nosotros la publicamos. Sin líos técnicos ni semanas de espera.","hero.cta":"Pedir borrador gratis","hero.instagram":"Ver Instagram","statement.label":"Filosofía","statement.text":"Webs para pequeños negocios — <span class=\"ital\">creadas automáticamente, online en minutos.</span>","about.h2":"Esto es<br><span class=\"ital\">Helpsy.</span>","about.p1":"Helpsy es la fábrica de webs con IA para negocios locales. Investigamos tu negocio, redactamos, diseñamos y construimos una web terminada y multilingüe — en minutos en vez de semanas.","about.p2":"Sin creadores ni plantillas vacías: recibes un borrador terminado que ya se parece a ti. Si te gusta, lo publicamos y configuramos tu dominio. Así de fácil.","tag.strength":"Online en minutos","tag.fatloss":"Multilingüe","tag.nutrition":"Perfecto en móvil","tag.mindset":"Justo y transparente","about.langs":"En alemán · inglés · español","stat.years":"hasta el borrador final","stat.clients":"idiomas incluidos","stat.languages":"optimizada para móvil","principles.title":"Por qué Helpsy","p1.h3":"Terminada, no hazlo tú","p1.p":"No montas nada tú — recibes una web terminada que ya está lista.","p2.h3":"Minutos, no meses","p2.p":"Sin semanas de idas y venidas. Tu borrador está listo en minutos y se ve al instante.","p3.h3":"Multilingüe y móvil","p3.p":"Alemán, inglés, español — nítida en cada móvil. Automáticamente.","p4.h3":"Justo y sin compromiso","p4.p":"El primer borrador es gratis. Solo pagas cuando quieres publicar de verdad.","offers.title":"Planes","services.title":"Nuestros servicios","o1.tag":"Inicio","o1.h3":"Starter","o1.desc":"Tu web como borrador terminado — publicada.","o1.li1":"Web terminada (one-page)","o1.li2":"Multilingüe DE/EN/ES","o1.li3":"Optimizada para móvil","o1.unit":"/ mes","o2.tag":"Popular","o2.h3":"Pro","o2.desc":"Web más tu propio dominio y mantenimiento continuo.","o2.li1":"Todo lo de Starter","o2.li2":"Tu propio dominio","o2.li3":"Cambios incluidos","o2.li4":"Optimizada para Google","o2.unit":"/ mes","o3.tag":"Integral","o3.h3":"Business","o3.desc":"Web, dominio y contacto automático con clientes.","o3.li1":"Todo lo de Pro","o3.li2":"Formulario y leads","o3.li3":"Soporte personal","o3.unit":"/ mes","offer.from":"desde","offer.cta":"Consultar","offers.note":"Todos los precios mensuales, cancelable cuando quieras. El primer borrador siempre es gratis.","ps1.h3":"Te encontramos","ps1.p":"Descubrimos tu negocio — o simplemente nos escribes.","ps2.h3":"Creamos el borrador","ps2.p":"La IA investiga, redacta y diseña tu web terminada.","ps3.h3":"Tú apruebas","ps3.p":"¿Te gusta el borrador? Basta con una respuesta corta.","ps4.h3":"Online y tu dominio","ps4.p":"Publicamos la web y configuramos tu dominio.","cta.title":"¿Listo para<br><span class=\"ital\">tu web?</span>","cta.lead":"Escríbenos — tu borrador gratis está listo en minutos.","cta.whatsapp":"Escribir por WhatsApp","cta.email":"Enviar un email","cta.hint":"Los datos de contacto son de ejemplo — aquí irán los reales.","footer.role":"KI-Website-Fabrik","footer.claim":"Helpsy","footer.imprint":"Aviso legal","footer.privacy":"Privacidad","tst.label":"Opiniones","tst.title":"Lo que dicen los clientes","tst1.q":"Muy recomendable — rápido, amable y con gran resultado.","tst1.a":"— Cliente satisfecha (ejemplo)","tst2.q":"Te sientes en buenas manos enseguida. ¡Volveré!","tst2.a":"— Cliente habitual (ejemplo)","tst3.q":"Profesional de principio a fin. Recomendado.","tst3.a":"— Cliente nueva (ejemplo)","gal.label":"Galería","gal.title":"Un vistazo","hrs.label":"Horario","hrs.title":"Horario de apertura","hrs.note":"El horario puede variar en festivos.","faq.label":"FAQ","faq.title":"Preguntas frecuentes","faq1.q":"¿Cuánto cuesta el borrador?","faq1.a":"El primer borrador es totalmente gratis y sin compromiso. Solo pagas cuando quieres publicar.","faq2.q":"¿Cuánto tarda?","faq2.a":"El borrador terminado está listo en minutos. Publicar y el dominio suelen tardar menos de 24 horas.","faq3.q":"¿Puedo cambiar textos e imágenes?","faq3.a":"Claro — recibes el borrador, nos dices qué cambiar y lo ajustamos. Los cambios se incluyen desde el plan Pro."}};

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

  /* ---------- gentle reveal on view (never leaves content hidden) ---------- */
  const revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  const showAll = () => revealEls.forEach((el) => el.classList.add("in"));
  if (reduce || !("IntersectionObserver" in window)) {
    // no motion wanted, or no IO support → just show everything immediately
    showAll();
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((el) => io.observe(el));
    // fail-safe: whatever hasn't revealed within 2.5s (odd viewports, non-scrolling
    // iframes/print/screenshots) gets shown so nothing is ever stuck invisible.
    setTimeout(showAll, 2500);
    // also reveal on load in case layout settled after observation
    window.addEventListener("load", () => setTimeout(showAll, 400), { once: true });
  }

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

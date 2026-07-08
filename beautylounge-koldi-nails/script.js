/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* JS is running → arm the reveal animation. If this line never runs (JS blocked
     or errored before it), <html> keeps `no-js` and all content stays visible. */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* ---------- translations ---------- */
  const I18N = {"de":{"nav.about":"Über uns","nav.principles":"Werte","nav.training":"Leistungen","nav.contact":"Kontakt","nav.cta":"Kontakt","idx.process":"Ablauf","hero.eyebrow":"Nagelstudio in Bremen","hero.title":"Gepflegte Hände,<br><span class=\"ital\">die man sich merkt.</span>","hero.lead":"Ob klassische Maniküre, langlebiges Gel oder aufwendiges Nageldesign — bei uns bekommst du saubere Arbeit, entspannte Atmosphäre und Nägel, die auch nach Wochen noch sitzen.","hero.cta":"Termin buchen","hero.instagram":"Instagram ansehen","statement.label":"Philosophie","statement.text":"Wir machen <span class=\"ital\">Nagelstudio</span> mit Anspruch — ehrlich, sorgfältig und auf dich zugeschnitten.","about.h2":"Willkommen bei <span class=\"ital\">Beautylounge Koldi Nails.</span>","about.p1":"Bei uns dreht sich alles um Nägel, die zu dir passen. Wir nehmen uns Zeit, arbeiten sauber und beraten dich ehrlich — auch wenn das mal heißt, dass weniger mehr ist. Vom natürlichen French bis zum kompletten Set mit Steinchen und Airbrush ist alles drin.","about.p2":"Hygiene ist bei uns kein Nebenthema: Werkzeuge werden desinfiziert und sterilisiert, Feilen und Aufsätze konsequent gewechselt. So kannst du dich zurücklehnen und die Zeit für dich genießen, während wir uns um den Rest kümmern.","tag.strength":"Präzision","tag.fatloss":"Haltbarkeit","tag.nutrition":"Hygiene","tag.mindset":"Design","about.langs":"Auf Deutsch · English · Español","stat.years":"Jahre Erfahrung","stat.clients":"Behandlungen im Monat","stat.languages":"Farben & Designs","principles.title":"Wofür wir stehen","p1.h3":"Qualität","p1.p":"Wir arbeiten mit Anspruch und liefern Ergebnisse, auf die du dich verlassen kannst.","p2.h3":"Erfahrung","p2.p":"Langjährige Erfahrung und echtes Handwerk — bei uns bist du in guten Händen.","p3.h3":"Persönlich","p3.p":"Kein Fließband: Wir nehmen uns Zeit und gehen auf deine Wünsche ein.","p4.h3":"Zuverlässig","p4.p":"Termintreu, ehrlich und gut erreichbar — auf uns kannst du zählen.","offers.title":"Behandlungen & Preise","services.title":"Unser Angebot","o1.tag":"Leistung","o1.h3":"Basis","o1.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o1.li1":"Persönliche Beratung","o1.li2":"Faire, transparente Preise","o1.li3":"Schnelle, saubere Umsetzung","o1.unit":"/ Leistung","o2.tag":"Beliebtes Paket","o2.h3":"Beliebt","o2.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o2.li1":"Persönliche Beratung","o2.li2":"Faire, transparente Preise","o2.li3":"Schnelle, saubere Umsetzung","o2.li4":"Zufriedenheitsgarantie","o2.unit":"/ Monat","o3.tag":"Zusatzleistung","o3.h3":"Premium","o3.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o3.li1":"Persönliche Beratung","o3.li2":"Faire, transparente Preise","o3.li3":"Schnelle, saubere Umsetzung","o3.unit":"/ Paket","offer.from":"ab","offer.cta":"Anfragen","offers.note":"Alle Preise sind Beispiele und können je nach Länge, Aufwand und Design variieren. Den genauen Preis besprechen wir gern vor der Behandlung.","ps1.h3":"Kontakt","ps1.p":"Wir lernen dich und dein Ziel kennen. Unverbindlich.","ps2.h3":"Angebot","ps2.p":"Du bekommst einen klaren, passenden Vorschlag.","ps3.h3":"Umsetzung","ps3.p":"Wir setzen um — sauber und zuverlässig.","ps4.h3":"Ergebnis","ps4.p":"Du bist zufrieden — und wir bleiben ansprechbar.","cta.title":"Bereit für neue <span class=\"ital\">Nägel?</span>","cta.lead":"Sichere dir deinen Wunschtermin — telefonisch oder online. Wir freuen uns auf dich.","cta.whatsapp":"Per WhatsApp schreiben","cta.email":"E-Mail senden","cta.hint":"Kontaktdaten sind Platzhalter — hier kommen die echten Daten rein.","footer.role":"Nagelstudio","footer.claim":"Beautylounge Koldi Nails","footer.imprint":"Impressum","footer.privacy":"Datenschutz","tst.label":"Stimmen","tst.title":"Was Kund:innen sagen","tst1.q":"Absolut empfehlenswert — schnell, freundlich und ein top Ergebnis.","tst1.a":"— Zufriedene Kundin (Platzhalter)","tst2.q":"Man fühlt sich sofort gut aufgehoben. Gerne wieder!","tst2.a":"— Stammkunde (Platzhalter)","tst3.q":"Professionell von A bis Z. Klare Empfehlung.","tst3.a":"— Neukundin (Platzhalter)","gal.label":"Galerie","gal.title":"Einblicke","hrs.label":"Zeiten","hrs.title":"Öffnungszeiten","hrs.note":"An Feiertagen können die Zeiten abweichen.","faq.label":"FAQ","faq.title":"Häufige Fragen","faq1.q":"Wie lange hält ein Gel-Set?","faq1.a":"In der Regel drei bis vier Wochen. Wann ein Auffüllen sinnvoll ist, hängt vom Nagelwachstum ab — wir empfehlen dir einen passenden Rhythmus direkt im Studio.","faq2.q":"Brauche ich einen Termin oder kann ich spontan vorbeikommen?","faq2.a":"Am besten mit Termin, dann ist deine Zeit fest für dich reserviert und du musst nicht warten. Ruf einfach unter (0421) 50098288 an oder buche online.","faq3.q":"Sind meine Naturnägel nach Gel oder Acryl geschädigt?","faq3.a":"Bei sauberer Arbeit und fachgerechtem Ablösen nicht. Wir feilen schonend, entfernen Modellagen nie mit Gewalt und pflegen deine Naturnägel bei jedem Termin mit."},"en":{"nav.about":"About","nav.principles":"Values","nav.training":"Services","nav.contact":"Contact","nav.cta":"Contact","idx.process":"Process","hero.eyebrow":"Nail salon in Bremen","hero.title":"Well-kept hands<br><span class=\"ital\">people remember.</span>","hero.lead":"Whether it is a classic manicure, long-lasting gel or intricate nail art — you get clean work, a relaxed atmosphere and nails that still look great weeks later.","hero.cta":"Book appointment","hero.instagram":"View Instagram","statement.label":"Philosophy","statement.text":"We do <span class=\"ital\">Nagelstudio</span> with standards — honest, careful and tailored to you.","about.h2":"Welcome to <span class=\"ital\">Beautylounge Koldi Nails.</span>","about.p1":"It is all about nails that suit you. We take our time, work cleanly and give honest advice — even when that means keeping things simple. From a natural French to a full set with rhinestones and airbrush, anything is possible.","about.p2":"Hygiene is never an afterthought here: tools are disinfected and sterilised, files and bits are changed consistently. So you can lean back and enjoy your time while we take care of the rest.","tag.strength":"Quality","tag.fatloss":"Experience","tag.nutrition":"Personal","tag.mindset":"Reliable","about.langs":"In German · English · Spanish","stat.years":"Years of experience","stat.clients":"Happy clients","stat.languages":"Languages","principles.title":"What we stand for","p1.h3":"Quality","p1.p":"We work to a high standard and deliver results you can rely on.","p2.h3":"Experience","p2.p":"Years of experience and real craft — you're in good hands with us.","p3.h3":"Personal","p3.p":"No conveyor belt: we take our time and listen to your wishes.","p4.h3":"Reliable","p4.p":"Punctual, honest and easy to reach — you can count on us.","offers.title":"Treatments & prices","services.title":"What we offer","o1.tag":"Service","o1.h3":"Basic","o1.desc":"A well-thought-out offer, tailored to your needs.","o1.li1":"Personal consultation","o1.li2":"Fair, transparent pricing","o1.li3":"Fast, clean delivery","o1.unit":"/ service","o2.tag":"Popular package","o2.h3":"Popular","o2.desc":"A well-thought-out offer, tailored to your needs.","o2.li1":"Personal consultation","o2.li2":"Fair, transparent pricing","o2.li3":"Fast, clean delivery","o2.li4":"Satisfaction guarantee","o2.unit":"/ month","o3.tag":"Add-on","o3.h3":"Premium","o3.desc":"A well-thought-out offer, tailored to your needs.","o3.li1":"Personal consultation","o3.li2":"Fair, transparent pricing","o3.li3":"Fast, clean delivery","o3.unit":"/ package","offer.from":"from","offer.cta":"Enquire","offers.note":"Placeholder prices — real terms are agreed together.","ps1.h3":"Contact","ps1.p":"We get to know you and your goal. No obligation.","ps2.h3":"Proposal","ps2.p":"You get a clear, tailored proposal.","ps3.h3":"Delivery","ps3.p":"We deliver — cleanly and reliably.","ps4.h3":"Result","ps4.p":"You're happy — and we stay reachable.","cta.title":"Ready for new <span class=\"ital\">nails?</span>","cta.lead":"Secure your preferred slot — by phone or online. We look forward to seeing you.","cta.whatsapp":"Message on WhatsApp","cta.email":"Send an email","cta.hint":"Contact details are placeholders — the real ones go here.","footer.role":"Nagelstudio","footer.claim":"Beautylounge Koldi Nails","footer.imprint":"Imprint","footer.privacy":"Privacy","tst.label":"Voices","tst.title":"What clients say","tst1.q":"Highly recommended — fast, friendly and a top result.","tst1.a":"— Happy client (placeholder)","tst2.q":"You feel in good hands right away. Would come back!","tst2.a":"— Regular (placeholder)","tst3.q":"Professional from start to finish. Clear recommendation.","tst3.a":"— New client (placeholder)","gal.label":"Gallery","gal.title":"A look inside","hrs.label":"Hours","hrs.title":"Opening hours","hrs.note":"Hours may differ on public holidays.","faq.label":"FAQ","faq.title":"Frequently asked","faq1.q":"How long does a gel set last?","faq1.a":"Usually three to four weeks. When a refill makes sense depends on your nail growth — we will suggest a suitable rhythm right at the studio.","faq2.q":"How much does it cost?","faq2.a":"It depends on the scope — we discuss exact prices in person.","faq3.q":"Are you available on short notice?","faq3.a":"Often yes — just ask and we'll find a way."},"es":{"nav.about":"Nosotros","nav.principles":"Valores","nav.training":"Servicios","nav.contact":"Contacto","nav.cta":"Contacto","idx.process":"Proceso","hero.eyebrow":"Salon de unas en Bremen","hero.title":"Manos cuidadas<br><span class=\"ital\">que se recuerdan.</span>","hero.lead":"Ya sea una manicura clasica, gel duradero o un diseno elaborado, recibes un trabajo limpio, un ambiente relajado y unas unas que siguen perfectas semanas despues.","hero.cta":"Reservar cita","hero.instagram":"Ver Instagram","statement.label":"Filosofía","statement.text":"Hacemos <span class=\"ital\">Nagelstudio</span> con exigencia — con honestidad y a tu medida.","about.h2":"Bienvenida a <span class=\"ital\">Beautylounge Koldi Nails.</span>","about.p1":"Todo gira en torno a unas que van contigo. Nos tomamos nuestro tiempo, trabajamos con limpieza y te asesoramos con honestidad, aunque eso signifique que menos es mas. Desde un French natural hasta un set completo con piedras y airbrush, todo es posible.","about.p2":"La higiene nunca es un tema secundario: las herramientas se desinfectan y esterilizan, las limas y puntas se cambian de forma constante. Asi puedes relajarte y disfrutar de tu tiempo mientras nosotros nos ocupamos del resto.","tag.strength":"Calidad","tag.fatloss":"Experiencia","tag.nutrition":"Personal","tag.mindset":"Fiable","about.langs":"En alemán · inglés · español","stat.years":"Años de experiencia","stat.clients":"Clientes satisfechos","stat.languages":"Idiomas","principles.title":"Lo que defendemos","p1.h3":"Calidad","p1.p":"Trabajamos con exigencia y entregamos resultados en los que puedes confiar.","p2.h3":"Experiencia","p2.p":"Años de experiencia y oficio de verdad — estás en buenas manos.","p3.h3":"Personal","p3.p":"Nada de prisas: nos tomamos el tiempo y escuchamos lo que quieres.","p4.h3":"Fiable","p4.p":"Puntuales, honestos y siempre disponibles — puedes contar con nosotros.","offers.title":"Tratamientos y precios","services.title":"Nuestra oferta","o1.tag":"Servicio","o1.h3":"Básico","o1.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o1.li1":"Asesoría personal","o1.li2":"Precios justos y claros","o1.li3":"Ejecución rápida y limpia","o1.unit":"/ servicio","o2.tag":"Paquete popular","o2.h3":"Popular","o2.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o2.li1":"Asesoría personal","o2.li2":"Precios justos y claros","o2.li3":"Ejecución rápida y limpia","o2.li4":"Garantía de satisfacción","o2.unit":"/ mes","o3.tag":"Complemento","o3.h3":"Premium","o3.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o3.li1":"Asesoría personal","o3.li2":"Precios justos y claros","o3.li3":"Ejecución rápida y limpia","o3.unit":"/ paquete","offer.from":"desde","offer.cta":"Consultar","offers.note":"Precios de ejemplo — las condiciones reales las definimos juntos.","ps1.h3":"Contacto","ps1.p":"Te conocemos a ti y tu objetivo. Sin compromiso.","ps2.h3":"Propuesta","ps2.p":"Recibes una propuesta clara y a medida.","ps3.h3":"Ejecución","ps3.p":"Ejecutamos — con limpieza y fiabilidad.","ps4.h3":"Resultado","ps4.p":"Quedas satisfecho — y seguimos disponibles.","cta.title":"Lista para unas <span class=\"ital\">nuevas?</span>","cta.lead":"Reserva tu horario preferido, por telefono o en linea. Te esperamos con gusto.","cta.whatsapp":"Escribir por WhatsApp","cta.email":"Enviar un email","cta.hint":"Los datos de contacto son de ejemplo — aquí irán los reales.","footer.role":"Nagelstudio","footer.claim":"Beautylounge Koldi Nails","footer.imprint":"Aviso legal","footer.privacy":"Privacidad","tst.label":"Opiniones","tst.title":"Lo que dicen los clientes","tst1.q":"Muy recomendable — rápido, amable y con gran resultado.","tst1.a":"— Cliente satisfecha (ejemplo)","tst2.q":"Te sientes en buenas manos enseguida. ¡Volveré!","tst2.a":"— Cliente habitual (ejemplo)","tst3.q":"Profesional de principio a fin. Recomendado.","tst3.a":"— Cliente nueva (ejemplo)","gal.label":"Galería","gal.title":"Un vistazo","hrs.label":"Horario","hrs.title":"Horario de apertura","hrs.note":"El horario puede variar en festivos.","faq.label":"FAQ","faq.title":"Preguntas frecuentes","faq1.q":"Cuanto dura un set de gel?","faq1.a":"Por lo general de tres a cuatro semanas. Cuando conviene un relleno depende del crecimiento de tus unas; te recomendaremos un ritmo adecuado en el salon.","faq2.q":"¿Cuánto cuesta?","faq2.a":"Depende del alcance — los precios exactos los vemos en persona.","faq3.q":"¿Estáis disponibles a corto plazo?","faq3.a":"A menudo sí — pregunta y encontramos la manera."}};

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

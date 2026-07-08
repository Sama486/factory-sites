/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* JS is running → arm the reveal animation. If this line never runs (JS blocked
     or errored before it), <html> keeps `no-js` and all content stays visible. */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* ---------- translations ---------- */
  const I18N = {"de":{"nav.about":"Über uns","nav.principles":"Werte","nav.training":"Leistungen","nav.contact":"Kontakt","nav.cta":"Kontakt","idx.process":"Ablauf","hero.eyebrow":"Kfz-Werkstatt in Bremen","hero.title":"Ihr Auto in <span class=\"ital\">guten Händen</span><br>vom Ölwechsel bis zur HU","hero.lead":"Freie Werkstatt für alle Marken in Bremen. Faire Preise, ehrliche Diagnose und Termine, die auch mal kurzfristig klappen. Wir sagen Ihnen vorher, was gemacht werden muss und was warten kann.","hero.cta":"Anrufen","hero.instagram":"Instagram ansehen","statement.label":"Philosophie","statement.text":"Wir machen <span class=\"ital\">Kfz-Werkstatt</span> mit Anspruch — ehrlich, sorgfältig und auf dich zugeschnitten.","about.h2":"Schrauben ist Vertrauenssache bei <span class=\"ital\">ASR DelmeMobil Autoservice.</span>","about.p1":"Wir sind eine freie Kfz-Werkstatt in Bremen und kümmern uns um alle gängigen Marken, ob Kleinwagen, Kombi oder Transporter. Vom klassischen Service über die Hauptuntersuchung bis zur kniffligen Fehlersuche an der Elektronik erledigen wir das meiste unter einem Dach.","about.p2":"Bei uns bekommen Sie vor jeder Reparatur einen klaren Kostenvoranschlag, kein Kleingedrucktes und keine Überraschungen auf der Rechnung. Was nicht sein muss, machen wir auch nicht. Rufen Sie an, wir finden einen Termin, der passt.","tag.strength":"Diagnose","tag.fatloss":"Wartung","tag.nutrition":"Reparatur","tag.mindset":"TÜV","about.langs":"Auf Deutsch · English · Español","stat.years":"Jahre Werkstatt-Erfahrung","stat.clients":"Fahrzeuge im Jahr","stat.languages":"Marken im Service","principles.title":"Wofür wir stehen","p1.h3":"Qualität","p1.p":"Wir arbeiten mit Anspruch und liefern Ergebnisse, auf die du dich verlassen kannst.","p2.h3":"Erfahrung","p2.p":"Langjährige Erfahrung und echtes Handwerk — bei uns bist du in guten Händen.","p3.h3":"Persönlich","p3.p":"Kein Fließband: Wir nehmen uns Zeit und gehen auf deine Wünsche ein.","p4.h3":"Zuverlässig","p4.p":"Termintreu, ehrlich und gut erreichbar — auf uns kannst du zählen.","offers.title":"Preise auf einen Blick","services.title":"Das machen wir für Sie","o1.tag":"Leistung","o1.h3":"Basis","o1.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o1.li1":"Persönliche Beratung","o1.li2":"Faire, transparente Preise","o1.li3":"Schnelle, saubere Umsetzung","o1.unit":"/ Leistung","o2.tag":"Beliebtes Paket","o2.h3":"Beliebt","o2.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o2.li1":"Persönliche Beratung","o2.li2":"Faire, transparente Preise","o2.li3":"Schnelle, saubere Umsetzung","o2.li4":"Zufriedenheitsgarantie","o2.unit":"/ Monat","o3.tag":"Zusatzleistung","o3.h3":"Premium","o3.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o3.li1":"Persönliche Beratung","o3.li2":"Faire, transparente Preise","o3.li3":"Schnelle, saubere Umsetzung","o3.unit":"/ Paket","offer.from":"ab","offer.cta":"Anfragen","offers.note":"Alle Preise sind Beispielwerte und verstehen sich als Richtwert. Den genauen Preis nennen wir Ihnen nach kurzer Prüfung des Fahrzeugs.","ps1.h3":"Kontakt","ps1.p":"Wir lernen dich und dein Ziel kennen. Unverbindlich.","ps2.h3":"Angebot","ps2.p":"Du bekommst einen klaren, passenden Vorschlag.","ps3.h3":"Umsetzung","ps3.p":"Wir setzen um — sauber und zuverlässig.","ps4.h3":"Ergebnis","ps4.p":"Du bist zufrieden — und wir bleiben ansprechbar.","cta.title":"Auto macht Ärger? <span class=\"ital\">Rufen Sie uns an.</span>","cta.lead":"Ein kurzer Anruf reicht und wir klären, was los ist und wann Sie vorbeikommen können. Ehrliche Beratung, faire Preise, Werkstatt in Bremen.","cta.whatsapp":"Per WhatsApp schreiben","cta.email":"E-Mail senden","cta.hint":"Kontaktdaten sind Platzhalter — hier kommen die echten Daten rein.","footer.role":"Kfz-Werkstatt","footer.claim":"ASR DelmeMobil Autoservice","footer.imprint":"Impressum","footer.privacy":"Datenschutz","tst.label":"Stimmen","tst.title":"Was Kund:innen sagen","tst1.q":"Absolut empfehlenswert — schnell, freundlich und ein top Ergebnis.","tst1.a":"— Zufriedene Kundin (Platzhalter)","tst2.q":"Man fühlt sich sofort gut aufgehoben. Gerne wieder!","tst2.a":"— Stammkunde (Platzhalter)","tst3.q":"Professionell von A bis Z. Klare Empfehlung.","tst3.a":"— Neukundin (Platzhalter)","gal.label":"Galerie","gal.title":"Einblicke","hrs.label":"Zeiten","hrs.title":"Öffnungszeiten","hrs.note":"An Feiertagen können die Zeiten abweichen.","faq.label":"FAQ","faq.title":"Häufige Fragen","faq1.q":"Arbeitet ihr auch an meiner Automarke?","faq1.a":"Ja. Als freie Werkstatt betreuen wir nahezu alle gängigen Marken und Modelle, von deutschen Herstellern über Franzosen bis zu Asiaten. Auch bei Fahrzeugen mit Herstellergarantie machen wir Inspektionen nach Vorgabe, ohne dass Ihre Garantie erlischt.","faq2.q":"Bekomme ich vorher gesagt, was die Reparatur kostet?","faq2.a":"Immer. Bevor wir etwas machen, prüfen wir das Fahrzeug und geben Ihnen einen Kostenvoranschlag. Kommt während der Arbeit etwas Unerwartetes dazu, rufen wir Sie an, bevor wir weitermachen. So gibt es auf der Rechnung keine bösen Überraschungen.","faq3.q":"Kann ich kurzfristig einen Termin bekommen?","faq3.a":"In vielen Fällen ja. Für Ölwechsel, kleine Reparaturen oder eine schnelle Durchsicht finden wir oft noch in derselben Woche einen Platz. Am besten rufen Sie kurz an, dann sagen wir Ihnen sofort, wann es passt."},"en":{"nav.about":"About","nav.principles":"Values","nav.training":"Services","nav.contact":"Contact","nav.cta":"Contact","idx.process":"Process","hero.eyebrow":"Car repair garage in Bremen","hero.title":"Your car in <span class=\"ital\">good hands</span><br>from oil change to inspection","hero.lead":"Independent garage for all makes in Bremen. Fair prices, honest diagnostics and appointments that can even happen at short notice. We tell you upfront what needs doing and what can wait.","hero.cta":"Call now","hero.instagram":"View Instagram","statement.label":"Philosophy","statement.text":"We do <span class=\"ital\">Kfz-Werkstatt</span> with standards — honest, careful and tailored to you.","about.h2":"Repair work is a matter of trust at <span class=\"ital\">ASR DelmeMobil Autoservice.</span>","about.p1":"We are an independent car repair garage in Bremen and look after all common makes, whether small car, estate or van. From regular servicing and the general inspection to tricky electronic fault-finding, we handle most of it under one roof.","about.p2":"Before every repair you get a clear cost estimate, no fine print and no surprises on the bill. What does not need doing, we do not do. Give us a call and we will find an appointment that fits.","tag.strength":"Quality","tag.fatloss":"Experience","tag.nutrition":"Personal","tag.mindset":"Reliable","about.langs":"In German · English · Spanish","stat.years":"Years of experience","stat.clients":"Happy clients","stat.languages":"Languages","principles.title":"What we stand for","p1.h3":"Quality","p1.p":"We work to a high standard and deliver results you can rely on.","p2.h3":"Experience","p2.p":"Years of experience and real craft — you're in good hands with us.","p3.h3":"Personal","p3.p":"No conveyor belt: we take our time and listen to your wishes.","p4.h3":"Reliable","p4.p":"Punctual, honest and easy to reach — you can count on us.","offers.title":"Prices at a glance","services.title":"What we do for you","o1.tag":"Service","o1.h3":"Basic","o1.desc":"A well-thought-out offer, tailored to your needs.","o1.li1":"Personal consultation","o1.li2":"Fair, transparent pricing","o1.li3":"Fast, clean delivery","o1.unit":"/ service","o2.tag":"Popular package","o2.h3":"Popular","o2.desc":"A well-thought-out offer, tailored to your needs.","o2.li1":"Personal consultation","o2.li2":"Fair, transparent pricing","o2.li3":"Fast, clean delivery","o2.li4":"Satisfaction guarantee","o2.unit":"/ month","o3.tag":"Add-on","o3.h3":"Premium","o3.desc":"A well-thought-out offer, tailored to your needs.","o3.li1":"Personal consultation","o3.li2":"Fair, transparent pricing","o3.li3":"Fast, clean delivery","o3.unit":"/ package","offer.from":"from","offer.cta":"Enquire","offers.note":"Placeholder prices — real terms are agreed together.","ps1.h3":"Contact","ps1.p":"We get to know you and your goal. No obligation.","ps2.h3":"Proposal","ps2.p":"You get a clear, tailored proposal.","ps3.h3":"Delivery","ps3.p":"We deliver — cleanly and reliably.","ps4.h3":"Result","ps4.p":"You're happy — and we stay reachable.","cta.title":"Car giving you trouble? <span class=\"ital\">Give us a call.</span>","cta.lead":"One short call is enough to sort out what is going on and when you can drop by. Honest advice, fair prices, garage in Bremen.","cta.whatsapp":"Message on WhatsApp","cta.email":"Send an email","cta.hint":"Contact details are placeholders — the real ones go here.","footer.role":"Kfz-Werkstatt","footer.claim":"ASR DelmeMobil Autoservice","footer.imprint":"Imprint","footer.privacy":"Privacy","tst.label":"Voices","tst.title":"What clients say","tst1.q":"Highly recommended — fast, friendly and a top result.","tst1.a":"— Happy client (placeholder)","tst2.q":"You feel in good hands right away. Would come back!","tst2.a":"— Regular (placeholder)","tst3.q":"Professional from start to finish. Clear recommendation.","tst3.a":"— New client (placeholder)","gal.label":"Gallery","gal.title":"A look inside","hrs.label":"Hours","hrs.title":"Opening hours","hrs.note":"Hours may differ on public holidays.","faq.label":"FAQ","faq.title":"Frequently asked","faq1.q":"Do you work on my make of car too?","faq1.a":"Yes. As an independent garage we service nearly all common makes and models, from German manufacturers to French and Asian brands. Even for cars still under manufacturer warranty we service to spec without voiding your warranty.","faq2.q":"How much does it cost?","faq2.a":"It depends on the scope — we discuss exact prices in person.","faq3.q":"Are you available on short notice?","faq3.a":"Often yes — just ask and we'll find a way."},"es":{"nav.about":"Nosotros","nav.principles":"Valores","nav.training":"Servicios","nav.contact":"Contacto","nav.cta":"Contacto","idx.process":"Proceso","hero.eyebrow":"Taller de coches en Bremen","hero.title":"Su coche en <span class=\"ital\">buenas manos</span><br>del cambio de aceite a la ITV","hero.lead":"Taller independiente para todas las marcas en Bremen. Precios justos, diagnóstico honesto y citas que a veces salen incluso a corto plazo. Le decimos por adelantado qué hay que hacer y qué puede esperar.","hero.cta":"Llamar","hero.instagram":"Ver Instagram","statement.label":"Filosofía","statement.text":"Hacemos <span class=\"ital\">Kfz-Werkstatt</span> con exigencia — con honestidad y a tu medida.","about.h2":"Reparar es cuestión de confianza en <span class=\"ital\">ASR DelmeMobil Autoservice.</span>","about.p1":"Somos un taller independiente en Bremen y nos ocupamos de todas las marcas habituales, ya sea un utilitario, un familiar o una furgoneta. Desde el mantenimiento clásico y la inspección técnica hasta la búsqueda de averías electrónicas, hacemos casi todo bajo un mismo techo.","about.p2":"Antes de cada reparación recibe un presupuesto claro, sin letra pequeña ni sorpresas en la factura. Lo que no hace falta, no lo hacemos. Llámenos y encontramos una cita que le venga bien.","tag.strength":"Calidad","tag.fatloss":"Experiencia","tag.nutrition":"Personal","tag.mindset":"Fiable","about.langs":"En alemán · inglés · español","stat.years":"Años de experiencia","stat.clients":"Clientes satisfechos","stat.languages":"Idiomas","principles.title":"Lo que defendemos","p1.h3":"Calidad","p1.p":"Trabajamos con exigencia y entregamos resultados en los que puedes confiar.","p2.h3":"Experiencia","p2.p":"Años de experiencia y oficio de verdad — estás en buenas manos.","p3.h3":"Personal","p3.p":"Nada de prisas: nos tomamos el tiempo y escuchamos lo que quieres.","p4.h3":"Fiable","p4.p":"Puntuales, honestos y siempre disponibles — puedes contar con nosotros.","offers.title":"Precios de un vistazo","services.title":"Esto es lo que hacemos por usted","o1.tag":"Servicio","o1.h3":"Básico","o1.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o1.li1":"Asesoría personal","o1.li2":"Precios justos y claros","o1.li3":"Ejecución rápida y limpia","o1.unit":"/ servicio","o2.tag":"Paquete popular","o2.h3":"Popular","o2.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o2.li1":"Asesoría personal","o2.li2":"Precios justos y claros","o2.li3":"Ejecución rápida y limpia","o2.li4":"Garantía de satisfacción","o2.unit":"/ mes","o3.tag":"Complemento","o3.h3":"Premium","o3.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o3.li1":"Asesoría personal","o3.li2":"Precios justos y claros","o3.li3":"Ejecución rápida y limpia","o3.unit":"/ paquete","offer.from":"desde","offer.cta":"Consultar","offers.note":"Precios de ejemplo — las condiciones reales las definimos juntos.","ps1.h3":"Contacto","ps1.p":"Te conocemos a ti y tu objetivo. Sin compromiso.","ps2.h3":"Propuesta","ps2.p":"Recibes una propuesta clara y a medida.","ps3.h3":"Ejecución","ps3.p":"Ejecutamos — con limpieza y fiabilidad.","ps4.h3":"Resultado","ps4.p":"Quedas satisfecho — y seguimos disponibles.","cta.title":"¿Su coche da problemas? <span class=\"ital\">Llámenos.</span>","cta.lead":"Una llamada corta basta para aclarar qué pasa y cuándo puede pasarse. Asesoramiento honesto, precios justos, taller en Bremen.","cta.whatsapp":"Escribir por WhatsApp","cta.email":"Enviar un email","cta.hint":"Los datos de contacto son de ejemplo — aquí irán los reales.","footer.role":"Kfz-Werkstatt","footer.claim":"ASR DelmeMobil Autoservice","footer.imprint":"Aviso legal","footer.privacy":"Privacidad","tst.label":"Opiniones","tst.title":"Lo que dicen los clientes","tst1.q":"Muy recomendable — rápido, amable y con gran resultado.","tst1.a":"— Cliente satisfecha (ejemplo)","tst2.q":"Te sientes en buenas manos enseguida. ¡Volveré!","tst2.a":"— Cliente habitual (ejemplo)","tst3.q":"Profesional de principio a fin. Recomendado.","tst3.a":"— Cliente nueva (ejemplo)","gal.label":"Galería","gal.title":"Un vistazo","hrs.label":"Horario","hrs.title":"Horario de apertura","hrs.note":"El horario puede variar en festivos.","faq.label":"FAQ","faq.title":"Preguntas frecuentes","faq1.q":"¿Trabajan también con mi marca de coche?","faq1.a":"Sí. Como taller independiente atendemos casi todas las marcas y modelos habituales, desde fabricantes alemanes hasta franceses y asiáticos. Incluso en coches con garantía del fabricante hacemos el mantenimiento según lo indicado sin anular su garantía.","faq2.q":"¿Cuánto cuesta?","faq2.a":"Depende del alcance — los precios exactos los vemos en persona.","faq3.q":"¿Estáis disponibles a corto plazo?","faq3.a":"A menudo sí — pregunta y encontramos la manera."}};

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

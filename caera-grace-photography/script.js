/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* JS is running → arm the reveal animation. If this line never runs (JS blocked
     or errored before it), <html> keeps `no-js` and all content stays visible. */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* ---------- translations ---------- */
  const I18N = {"de":{"nav.about":"Über uns","nav.principles":"Werte","nav.training":"Leistungen","nav.contact":"Kontakt","nav.cta":"Kontakt","idx.process":"Ablauf","hero.eyebrow":"Fotografie aus Oldenburg","hero.title":"Bilder, die bleiben,<br><span class=\"ital\">wenn der Moment längst vorbei ist.</span>","hero.lead":"Ob Hochzeit, Familie oder Ihr erstes echtes Bewerbungsfoto – ich fotografiere Menschen so, wie sie an ihren besten Tagen sind. Natürlich, nah, ohne steife Posen.","hero.cta":"Anfrage senden","hero.instagram":"Instagram ansehen","statement.label":"Philosophie","statement.text":"Wir machen <span class=\"ital\">Fotograf</span> mit Anspruch — ehrlich, sorgfältig und auf dich zugeschnitten.","about.h2":"Hinter der Kamera steht <span class=\"ital\">Caera Grace Photography.</span>","about.p1":"Ich bin Caera und fotografiere seit acht Jahren in Oldenburg und dem gesamten Ammerland. Angefangen hat alles mit einer geliehenen Kamera auf der Hochzeit einer Freundin – heute begleite ich pro Jahr rund vierzig Paare, Familien und Unternehmen vor die Linse.","about.p2":"Mir geht es nicht um perfekte Kulissen, sondern um echte Momente: den kurzen Blick zwischen Braut und Vater, das Lachen eines Kindes, das man nicht stellen kann. Ich arbeite ruhig, geduldig und fast unsichtbar – damit Sie sich am Ende in Ihren Bildern wiedererkennen.","tag.strength":"Natürliches Licht","tag.fatloss":"Ehrliche Momente","tag.nutrition":"Analoge Anmutung","tag.mindset":"Feine Bildbearbeitung","about.langs":"Auf Deutsch · English · Español","stat.years":"Jahre Erfahrung","stat.clients":"begleitete Shootings","stat.languages":"Hochzeiten pro Saison","principles.title":"Wofür wir stehen","p1.h3":"Qualität","p1.p":"Wir arbeiten mit Anspruch und liefern Ergebnisse, auf die du dich verlassen kannst.","p2.h3":"Erfahrung","p2.p":"Langjährige Erfahrung und echtes Handwerk — bei uns bist du in guten Händen.","p3.h3":"Persönlich","p3.p":"Kein Fließband: Wir nehmen uns Zeit und gehen auf deine Wünsche ein.","p4.h3":"Zuverlässig","p4.p":"Termintreu, ehrlich und gut erreichbar — auf uns kannst du zählen.","offers.title":"Pakete","services.title":"Was wir fotografieren","o1.tag":"Für Einzelne & Paare","o1.h3":"Session Pur","o1.desc":"Ein entspanntes Shooting an einem Ort Ihrer Wahl – ideal für Portraits, Paare oder ein einzelnes schönes Bild für die Wand.","o1.li1":"45 Minuten Shooting-Zeit an einer Location","o1.li2":"10 sorgfältig bearbeitete Bilder in hoher Auflösung","o1.li3":"Private Online-Galerie zum Herunterladen","o1.unit":"pro Shooting","o2.tag":"Der ganze Tag","o2.h3":"Ja-Wort Komplett","o2.desc":"Ihre Hochzeit von den Vorbereitungen bis zum Tanz – ich bin dabei, wenn es darauf ankommt, und halte die großen wie die leisen Momente fest.","o2.li1":"Bis zu 10 Stunden Begleitung am Hochzeitstag","o2.li2":"300+ bearbeitete Bilder in Ihrer Online-Galerie","o2.li3":"Vorab-Gespräch und Ablaufplanung inklusive","o2.li4":"Edle USB-Box mit allen Bildern als Erinnerung","o2.unit":"pro Hochzeit","o3.tag":"Für Beruf & Marke","o3.h3":"Business Auftritt","o3.desc":"Professionelle Headshots und authentische Bilder für Ihr Team, Ihre Website oder LinkedIn – im Studio oder bei Ihnen vor Ort.","o3.li1":"Shooting im Studio oder in Ihren Räumen","o3.li2":"5 bearbeitete Portraits pro Person","o3.li3":"Staffelpreise ab dem dritten Mitarbeiter","o3.unit":"pro Person","offer.from":"ab","offer.cta":"Anfragen","offers.note":"Alle Preise sind Beispiele und richten sich nach Umfang, Aufwand und Anfahrt. Ihr genaues Angebot erhalten Sie nach einem kurzen Kennenlernen.","ps1.h3":"Anfrage","ps1.p":"Sie schreiben mir kurz, worum es geht und wann Ihr Termin ansteht. Ich prüfe meine Verfügbarkeit und melde mich innerhalb eines Tages zurück.","ps2.h3":"Kennenlernen","ps2.p":"In einem lockeren Gespräch – bei einem Kaffee oder per Telefon – klären wir Ihre Wünsche, den Stil und den passenden Ort für Ihr Shooting.","ps3.h3":"Shooting","ps3.p":"Am Tag selbst dürfen Sie sich einfach fallen lassen. Ich führe Sie ruhig durch die Situationen, sodass echte, entspannte Bilder entstehen.","ps4.h3":"Lieferung","ps4.p":"Sie erhalten Ihre fertig bearbeiteten Bilder in einer privaten Online-Galerie – zum Ansehen, Teilen und Herunterladen in voller Auflösung.","cta.title":"Lassen Sie uns Ihren <span class=\"ital\">Moment festhalten.</span>","cta.lead":"Erzählen Sie mir kurz, worum es geht – Hochzeit, Familie, Business oder etwas ganz Eigenes. Ich melde mich innerhalb eines Tages mit einem persönlichen Vorschlag.","cta.whatsapp":"Per WhatsApp schreiben","cta.email":"E-Mail senden","cta.hint":"Kontaktdaten sind Platzhalter — hier kommen die echten Daten rein.","footer.role":"Fotograf","footer.claim":"Caera Grace Photography","footer.imprint":"Impressum","footer.privacy":"Datenschutz","tst.label":"Stimmen","tst.title":"Was Kund:innen sagen","tst1.q":"Absolut empfehlenswert — schnell, freundlich und ein top Ergebnis.","tst1.a":"— Zufriedene Kundin (Platzhalter)","tst2.q":"Man fühlt sich sofort gut aufgehoben. Gerne wieder!","tst2.a":"— Stammkunde (Platzhalter)","tst3.q":"Professionell von A bis Z. Klare Empfehlung.","tst3.a":"— Neukundin (Platzhalter)","gal.label":"Galerie","gal.title":"Einblicke","hrs.label":"Zeiten","hrs.title":"Öffnungszeiten","hrs.note":"An Feiertagen können die Zeiten abweichen.","faq.label":"FAQ","faq.title":"Häufige Fragen","faq1.q":"Wie schnell bekomme ich meine Bilder?","faq1.a":"Portrait- und Business-Shootings liefere ich in der Regel innerhalb von sieben bis zehn Tagen. Bei Hochzeiten erhalten Sie vorab eine kleine Auswahl an Highlights, die vollständige Galerie folgt nach vier bis sechs Wochen – jedes Bild einzeln bearbeitet.","faq2.q":"Was passiert, wenn das Wetter nicht mitspielt?","faq2.a":"Bei Außen-Shootings vereinbaren wir immer einen Ausweichtermin, falls es in Strömen regnet. Leichter Regen oder bewölkter Himmel sind übrigens oft die schönsten Bedingungen für weiches, gleichmäßiges Licht.","faq3.q":"Ich fühle mich unwohl vor der Kamera – geht das trotzdem?","faq3.a":"Das höre ich vor fast jedem Shooting. Genau deshalb starten wir langsam, reden erst einmal und ich gebe Ihnen klare, einfache Anweisungen. Nach den ersten Minuten vergessen die meisten die Kamera völlig."},"en":{"nav.about":"About","nav.principles":"Values","nav.training":"Services","nav.contact":"Contact","nav.cta":"Contact","idx.process":"Process","hero.eyebrow":"Photography from Oldenburg","hero.title":"Images that stay<br><span class=\"ital\">long after the moment has passed.</span>","hero.lead":"Whether it's a wedding, your family or your first real professional headshot – I photograph people the way they are on their best days. Natural, close, without stiff poses.","hero.cta":"Send inquiry","hero.instagram":"View Instagram","statement.label":"Philosophy","statement.text":"We do <span class=\"ital\">Fotograf</span> with standards — honest, careful and tailored to you.","about.h2":"Behind the camera stands <span class=\"ital\">Caera Grace Photography.</span>","about.p1":"I'm Caera and I've been photographing in Oldenburg and the surrounding Ammerland for eight years. It all began with a borrowed camera at a friend's wedding – today I guide around forty couples, families and businesses in front of the lens each year.","about.p2":"For me it's not about perfect backdrops, but about real moments: the brief glance between bride and father, a child's laugh you simply can't stage. I work quietly, patiently and almost invisibly – so that in the end you recognise yourself in your images.","tag.strength":"Quality","tag.fatloss":"Experience","tag.nutrition":"Personal","tag.mindset":"Reliable","about.langs":"In German · English · Spanish","stat.years":"Years of experience","stat.clients":"Happy clients","stat.languages":"Languages","principles.title":"What we stand for","p1.h3":"Quality","p1.p":"We work to a high standard and deliver results you can rely on.","p2.h3":"Experience","p2.p":"Years of experience and real craft — you're in good hands with us.","p3.h3":"Personal","p3.p":"No conveyor belt: we take our time and listen to your wishes.","p4.h3":"Reliable","p4.p":"Punctual, honest and easy to reach — you can count on us.","offers.title":"Packages","services.title":"What we photograph","o1.tag":"Service","o1.h3":"Basic","o1.desc":"A well-thought-out offer, tailored to your needs.","o1.li1":"Personal consultation","o1.li2":"Fair, transparent pricing","o1.li3":"Fast, clean delivery","o1.unit":"/ service","o2.tag":"Popular package","o2.h3":"Popular","o2.desc":"A well-thought-out offer, tailored to your needs.","o2.li1":"Personal consultation","o2.li2":"Fair, transparent pricing","o2.li3":"Fast, clean delivery","o2.li4":"Satisfaction guarantee","o2.unit":"/ month","o3.tag":"Add-on","o3.h3":"Premium","o3.desc":"A well-thought-out offer, tailored to your needs.","o3.li1":"Personal consultation","o3.li2":"Fair, transparent pricing","o3.li3":"Fast, clean delivery","o3.unit":"/ package","offer.from":"from","offer.cta":"Enquire","offers.note":"Placeholder prices — real terms are agreed together.","ps1.h3":"Contact","ps1.p":"We get to know you and your goal. No obligation.","ps2.h3":"Proposal","ps2.p":"You get a clear, tailored proposal.","ps3.h3":"Delivery","ps3.p":"We deliver — cleanly and reliably.","ps4.h3":"Result","ps4.p":"You're happy — and we stay reachable.","cta.title":"Let's capture your <span class=\"ital\">moment.</span>","cta.lead":"Tell me briefly what it's about – a wedding, family, business or something entirely your own. I'll get back to you within a day with a personal proposal.","cta.whatsapp":"Message on WhatsApp","cta.email":"Send an email","cta.hint":"Contact details are placeholders — the real ones go here.","footer.role":"Fotograf","footer.claim":"Caera Grace Photography","footer.imprint":"Imprint","footer.privacy":"Privacy","tst.label":"Voices","tst.title":"What clients say","tst1.q":"Highly recommended — fast, friendly and a top result.","tst1.a":"— Happy client (placeholder)","tst2.q":"You feel in good hands right away. Would come back!","tst2.a":"— Regular (placeholder)","tst3.q":"Professional from start to finish. Clear recommendation.","tst3.a":"— New client (placeholder)","gal.label":"Gallery","gal.title":"A look inside","hrs.label":"Hours","hrs.title":"Opening hours","hrs.note":"Hours may differ on public holidays.","faq.label":"FAQ","faq.title":"Frequently asked","faq1.q":"How quickly do I get my images?","faq1.a":"Portrait and business shoots are usually delivered within seven to ten days. For weddings you receive a small selection of highlights in advance, with the full gallery following after four to six weeks – every image individually edited.","faq2.q":"How much does it cost?","faq2.a":"It depends on the scope — we discuss exact prices in person.","faq3.q":"Are you available on short notice?","faq3.a":"Often yes — just ask and we'll find a way."},"es":{"nav.about":"Nosotros","nav.principles":"Valores","nav.training":"Servicios","nav.contact":"Contacto","nav.cta":"Contacto","idx.process":"Proceso","hero.eyebrow":"Fotografía desde Oldenburg","hero.title":"Imágenes que permanecen<br><span class=\"ital\">cuando el momento ya ha pasado.</span>","hero.lead":"Ya sea una boda, tu familia o tu primera foto profesional de verdad – fotografío a las personas tal como son en sus mejores días. Con naturalidad, cercanía y sin poses rígidas.","hero.cta":"Enviar consulta","hero.instagram":"Ver Instagram","statement.label":"Filosofía","statement.text":"Hacemos <span class=\"ital\">Fotograf</span> con exigencia — con honestidad y a tu medida.","about.h2":"Detrás de la cámara está <span class=\"ital\">Caera Grace Photography.</span>","about.p1":"Soy Caera y llevo ocho años fotografiando en Oldenburg y en toda la región de Ammerland. Todo empezó con una cámara prestada en la boda de una amiga – hoy acompaño cada año a unas cuarenta parejas, familias y empresas ante el objetivo.","about.p2":"Para mí no se trata de escenarios perfectos, sino de momentos reales: la mirada fugaz entre la novia y su padre, la risa de un niño que no se puede fingir. Trabajo con calma, paciencia y casi de forma invisible – para que al final te reconozcas en tus imágenes.","tag.strength":"Calidad","tag.fatloss":"Experiencia","tag.nutrition":"Personal","tag.mindset":"Fiable","about.langs":"En alemán · inglés · español","stat.years":"Años de experiencia","stat.clients":"Clientes satisfechos","stat.languages":"Idiomas","principles.title":"Lo que defendemos","p1.h3":"Calidad","p1.p":"Trabajamos con exigencia y entregamos resultados en los que puedes confiar.","p2.h3":"Experiencia","p2.p":"Años de experiencia y oficio de verdad — estás en buenas manos.","p3.h3":"Personal","p3.p":"Nada de prisas: nos tomamos el tiempo y escuchamos lo que quieres.","p4.h3":"Fiable","p4.p":"Puntuales, honestos y siempre disponibles — puedes contar con nosotros.","offers.title":"Paquetes","services.title":"Qué fotografiamos","o1.tag":"Servicio","o1.h3":"Básico","o1.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o1.li1":"Asesoría personal","o1.li2":"Precios justos y claros","o1.li3":"Ejecución rápida y limpia","o1.unit":"/ servicio","o2.tag":"Paquete popular","o2.h3":"Popular","o2.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o2.li1":"Asesoría personal","o2.li2":"Precios justos y claros","o2.li3":"Ejecución rápida y limpia","o2.li4":"Garantía de satisfacción","o2.unit":"/ mes","o3.tag":"Complemento","o3.h3":"Premium","o3.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o3.li1":"Asesoría personal","o3.li2":"Precios justos y claros","o3.li3":"Ejecución rápida y limpia","o3.unit":"/ paquete","offer.from":"desde","offer.cta":"Consultar","offers.note":"Precios de ejemplo — las condiciones reales las definimos juntos.","ps1.h3":"Contacto","ps1.p":"Te conocemos a ti y tu objetivo. Sin compromiso.","ps2.h3":"Propuesta","ps2.p":"Recibes una propuesta clara y a medida.","ps3.h3":"Ejecución","ps3.p":"Ejecutamos — con limpieza y fiabilidad.","ps4.h3":"Resultado","ps4.p":"Quedas satisfecho — y seguimos disponibles.","cta.title":"Capturemos tu <span class=\"ital\">momento.</span>","cta.lead":"Cuéntame brevemente de qué se trata – boda, familia, empresa o algo totalmente tuyo. Te responderé en un día con una propuesta personal.","cta.whatsapp":"Escribir por WhatsApp","cta.email":"Enviar un email","cta.hint":"Los datos de contacto son de ejemplo — aquí irán los reales.","footer.role":"Fotograf","footer.claim":"Caera Grace Photography","footer.imprint":"Aviso legal","footer.privacy":"Privacidad","tst.label":"Opiniones","tst.title":"Lo que dicen los clientes","tst1.q":"Muy recomendable — rápido, amable y con gran resultado.","tst1.a":"— Cliente satisfecha (ejemplo)","tst2.q":"Te sientes en buenas manos enseguida. ¡Volveré!","tst2.a":"— Cliente habitual (ejemplo)","tst3.q":"Profesional de principio a fin. Recomendado.","tst3.a":"— Cliente nueva (ejemplo)","gal.label":"Galería","gal.title":"Un vistazo","hrs.label":"Horario","hrs.title":"Horario de apertura","hrs.note":"El horario puede variar en festivos.","faq.label":"FAQ","faq.title":"Preguntas frecuentes","faq1.q":"¿Con qué rapidez recibo mis imágenes?","faq1.a":"Las sesiones de retrato y de empresa suelo entregarlas en un plazo de siete a diez días. En las bodas recibes de antemano una pequeña selección de momentos destacados; la galería completa llega tras cuatro a seis semanas, con cada imagen editada individualmente.","faq2.q":"¿Cuánto cuesta?","faq2.a":"Depende del alcance — los precios exactos los vemos en persona.","faq3.q":"¿Estáis disponibles a corto plazo?","faq3.a":"A menudo sí — pregunta y encontramos la manera."}};

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

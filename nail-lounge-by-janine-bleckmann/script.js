/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* JS is running → arm the reveal animation. If this line never runs (JS blocked
     or errored before it), <html> keeps `no-js` and all content stays visible. */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* ---------- translations ---------- */
  const I18N = {"de":{"nav.about":"Über uns","nav.principles":"Werte","nav.training":"Leistungen","nav.contact":"Kontakt","nav.cta":"Kontakt","idx.process":"Ablauf","hero.eyebrow":"Nagelstudio in Bremen","hero.title":"Gepflegte Hände,<br><span class=\"ital\">die man gerne herzeigt.</span>","hero.lead":"Ob dezente French, kräftiges Gel oder aufwendiges Nageldesign zum Anlass: Bei uns bekommst du Nägel, die halten und zu dir passen. In Ruhe, mit sauberer Arbeit und einem geschulten Blick fürs Detail.","hero.cta":"Termin buchen","hero.instagram":"Instagram ansehen","statement.label":"Philosophie","statement.text":"Wir machen <span class=\"ital\">Nagelstudio</span> mit Anspruch — ehrlich, sorgfältig und auf dich zugeschnitten.","about.h2":"Herzlich willkommen in der <span class=\"ital\">Nail Lounge by Janine Bleckmann.</span>","about.p1":"Seit vielen Jahren dreht sich bei Janine alles um schöne Nägel. Angefangen hat es mit der Begeisterung für Farben und Formen, heute ist daraus ein kleines Studio geworden, in dem du dich fallen lassen und einfach mal abschalten kannst. Kein Fließband, sondern Zeit für deine Nägel.","about.p2":"Wir arbeiten mit hochwertigen Materialien und legen Wert auf saubere, hygienische Arbeit. Ob du regelmäßig kommst oder dir zum Geburtstag, zur Hochzeit oder einfach zwischendurch etwas gönnst: Wir beraten dich ehrlich und finden gemeinsam das Design, das zu deinem Alltag passt.","tag.strength":"Maniküre","tag.fatloss":"Gelnägel","tag.nutrition":"Nageldesign","tag.mindset":"Fußpflege","about.langs":"Auf Deutsch · English · Español","stat.years":"Jahre Erfahrung","stat.clients":"Stammkundinnen","stat.languages":"Designs im Angebot","principles.title":"Wofür wir stehen","p1.h3":"Qualität","p1.p":"Wir arbeiten mit Anspruch und liefern Ergebnisse, auf die du dich verlassen kannst.","p2.h3":"Erfahrung","p2.p":"Langjährige Erfahrung und echtes Handwerk — bei uns bist du in guten Händen.","p3.h3":"Persönlich","p3.p":"Kein Fließband: Wir nehmen uns Zeit und gehen auf deine Wünsche ein.","p4.h3":"Zuverlässig","p4.p":"Termintreu, ehrlich und gut erreichbar — auf uns kannst du zählen.","offers.title":"Behandlungen & Preise","services.title":"Unsere Leistungen","o1.tag":"Leistung","o1.h3":"Basis","o1.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o1.li1":"Persönliche Beratung","o1.li2":"Faire, transparente Preise","o1.li3":"Schnelle, saubere Umsetzung","o1.unit":"/ Leistung","o2.tag":"Beliebtes Paket","o2.h3":"Beliebt","o2.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o2.li1":"Persönliche Beratung","o2.li2":"Faire, transparente Preise","o2.li3":"Schnelle, saubere Umsetzung","o2.li4":"Zufriedenheitsgarantie","o2.unit":"/ Monat","o3.tag":"Zusatzleistung","o3.h3":"Premium","o3.desc":"Ein durchdachtes Angebot, abgestimmt auf deine Bedürfnisse.","o3.li1":"Persönliche Beratung","o3.li2":"Faire, transparente Preise","o3.li3":"Schnelle, saubere Umsetzung","o3.unit":"/ Paket","offer.from":"ab","offer.cta":"Anfragen","offers.note":"Alle Preise sind Beispiele und können je nach Länge, Aufwand und Design abweichen. Den genauen Preis nennen wir dir gerne vorab.","ps1.h3":"Kontakt","ps1.p":"Wir lernen dich und dein Ziel kennen. Unverbindlich.","ps2.h3":"Angebot","ps2.p":"Du bekommst einen klaren, passenden Vorschlag.","ps3.h3":"Umsetzung","ps3.p":"Wir setzen um — sauber und zuverlässig.","ps4.h3":"Ergebnis","ps4.p":"Du bist zufrieden — und wir bleiben ansprechbar.","cta.title":"Bereit für <span class=\"ital\">neue Nägel?</span>","cta.lead":"Sichere dir jetzt deinen Wunschtermin. Wir freuen uns auf dich.","cta.whatsapp":"Per WhatsApp schreiben","cta.email":"E-Mail senden","cta.hint":"Kontaktdaten sind Platzhalter — hier kommen die echten Daten rein.","footer.role":"Nagelstudio","footer.claim":"Nail Lounge by Janine Bleckmann","footer.imprint":"Impressum","footer.privacy":"Datenschutz","tst.label":"Stimmen","tst.title":"Was Kund:innen sagen","tst1.q":"Absolut empfehlenswert — schnell, freundlich und ein top Ergebnis.","tst1.a":"— Zufriedene Kundin (Platzhalter)","tst2.q":"Man fühlt sich sofort gut aufgehoben. Gerne wieder!","tst2.a":"— Stammkunde (Platzhalter)","tst3.q":"Professionell von A bis Z. Klare Empfehlung.","tst3.a":"— Neukundin (Platzhalter)","gal.label":"Galerie","gal.title":"Einblicke","hrs.label":"Zeiten","hrs.title":"Öffnungszeiten","hrs.note":"An Feiertagen können die Zeiten abweichen.","faq.label":"FAQ","faq.title":"Häufige Fragen","faq1.q":"Wie lange dauert eine Neumodellage mit Gel?","faq1.a":"Für eine komplette Neumodellage solltest du rund zwei Stunden einplanen, bei aufwendigem Design etwas mehr. Ein Auffüllen geht deutlich schneller. Wir sagen dir bei der Buchung, wie viel Zeit wir für deinen Wunsch einplanen.","faq2.q":"Wie oft muss ich zum Auffüllen kommen?","faq2.a":"Die meisten Kundinnen kommen alle drei bis vier Wochen zum Auffüllen. Das hängt aber davon ab, wie schnell deine Nägel nachwachsen und wie sehr sie im Alltag beansprucht werden. Wir finden gemeinsam einen Rhythmus, der für dich passt.","faq3.q":"Kann ich mein Wunschdesign einfach mitbringen?","faq3.a":"Sehr gerne. Bring uns ein Foto von Instagram oder Pinterest mit, dann schauen wir, wie wir es umsetzen. Auch bei Farbwahl und Form beraten wir dich, damit das Ergebnis wirklich zu deinen Händen passt."},"en":{"nav.about":"About","nav.principles":"Values","nav.training":"Services","nav.contact":"Contact","nav.cta":"Contact","idx.process":"Process","hero.eyebrow":"Nail salon in Bremen","hero.title":"Well-groomed hands,<br><span class=\"ital\">you love to show off.</span>","hero.lead":"Whether a subtle French, bold gel or an elaborate nail design for a special occasion: with us you get nails that last and suit you. Calmly, with clean work and a trained eye for detail.","hero.cta":"Book appointment","hero.instagram":"View Instagram","statement.label":"Philosophy","statement.text":"We do <span class=\"ital\">Nagelstudio</span> with standards — honest, careful and tailored to you.","about.h2":"A warm welcome to the <span class=\"ital\">Nail Lounge by Janine Bleckmann.</span>","about.p1":"For many years, everything at Janine's has revolved around beautiful nails. It started with a passion for colours and shapes, and today it has become a small studio where you can relax and switch off. No assembly line, just time for your nails.","about.p2":"We work with high-quality materials and value clean, hygienic work. Whether you come regularly or treat yourself for your birthday, a wedding or just in between: we advise you honestly and find the design that fits your everyday life together.","tag.strength":"Quality","tag.fatloss":"Experience","tag.nutrition":"Personal","tag.mindset":"Reliable","about.langs":"In German · English · Spanish","stat.years":"Years of experience","stat.clients":"Happy clients","stat.languages":"Languages","principles.title":"What we stand for","p1.h3":"Quality","p1.p":"We work to a high standard and deliver results you can rely on.","p2.h3":"Experience","p2.p":"Years of experience and real craft — you're in good hands with us.","p3.h3":"Personal","p3.p":"No conveyor belt: we take our time and listen to your wishes.","p4.h3":"Reliable","p4.p":"Punctual, honest and easy to reach — you can count on us.","offers.title":"Treatments & prices","services.title":"Our services","o1.tag":"Service","o1.h3":"Basic","o1.desc":"A well-thought-out offer, tailored to your needs.","o1.li1":"Personal consultation","o1.li2":"Fair, transparent pricing","o1.li3":"Fast, clean delivery","o1.unit":"/ service","o2.tag":"Popular package","o2.h3":"Popular","o2.desc":"A well-thought-out offer, tailored to your needs.","o2.li1":"Personal consultation","o2.li2":"Fair, transparent pricing","o2.li3":"Fast, clean delivery","o2.li4":"Satisfaction guarantee","o2.unit":"/ month","o3.tag":"Add-on","o3.h3":"Premium","o3.desc":"A well-thought-out offer, tailored to your needs.","o3.li1":"Personal consultation","o3.li2":"Fair, transparent pricing","o3.li3":"Fast, clean delivery","o3.unit":"/ package","offer.from":"from","offer.cta":"Enquire","offers.note":"Placeholder prices — real terms are agreed together.","ps1.h3":"Contact","ps1.p":"We get to know you and your goal. No obligation.","ps2.h3":"Proposal","ps2.p":"You get a clear, tailored proposal.","ps3.h3":"Delivery","ps3.p":"We deliver — cleanly and reliably.","ps4.h3":"Result","ps4.p":"You're happy — and we stay reachable.","cta.title":"Ready for <span class=\"ital\">new nails?</span>","cta.lead":"Secure your desired appointment now. We look forward to seeing you.","cta.whatsapp":"Message on WhatsApp","cta.email":"Send an email","cta.hint":"Contact details are placeholders — the real ones go here.","footer.role":"Nagelstudio","footer.claim":"Nail Lounge by Janine Bleckmann","footer.imprint":"Imprint","footer.privacy":"Privacy","tst.label":"Voices","tst.title":"What clients say","tst1.q":"Highly recommended — fast, friendly and a top result.","tst1.a":"— Happy client (placeholder)","tst2.q":"You feel in good hands right away. Would come back!","tst2.a":"— Regular (placeholder)","tst3.q":"Professional from start to finish. Clear recommendation.","tst3.a":"— New client (placeholder)","gal.label":"Gallery","gal.title":"A look inside","hrs.label":"Hours","hrs.title":"Opening hours","hrs.note":"Hours may differ on public holidays.","faq.label":"FAQ","faq.title":"Frequently asked","faq1.q":"How long does a full gel set take?","faq1.a":"For a complete new set you should plan around two hours, a little more for elaborate designs. A refill is much quicker. We will tell you at booking how much time we plan for your wish.","faq2.q":"How much does it cost?","faq2.a":"It depends on the scope — we discuss exact prices in person.","faq3.q":"Are you available on short notice?","faq3.a":"Often yes — just ask and we'll find a way."},"es":{"nav.about":"Nosotros","nav.principles":"Valores","nav.training":"Servicios","nav.contact":"Contacto","nav.cta":"Contacto","idx.process":"Proceso","hero.eyebrow":"Salón de uñas en Bremen","hero.title":"Manos cuidadas,<br><span class=\"ital\">que dan gusto mostrar.</span>","hero.lead":"Ya sea una francesa discreta, un gel intenso o un diseño elaborado para una ocasión especial: con nosotras consigues unas uñas que duran y que van contigo. Con calma, un trabajo limpio y ojo para el detalle.","hero.cta":"Reservar cita","hero.instagram":"Ver Instagram","statement.label":"Filosofía","statement.text":"Hacemos <span class=\"ital\">Nagelstudio</span> con exigencia — con honestidad y a tu medida.","about.h2":"Bienvenida a la <span class=\"ital\">Nail Lounge by Janine Bleckmann.</span>","about.p1":"Desde hace muchos años, en el estudio de Janine todo gira en torno a unas uñas bonitas. Empezó con la pasión por los colores y las formas, y hoy se ha convertido en un pequeño estudio donde puedes relajarte y desconectar. Nada de prisas, solo tiempo para tus uñas.","about.p2":"Trabajamos con materiales de alta calidad y damos importancia a un trabajo limpio e higiénico. Vengas con regularidad o te des un capricho por tu cumpleaños, una boda o simplemente entre semana: te asesoramos con honestidad y buscamos juntas el diseño que encaje con tu día a día.","tag.strength":"Calidad","tag.fatloss":"Experiencia","tag.nutrition":"Personal","tag.mindset":"Fiable","about.langs":"En alemán · inglés · español","stat.years":"Años de experiencia","stat.clients":"Clientes satisfechos","stat.languages":"Idiomas","principles.title":"Lo que defendemos","p1.h3":"Calidad","p1.p":"Trabajamos con exigencia y entregamos resultados en los que puedes confiar.","p2.h3":"Experiencia","p2.p":"Años de experiencia y oficio de verdad — estás en buenas manos.","p3.h3":"Personal","p3.p":"Nada de prisas: nos tomamos el tiempo y escuchamos lo que quieres.","p4.h3":"Fiable","p4.p":"Puntuales, honestos y siempre disponibles — puedes contar con nosotros.","offers.title":"Tratamientos y precios","services.title":"Nuestros servicios","o1.tag":"Servicio","o1.h3":"Básico","o1.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o1.li1":"Asesoría personal","o1.li2":"Precios justos y claros","o1.li3":"Ejecución rápida y limpia","o1.unit":"/ servicio","o2.tag":"Paquete popular","o2.h3":"Popular","o2.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o2.li1":"Asesoría personal","o2.li2":"Precios justos y claros","o2.li3":"Ejecución rápida y limpia","o2.li4":"Garantía de satisfacción","o2.unit":"/ mes","o3.tag":"Complemento","o3.h3":"Premium","o3.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o3.li1":"Asesoría personal","o3.li2":"Precios justos y claros","o3.li3":"Ejecución rápida y limpia","o3.unit":"/ paquete","offer.from":"desde","offer.cta":"Consultar","offers.note":"Precios de ejemplo — las condiciones reales las definimos juntos.","ps1.h3":"Contacto","ps1.p":"Te conocemos a ti y tu objetivo. Sin compromiso.","ps2.h3":"Propuesta","ps2.p":"Recibes una propuesta clara y a medida.","ps3.h3":"Ejecución","ps3.p":"Ejecutamos — con limpieza y fiabilidad.","ps4.h3":"Resultado","ps4.p":"Quedas satisfecho — y seguimos disponibles.","cta.title":"¿Lista para <span class=\"ital\">unas uñas nuevas?</span>","cta.lead":"Reserva ya tu cita ideal. Te esperamos con muchas ganas.","cta.whatsapp":"Escribir por WhatsApp","cta.email":"Enviar un email","cta.hint":"Los datos de contacto son de ejemplo — aquí irán los reales.","footer.role":"Nagelstudio","footer.claim":"Nail Lounge by Janine Bleckmann","footer.imprint":"Aviso legal","footer.privacy":"Privacidad","tst.label":"Opiniones","tst.title":"Lo que dicen los clientes","tst1.q":"Muy recomendable — rápido, amable y con gran resultado.","tst1.a":"— Cliente satisfecha (ejemplo)","tst2.q":"Te sientes en buenas manos enseguida. ¡Volveré!","tst2.a":"— Cliente habitual (ejemplo)","tst3.q":"Profesional de principio a fin. Recomendado.","tst3.a":"— Cliente nueva (ejemplo)","gal.label":"Galería","gal.title":"Un vistazo","hrs.label":"Horario","hrs.title":"Horario de apertura","hrs.note":"El horario puede variar en festivos.","faq.label":"FAQ","faq.title":"Preguntas frecuentes","faq1.q":"¿Cuánto dura un juego completo de gel?","faq1.a":"Para un juego nuevo completo debes calcular unas dos horas, un poco más si el diseño es elaborado. Un relleno es mucho más rápido. Al reservar te diremos cuánto tiempo prevemos para tu deseo.","faq2.q":"¿Cuánto cuesta?","faq2.a":"Depende del alcance — los precios exactos los vemos en persona.","faq3.q":"¿Estáis disponibles a corto plazo?","faq3.a":"A menudo sí — pregunta y encontramos la manera."}};

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

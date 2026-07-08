/* Camilo Roa — Personal Trainer | interactions + i18n */
(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* JS is running → arm the reveal animation. If this line never runs (JS blocked
     or errored before it), <html> keeps `no-js` and all content stays visible. */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* ---------- translations ---------- */
  const I18N = {"de":{"nav.about":"Über uns","nav.principles":"Werte","nav.training":"Leistungen","nav.contact":"Kontakt","nav.cta":"Kontakt","idx.process":"Ablauf","hero.eyebrow":"Fotografie & Film aus Oldenburg","hero.title":"Momente, die bleiben –<br><span class=\"ital\">ehrlich, nah und lebendig.</span>","hero.lead":"Ob Hochzeit, Porträt oder Ihr Unternehmen: Ich fange die Stimmung ein, die einen Tag ausmacht – mit ruhigem Blick und ohne gestellte Posen.","hero.cta":"Anfrage senden","hero.instagram":"Instagram ansehen","statement.label":"Philosophie","statement.text":"Wir machen <span class=\"ital\">Fotograf</span> mit Anspruch — ehrlich, sorgfältig und auf dich zugeschnitten.","about.h2":"Hinter der Kamera steht <span class=\"ital\">Foto- und Video positiv Sergej Enkelmann.</span>","about.p1":"Seit über zwölf Jahren begleite ich Menschen und Betriebe in und um Oldenburg mit Kamera und Objektiv. Angefangen bei Hochzeiten, heute genauso zu Hause bei Businessporträts, Familien und Reportagen. Was gleich geblieben ist: Ich möchte, dass Sie sich vor der Kamera wohlfühlen.","about.p2":"Ich arbeite mit natürlichem Licht, wenig Inszenierung und viel Geduld. Statt hektischer Serienaufnahmen nehme ich mir Zeit, bis der Moment echt wird. Am Ende bekommen Sie Bilder, die nach Ihnen aussehen – nicht nach einem Katalog.","tag.strength":"Porträt","tag.fatloss":"Hochzeit","tag.nutrition":"Business","tag.mindset":"Reportage","about.langs":"Auf Deutsch · English · Español","stat.years":"Jahre Erfahrung","stat.clients":"begleitete Shootings","stat.languages":"Genres im Fokus","principles.title":"Wofür wir stehen","p1.h3":"Qualität","p1.p":"Wir arbeiten mit Anspruch und liefern Ergebnisse, auf die du dich verlassen kannst.","p2.h3":"Erfahrung","p2.p":"Langjährige Erfahrung und echtes Handwerk — bei uns bist du in guten Händen.","p3.h3":"Persönlich","p3.p":"Kein Fließband: Wir nehmen uns Zeit und gehen auf deine Wünsche ein.","p4.h3":"Zuverlässig","p4.p":"Termintreu, ehrlich und gut erreichbar — auf uns kannst du zählen.","offers.title":"Pakete","services.title":"Was wir fotografieren","o1.tag":"Porträt & Business","o1.h3":"Blickfang","o1.desc":"Das kompakte Shooting für aussagekräftige Porträts – ideal für Bewerbung, LinkedIn oder die eigene Website.","o1.li1":"Ca. 60 Minuten Shooting im Studio oder outdoor","o1.li2":"10 sorgfältig bearbeitete Bilder Ihrer Wahl","o1.li3":"Beratung zu Outfit, Bildlook und Hintergrund","o1.unit":"pro Shooting","o2.tag":"Hochzeit","o2.h3":"Der ganze Tag","o2.desc":"Ihre Hochzeit als ehrliche Reportage – von den Vorbereitungen bis zum Abendausklang, ohne dass Sie mich ständig bemerken.","o2.li1":"Bis zu 10 Stunden Begleitung am Hochzeitstag","o2.li2":"Mindestens 400 bearbeitete Bilder in Online-Galerie","o2.li3":"Persönliches Vorgespräch und Ablaufplanung","o2.li4":"Optional: zweiter Fotograf für doppelte Perspektive","o2.unit":"pro Hochzeit","o3.tag":"Familie & Event","o3.h3":"Zusammen","o3.desc":"Familienshooting oder kleine Feier – lebendige Bilder von den Menschen, die Ihnen wichtig sind.","o3.li1":"Ca. 90 Minuten an Ihrem Wunschort in Oldenburg","o3.li2":"25 bearbeitete Bilder in privater Galerie","o3.li3":"Entspannte Begleitung auch mit Kindern","o3.unit":"pro Shooting","offer.from":"ab","offer.cta":"Anfragen","offers.note":"Alle Preise sind Beispielangaben und hängen von Umfang, Anfahrt und Bearbeitung ab. Ihr genaues Angebot stimmen wir vorab persönlich ab.","ps1.h3":"Anfrage","ps1.p":"Sie schreiben mir kurz Anlass, Datum und Wunschort. Ich melde mich innerhalb eines Tages mit ersten Ideen und einem Beispielpreis.","ps2.h3":"Kennenlernen","ps2.p":"Bei einem Telefonat oder Kaffee klären wir Erwartungen, Look und Ablauf. So gehen wir beide entspannt ins Shooting.","ps3.h3":"Shooting","ps3.p":"Am Tag selbst begleite ich Sie ruhig und aufmerksam. Sie müssen nichts können – ich führe Sie durch die Situationen.","ps4.h3":"Lieferung","ps4.p":"Nach der Bearbeitung erhalten Sie Ihre Bilder in einer privaten Online-Galerie zum Ansehen, Teilen und Herunterladen.","cta.title":"Lassen Sie uns Ihren Moment <span class=\"ital\">festhalten.</span>","cta.lead":"Erzählen Sie mir kurz von Ihrem Anlass – ich melde mich mit einem passenden Vorschlag und einem freien Termin.","cta.whatsapp":"Per WhatsApp schreiben","cta.email":"E-Mail senden","cta.hint":"Kontaktdaten sind Platzhalter — hier kommen die echten Daten rein.","footer.role":"Fotograf","footer.claim":"Foto- und Video positiv Sergej Enkelmann","footer.imprint":"Impressum","footer.privacy":"Datenschutz","tst.label":"Stimmen","tst.title":"Was Kund:innen sagen","tst1.q":"Absolut empfehlenswert — schnell, freundlich und ein top Ergebnis.","tst1.a":"— Zufriedene Kundin (Platzhalter)","tst2.q":"Man fühlt sich sofort gut aufgehoben. Gerne wieder!","tst2.a":"— Stammkunde (Platzhalter)","tst3.q":"Professionell von A bis Z. Klare Empfehlung.","tst3.a":"— Neukundin (Platzhalter)","gal.label":"Galerie","gal.title":"Einblicke","hrs.label":"Zeiten","hrs.title":"Öffnungszeiten","hrs.note":"An Feiertagen können die Zeiten abweichen.","faq.label":"FAQ","faq.title":"Häufige Fragen","faq1.q":"Wie lange dauert es, bis ich meine Bilder bekomme?","faq1.a":"In der Regel erhalten Sie eine erste Vorschau innerhalb weniger Tage und die fertig bearbeitete Galerie nach zwei bis drei Wochen. Bei Hochzeiten kann es je nach Saison etwas länger dauern – den genauen Termin nenne ich Ihnen vorab.","faq2.q":"Was passiert, wenn das Wetter beim Outdoor-Shooting nicht mitspielt?","faq2.a":"Wir behalten die Vorhersage gemeinsam im Blick und verschieben das Shooting bei Bedarf kostenfrei auf einen Ersatztermin. Oft entstehen aber gerade bei bedecktem Himmel besonders weiche, stimmungsvolle Porträts.","faq3.q":"Bekomme ich die Rohdaten (RAW-Dateien)?","faq3.a":"Sie erhalten hochauflösende, fertig bearbeitete Bilder als JPG für Druck und Web. Unbearbeitete RAW-Dateien gebe ich grundsätzlich nicht heraus, da die Bildbearbeitung fester Teil meiner Handschrift ist. Sonderwünsche besprechen wir aber gern."},"en":{"nav.about":"About","nav.principles":"Values","nav.training":"Services","nav.contact":"Contact","nav.cta":"Contact","idx.process":"Process","hero.eyebrow":"Photography & film from Oldenburg","hero.title":"Moments that last –<br><span class=\"ital\">honest, close and alive.</span>","hero.lead":"Whether it's a wedding, a portrait or your business: I capture the mood that defines a day – with a calm eye and no forced poses.","hero.cta":"Send request","hero.instagram":"View Instagram","statement.label":"Philosophy","statement.text":"We do <span class=\"ital\">Fotograf</span> with standards — honest, careful and tailored to you.","about.h2":"Behind the camera stands <span class=\"ital\">Foto- und Video positiv Sergej Enkelmann.</span>","about.p1":"For over twelve years I have accompanied people and businesses in and around Oldenburg with my camera. It started with weddings, and today I feel just as at home with business portraits, families and reportage. What has stayed the same: I want you to feel comfortable in front of the lens.","about.p2":"I work with natural light, little staging and a lot of patience. Instead of rushed burst shots, I take my time until the moment feels real. In the end you get images that look like you – not like a catalogue.","tag.strength":"Quality","tag.fatloss":"Experience","tag.nutrition":"Personal","tag.mindset":"Reliable","about.langs":"In German · English · Spanish","stat.years":"Years of experience","stat.clients":"Happy clients","stat.languages":"Languages","principles.title":"What we stand for","p1.h3":"Quality","p1.p":"We work to a high standard and deliver results you can rely on.","p2.h3":"Experience","p2.p":"Years of experience and real craft — you're in good hands with us.","p3.h3":"Personal","p3.p":"No conveyor belt: we take our time and listen to your wishes.","p4.h3":"Reliable","p4.p":"Punctual, honest and easy to reach — you can count on us.","offers.title":"Packages","services.title":"What we photograph","o1.tag":"Service","o1.h3":"Basic","o1.desc":"A well-thought-out offer, tailored to your needs.","o1.li1":"Personal consultation","o1.li2":"Fair, transparent pricing","o1.li3":"Fast, clean delivery","o1.unit":"/ service","o2.tag":"Popular package","o2.h3":"Popular","o2.desc":"A well-thought-out offer, tailored to your needs.","o2.li1":"Personal consultation","o2.li2":"Fair, transparent pricing","o2.li3":"Fast, clean delivery","o2.li4":"Satisfaction guarantee","o2.unit":"/ month","o3.tag":"Add-on","o3.h3":"Premium","o3.desc":"A well-thought-out offer, tailored to your needs.","o3.li1":"Personal consultation","o3.li2":"Fair, transparent pricing","o3.li3":"Fast, clean delivery","o3.unit":"/ package","offer.from":"from","offer.cta":"Enquire","offers.note":"Placeholder prices — real terms are agreed together.","ps1.h3":"Contact","ps1.p":"We get to know you and your goal. No obligation.","ps2.h3":"Proposal","ps2.p":"You get a clear, tailored proposal.","ps3.h3":"Delivery","ps3.p":"We deliver — cleanly and reliably.","ps4.h3":"Result","ps4.p":"You're happy — and we stay reachable.","cta.title":"Let's capture your <span class=\"ital\">moment.</span>","cta.lead":"Tell me briefly about your occasion – I'll get back to you with a fitting proposal and an available date.","cta.whatsapp":"Message on WhatsApp","cta.email":"Send an email","cta.hint":"Contact details are placeholders — the real ones go here.","footer.role":"Fotograf","footer.claim":"Foto- und Video positiv Sergej Enkelmann","footer.imprint":"Imprint","footer.privacy":"Privacy","tst.label":"Voices","tst.title":"What clients say","tst1.q":"Highly recommended — fast, friendly and a top result.","tst1.a":"— Happy client (placeholder)","tst2.q":"You feel in good hands right away. Would come back!","tst2.a":"— Regular (placeholder)","tst3.q":"Professional from start to finish. Clear recommendation.","tst3.a":"— New client (placeholder)","gal.label":"Gallery","gal.title":"A look inside","hrs.label":"Hours","hrs.title":"Opening hours","hrs.note":"Hours may differ on public holidays.","faq.label":"FAQ","faq.title":"Frequently asked","faq1.q":"How long until I receive my images?","faq1.a":"You will usually get a first preview within a few days and the finished, edited gallery after two to three weeks. For weddings it can take a little longer depending on the season – I'll give you the exact date in advance.","faq2.q":"How much does it cost?","faq2.a":"It depends on the scope — we discuss exact prices in person.","faq3.q":"Are you available on short notice?","faq3.a":"Often yes — just ask and we'll find a way."},"es":{"nav.about":"Nosotros","nav.principles":"Valores","nav.training":"Servicios","nav.contact":"Contacto","nav.cta":"Contacto","idx.process":"Proceso","hero.eyebrow":"Fotografía y vídeo desde Oldenburg","hero.title":"Momentos que perduran –<br><span class=\"ital\">sinceros, cercanos y vivos.</span>","hero.lead":"Ya sea una boda, un retrato o su empresa: capto el ambiente que define un día – con mirada tranquila y sin poses forzadas.","hero.cta":"Enviar solicitud","hero.instagram":"Ver Instagram","statement.label":"Filosofía","statement.text":"Hacemos <span class=\"ital\">Fotograf</span> con exigencia — con honestidad y a tu medida.","about.h2":"Detrás de la cámara está <span class=\"ital\">Foto- und Video positiv Sergej Enkelmann.</span>","about.p1":"Desde hace más de doce años acompaño a personas y empresas en Oldenburg y sus alrededores con mi cámara. Empecé con bodas y hoy me siento igual de cómodo con retratos corporativos, familias y reportajes. Lo que no ha cambiado: quiero que se sienta a gusto ante el objetivo.","about.p2":"Trabajo con luz natural, poca escenificación y mucha paciencia. En lugar de ráfagas apresuradas, me tomo mi tiempo hasta que el momento se vuelve real. Al final recibe imágenes que se parecen a usted – no a un catálogo.","tag.strength":"Calidad","tag.fatloss":"Experiencia","tag.nutrition":"Personal","tag.mindset":"Fiable","about.langs":"En alemán · inglés · español","stat.years":"Años de experiencia","stat.clients":"Clientes satisfechos","stat.languages":"Idiomas","principles.title":"Lo que defendemos","p1.h3":"Calidad","p1.p":"Trabajamos con exigencia y entregamos resultados en los que puedes confiar.","p2.h3":"Experiencia","p2.p":"Años de experiencia y oficio de verdad — estás en buenas manos.","p3.h3":"Personal","p3.p":"Nada de prisas: nos tomamos el tiempo y escuchamos lo que quieres.","p4.h3":"Fiable","p4.p":"Puntuales, honestos y siempre disponibles — puedes contar con nosotros.","offers.title":"Paquetes","services.title":"Qué fotografiamos","o1.tag":"Servicio","o1.h3":"Básico","o1.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o1.li1":"Asesoría personal","o1.li2":"Precios justos y claros","o1.li3":"Ejecución rápida y limpia","o1.unit":"/ servicio","o2.tag":"Paquete popular","o2.h3":"Popular","o2.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o2.li1":"Asesoría personal","o2.li2":"Precios justos y claros","o2.li3":"Ejecución rápida y limpia","o2.li4":"Garantía de satisfacción","o2.unit":"/ mes","o3.tag":"Complemento","o3.h3":"Premium","o3.desc":"Una oferta bien pensada, adaptada a lo que necesitas.","o3.li1":"Asesoría personal","o3.li2":"Precios justos y claros","o3.li3":"Ejecución rápida y limpia","o3.unit":"/ paquete","offer.from":"desde","offer.cta":"Consultar","offers.note":"Precios de ejemplo — las condiciones reales las definimos juntos.","ps1.h3":"Contacto","ps1.p":"Te conocemos a ti y tu objetivo. Sin compromiso.","ps2.h3":"Propuesta","ps2.p":"Recibes una propuesta clara y a medida.","ps3.h3":"Ejecución","ps3.p":"Ejecutamos — con limpieza y fiabilidad.","ps4.h3":"Resultado","ps4.p":"Quedas satisfecho — y seguimos disponibles.","cta.title":"Capturemos su <span class=\"ital\">momento.</span>","cta.lead":"Cuénteme brevemente sobre su ocasión – le responderé con una propuesta adecuada y una fecha disponible.","cta.whatsapp":"Escribir por WhatsApp","cta.email":"Enviar un email","cta.hint":"Los datos de contacto son de ejemplo — aquí irán los reales.","footer.role":"Fotograf","footer.claim":"Foto- und Video positiv Sergej Enkelmann","footer.imprint":"Aviso legal","footer.privacy":"Privacidad","tst.label":"Opiniones","tst.title":"Lo que dicen los clientes","tst1.q":"Muy recomendable — rápido, amable y con gran resultado.","tst1.a":"— Cliente satisfecha (ejemplo)","tst2.q":"Te sientes en buenas manos enseguida. ¡Volveré!","tst2.a":"— Cliente habitual (ejemplo)","tst3.q":"Profesional de principio a fin. Recomendado.","tst3.a":"— Cliente nueva (ejemplo)","gal.label":"Galería","gal.title":"Un vistazo","hrs.label":"Horario","hrs.title":"Horario de apertura","hrs.note":"El horario puede variar en festivos.","faq.label":"FAQ","faq.title":"Preguntas frecuentes","faq1.q":"¿Cuánto tarda en recibir mis imágenes?","faq1.a":"Normalmente recibirá una primera vista previa en pocos días y la galería editada final tras dos o tres semanas. En bodas puede tardar algo más según la temporada – le indico la fecha exacta con antelación.","faq2.q":"¿Cuánto cuesta?","faq2.a":"Depende del alcance — los precios exactos los vemos en persona.","faq3.q":"¿Estáis disponibles a corto plazo?","faq3.a":"A menudo sí — pregunta y encontramos la manera."}};

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

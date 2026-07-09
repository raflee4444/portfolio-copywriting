/* =========================================================================
   CONFIG — edita aquí los datos de contacto y las muestras.
   No hace falta tocar el HTML ni el CSS para actualizar esto.
   ========================================================================= */
const CONFIG = {
  email: "rafael.ahumada@gmail.com",

  // Enlaces opcionales. Déjalos como cadena vacía "" para que no se muestren.
  // LinkedIn NO se incluye a propósito: ese perfil está en modo "en busca de
  // empleo" para puestos de soporte/asistencia, lo que contradice el mensaje
  // freelance de esta web (ver README y MEMORY.md).
  social: {
    linkedin: "",   // ej: "https://www.linkedin.com/in/tu-perfil"
    malt: "",       // ej: "https://www.malt.es/profile/tu-perfil"
    workana: ""     // ej: "https://www.workana.com/freelancer/tu-perfil"
  },

  // Muestras de escritura. Mientras 'ready' sea false, la tarjeta muestra un
  // aviso "Próximamente" y al hacer clic se explica que está en preparación.
  // Cuando publiques la muestra (LinkedIn, Medium, PDF...), pon la URL en
  // 'url' y cambia 'ready' a true: la tarjeta pasará a enlazar directamente.
  samples: [
    {
      tag: "Fitness +50",
      title: "Entrenar pasados los 50 con lesiones",
      teaser: "Lo que funciona de verdad cuando el cuerpo ya no perdona: rutinas, recuperación y los errores que salen caros.",
      url: "",
      ready: false
    },
    {
      tag: "Energía solar",
      title: "Placas solares en Canarias: 7 preguntas antes de firmar",
      teaser: "Dimensionado, salitre, subvenciones y garantías, escrito por alguien que ha instalado placas en Lanzarote con sus propias manos.",
      url: "",
      ready: false
    },
    {
      tag: "Copy web / negocio local",
      title: "El Charco — cocina canaria en Arrecife",
      teaser: "Web completa de un restaurante ficticio: hero, carta, reservas y preguntas frecuentes.",
      url: "",
      ready: false
    }
  ]
};

/* =========================================================================
   Render dinámico
   ========================================================================= */
function renderContactLinks() {
  const mailHref = `mailto:${CONFIG.email}`;
  document.querySelectorAll('[data-role="email-link"]').forEach(el => el.href = mailHref);

  const socialWrap = document.getElementById('socialLinks');
  const labels = { linkedin: 'LinkedIn', malt: 'Malt', workana: 'Workana' };
  Object.entries(CONFIG.social).forEach(([key, url]) => {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = labels[key] || key;
    socialWrap.appendChild(a);
  });
}

function renderSamples() {
  const grid = document.getElementById('samplesGrid');
  grid.innerHTML = '';

  CONFIG.samples.forEach((sample, index) => {
    const isReady = Boolean(sample.ready && sample.url);
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'sample-card reveal';
    el.setAttribute('aria-haspopup', 'dialog');
    el.dataset.sampleIndex = String(index);

    el.innerHTML = `
      ${isReady ? '' : '<span class="sample-badge">Próximamente</span>'}
      <span class="sample-tag">${sample.tag}</span>
      <h3>${sample.title}</h3>
      <p>${sample.teaser}</p>
      <span class="sample-cta">${isReady ? 'Leer muestra completa →' : 'Ver detalle'}</span>
    `;
    el.addEventListener('click', () => openSampleModal(sample, isReady));
    grid.appendChild(el);
  });
}

/* =========================================================================
   Modal de muestras
   ========================================================================= */
function openSampleModal(sample, isReady) {
  const modal = document.getElementById('sampleModal');
  document.getElementById('modalTag').textContent = sample.tag;
  document.getElementById('modalTitle').textContent = sample.title;
  document.getElementById('modalTeaser').textContent = sample.teaser;

  const action = document.getElementById('modalAction');
  action.innerHTML = isReady
    ? `<a class="modal-link" href="${sample.url}" target="_blank" rel="noopener">Leer muestra completa →</a>`
    : `<p class="modal-pending">Esta muestra está en preparación. Vuelve pronto.</p>`;

  modal.hidden = false;
  document.getElementById('modalClose').focus();
  document.body.style.overflow = 'hidden';
}

function closeSampleModal() {
  const modal = document.getElementById('sampleModal');
  modal.hidden = true;
  document.body.style.overflow = '';
}

function initModal() {
  const modal = document.getElementById('sampleModal');
  document.getElementById('modalClose').addEventListener('click', closeSampleModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSampleModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeSampleModal();
  });
}

/* =========================================================================
   Interacción: menú móvil, reveal on scroll
   ========================================================================= */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  renderContactLinks();
  renderSamples();
  initNav();
  initModal();
  initReveal();
  document.getElementById('year').textContent = new Date().getFullYear();
});

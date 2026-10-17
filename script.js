// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

const siteLoader = document.querySelector('.site-loader');
if (siteLoader) {
  const minimumDisplayTime = 500;
  const loaderStartedAt = performance.now();
  const hideLoader = () => {
    const remainingTime = Math.max(0, minimumDisplayTime - (performance.now() - loaderStartedAt));
    window.setTimeout(() => siteLoader.classList.add('is-hidden'), remainingTime);
  };

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, { once: true });
  }
}

// Typed "whoami" effect in the hero terminal.
const line = "prashish-kk — finance student, based in Kathmandu";
const target = document.getElementById('type-target');

function typeLine(text, el, speed = 32) {
  if (!el) return;

  let i = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    el.textContent = text;
    return;
  }

  const tick = () => {
    const visible = text.slice(0, i);
    el.innerHTML = i < text.length ? `${visible}<span class="cursor">_</span>` : visible;
    i++;
    if (i <= text.length) requestAnimationFrame(() => setTimeout(tick, speed));
  };

  tick();
}

typeLine(line, target);

const sectionMenu = document.querySelector('.nav__menu');
if (sectionMenu) {
  sectionMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      sectionMenu.open = false;
    });
  });
}

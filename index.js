document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
  initSmoothScroll();
});

function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  // Duplicate track for seamless infinite loop
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const hash = a.getAttribute('href');
      if (hash === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function downloadResume() {
  window.open(
    'https://drive.google.com/file/d/1H_Va0Icv9RLO0psrz22JMjOZA-_s_ka0/view?usp=sharing',
    '_blank'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTimeWidget();
});

function initNav() {
  const nav = document.querySelector('.topnav');
  if (!nav) return;

  // Sticky scroll style
  const onScroll = () => {
    nav.toggleAttribute('data-scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section tracking via IntersectionObserver
  const links = nav.querySelectorAll('.links a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const match = nav.querySelector(`.links a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const linksList = nav.querySelector('.links');
  if (toggle && linksList) {
    toggle.addEventListener('click', () => {
      linksList.classList.toggle('open');
    });
    linksList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => linksList.classList.remove('open'));
    });
  }
}

function initTimeWidget() {
  const el = document.getElementById('tw-time');
  if (!el) return;

  const update = () => {
    el.textContent = new Date().toLocaleTimeString('en-PK', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  update();
  setInterval(update, 1000);
}

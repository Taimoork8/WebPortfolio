document.addEventListener('DOMContentLoaded', buildProjects);

function buildProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const projects = [
    {
      title: 'Wi3bit Schools Platform',
      image: 'images/projects/wi3bit.webp',
      type: 'Product',
      year: '2025',
      desc: 'Comprehensive school management system with attendance tracking, grading, parent portal, and administrative dashboard. Used across multiple schools in Pakistan.',
      tags: ['Flutter', 'Django', 'PostgreSQL', 'REST API'],
      links: [
        { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.wi3bit.default_app&hl=en' },
        { label: 'Website', url: 'https://wi3bit.com/' }
      ]
    },
    {
      title: 'Sehr',
      image: 'images/projects/sehr.webp',
      type: 'Product',
      year: '2024',
      desc: 'Health & wellness app focused on Suhoor timings, prayer alerts, and daily wellness tracking for Muslim users. Published on Google Play.',
      tags: ['Flutter', 'Firebase', 'Dart'],
      links: [
        { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.sehr.pk' }
      ]
    },
    {
      title: 'Karwan-e-Falah Clinic',
      image: 'images/projects/kf.svg',
      type: 'Product',
      year: '2024',
      desc: 'Clinic management system for Karwan-e-Falah charity. Handles patient records, appointment scheduling, and staff management for a charitable healthcare service.',
      tags: ['Flutter', 'Django', 'REST API', 'PostgreSQL'],
      links: []
    },
    {
      title: 'Girls Diary with Lock',
      image: 'images/projects/diary.webp',
      type: 'Product',
      year: '2023',
      desc: 'Private diary app with biometric and PIN lock, rich text entries, mood tracking, and encrypted local storage. Available on Google Play.',
      tags: ['Flutter', 'SQLite', 'Local Auth'],
      links: [
        { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.irfaanblogger.girlsdiary' }
      ]
    },
    {
      title: 'WallpaperHub',
      image: 'images/projects/WallpaperHub.webp',
      type: 'Open Source',
      year: '2022',
      desc: 'Open-source wallpaper app with HD wallpaper browsing, category filtering, and download functionality.',
      tags: ['Flutter', 'REST API', 'Dart'],
      links: [
        { label: 'GitHub', url: 'https://github.com/Taimoork8/WallpaperHub' }
      ]
    },
    {
      title: 'Spotify Clone',
      image: 'images/projects/spotify.webp',
      type: 'Open Source',
      year: '2022',
      desc: 'Functional Spotify UI clone built with Flutter. Features music playback, playlists, and a pixel-perfect UI replicating the original Spotify experience.',
      tags: ['Flutter', 'Audio', 'Dart'],
      links: [
        { label: 'GitHub', url: 'https://github.com/Taimoork8/spotify-clone' }
      ]
    },
    {
      title: 'COVID-19 Tracker',
      image: 'images/projects/covid.webp',
      type: 'Open Source',
      year: '2021',
      desc: 'Real-time COVID-19 statistics tracker with country-wise data, visual charts, and live API data from public health sources.',
      tags: ['Flutter', 'REST API', 'Charts'],
      links: [
        { label: 'GitHub', url: 'https://github.com/Taimoork8/covid-19' }
      ]
    },
    {
      title: 'Old Seniora Fans',
      image: 'images/projects/fc.webp',
      type: 'Open Source',
      year: '2021',
      desc: 'Fan community app for Seniora fans with live news feed, match updates, and fan discussion features powered by Firebase.',
      tags: ['Flutter', 'Firebase', 'Firestore'],
      links: [
        { label: 'GitHub', url: 'https://github.com/Taimoork8/old-seniora-fan' }
      ]
    }
  ];

  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project';

    const body = document.createElement('div');
    body.className = 'project-body';

    const titleEl = document.createElement('h3');
    titleEl.textContent = p.title;

    const descEl = document.createElement('p');
    descEl.className = 'desc';
    descEl.textContent = p.desc;

    const tagsEl = document.createElement('div');
    tagsEl.className = 'tags';
    p.tags.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = t;
      tagsEl.appendChild(tag);
    });

    body.appendChild(titleEl);
    body.appendChild(descEl);
    body.appendChild(tagsEl);

    card.appendChild(body);
    grid.appendChild(card);
  });
}

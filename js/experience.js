document.addEventListener('DOMContentLoaded', buildExperience);

function buildExperience() {
  const list = document.getElementById('exp-list');
  if (!list) return;

  const jobs = [
    {
      year: '2026 — now',
      title: 'Software Engineer',
      company: 'Noki System',
      summary: 'Building the Noki BLE Support App from scratch in Flutter for seamless Bluetooth Low Energy communication with ESP/STM-based smart cabinet hardware. Developing cross-platform mobile apps for Noki\'s PIE cabinet management system, integrating RESTful APIs with a Django backend for real-time locker control and audit logging. Also contributing embedded firmware for ESP microcontrollers and STM-based hardware, and Django backend APIs for BLE lock history, user management, and cabinet dashboards.',
      tags: ['Flutter', 'Django', 'BLE', 'ESP', 'STM', 'Firmware', 'REST APIs', 'Python']
    },
    {
      year: 'Mar 2025',
      title: 'Full Stack Engineer',
      company: 'Wi3bit',
      summary: 'Architected end-to-end solutions integrating mobile applications with robust backend services. Designed and optimised databases for application performance at scale. Collaborated with stakeholders to translate business requirements into technical specifications. Mentored junior developers in frontend and backend best practices.',
      tags: ['Flutter', 'Django', 'PostgreSQL', 'REST APIs', 'Full Stack']
    },
    {
      year: '2023 — 2025',
      title: 'Lead Mobile Engineer',
      company: 'Wi3bit',
      summary: 'Led mobile development across multiple production Flutter apps. Integrated RESTful APIs to enhance functionality and support business logic. Led code reviews enforcing MVVM architecture and coding standards. Collaborated cross-functionally to define scope and deliver on time. Optimised apps for scalability and user experience.',
      tags: ['Flutter', 'Dart', 'MVVM', 'Firebase', 'Team Lead', 'REST APIs']
    },
    {
      year: '2023',
      title: 'Contract Flutter Developer',
      company: 'SDH',
      summary: 'Built, designed, and deployed mobile applications that increased company revenue by 25% and generated over 10,000 downloads. Modernised legacy systems with Flutter/Dart, improving performance and scalability. Coordinated end-to-end project execution — requirements, development, testing, release. Improved user satisfaction by 15% through usability testing and customer feedback.',
      tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    },
    {
      year: '2022 — 2023',
      title: 'Flutter Developer Intern',
      company: 'Softech Square Solution',
      summary: 'Contributed clean, efficient code across multiple projects adhering to best practices in software design. Gained hands-on experience across the full mobile app development lifecycle, enhancing debugging and optimisation skills.',
      tags: ['Flutter', 'Dart', 'Git', 'Firebase']
    },
    {
      year: '2022 — now',
      title: 'Flutter Developer',
      company: 'Freelance · Remote',
      summary: 'Developed and launched various mobile applications for clients, collectively achieving over 1,000 downloads. Delivered user-focused apps with high-quality code and optimised interfaces. Established strong client relationships through consistent updates and on-time delivery.',
      tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    }
  ];

  jobs.forEach(job => {
    const row = document.createElement('div');
    row.className = 'exp-row';

    const yearEl = document.createElement('div');
    yearEl.className = 'exp-year';
    yearEl.textContent = job.year;

    const roleEl = document.createElement('div');
    roleEl.className = 'exp-role';

    const titleEl = document.createElement('div');
    titleEl.className = 'exp-title';
    titleEl.textContent = job.title;

    const companyEl = document.createElement('div');
    companyEl.className = 'exp-company';
    companyEl.textContent = job.company;

    const tagsEl = document.createElement('div');
    tagsEl.className = 'exp-tags';
    job.tags.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'exp-tag';
      tag.textContent = t;
      tagsEl.appendChild(tag);
    });

    roleEl.appendChild(titleEl);
    roleEl.appendChild(companyEl);
    roleEl.appendChild(tagsEl);

    const summaryEl = document.createElement('div');
    summaryEl.className = 'exp-summary';
    summaryEl.textContent = job.summary;

    row.appendChild(yearEl);
    row.appendChild(roleEl);
    row.appendChild(summaryEl);

    list.appendChild(row);
  });
}

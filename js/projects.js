// Lista de projetos
const projects = [
  {
    title: "YoutuberConvert",
    description: "Aplicativo para baixar vídeos do YouTube com interface gráfica.",
    image: "img/youtuberconvert.png",
    images: ["img/youtuberconvert.png"],
    github: "https://github.com/sempai23w/YoutubeConvert",
    featured: true,
    details: "Este projeto foi desenvolvido em Python utilizando Tkinter para a interface gráfica e Pytube para o download de vídeos do YouTube. Inclui um ícone personalizado e segue uma estrutura modular com arquivos como main.py, gui.py e downloader.py. As dependências são gerenciadas com um arquivo requirements.txt.",
    tech: ["Python", "Tkinter", "Pytube"],
    private: true
  },
  {
    title: "WorkTime Control",
    description: "Sistema para controle de tempo de trabalho com backend e frontend integrados.",
    image: "img/dashboardworktime.png",
    images: [
      "img/dashboardworktime.png",
      "img/loginworktime.png",
      "img/paineladmworktime.png",
      "img/registerworktime.png"
    ],
    github: "https://github.com/sempai23w/WorkTime-Control",
    featured: true,
    details: "Este projeto foi desenvolvido utilizando JavaScript tanto no backend quanto no frontend. O backend utiliza Node.js e Express.js para criar APIs, enquanto o frontend é estruturado com HTML e estilizado com CSS. O banco de dados SQLite é usado para armazenar informações, indicado pelo arquivo database.db. As dependências são gerenciadas com npm, conforme indicado pelo arquivo package.json.",
    tech: ["JavaScript", "Node.js", "SQLite", "HTML", "CSS"],
    private: true
  }
];

// Torna o array de projetos acessível globalmente para outras páginas
window.projects = projects;

function openProjectModal(index) {
  const project = projects[index];
  let imagesHtml = '';
  if (project.images && project.images.length > 1) {
    imagesHtml = `
      <div id="projectCarousel${index}" class="carousel slide mb-3" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${project.images.map((img, idx) => `
            <div class="carousel-item${idx === 0 ? ' active' : ''}">
              <img src="${img}" class="d-block w-100 rounded" style="max-height:260px;object-fit:contain;background:#fff;" alt="${project.title} ${idx + 1}">
            </div>
          `).join('')}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel${index}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel${index}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
    `;
  } else {
    imagesHtml = `<img src="${project.image}" class="img-fluid rounded mb-3" alt="${project.title}">`;
  }
  const modalHtml = `
    <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectModalLabel">${project.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            ${imagesHtml}
            <p>${project.details}</p>
            <p><strong>Descrição curta:</strong> ${project.description}</p>
            <div class="d-flex flex-wrap gap-2 mb-3">
              ${(project.tech || []).map(t => `<span class='badge bg-primary'>${t}</span>`).join(' ')}
            </div>
            <a href="#" class="btn btn-outline-dark me-2 github-btn" data-index="${index}" target="_blank"><i class="fa-brands fa-github"></i> Ver no GitHub</a>
            <a href="/pages/project-images.html?project=${encodeURIComponent(project.title)}" class="btn btn-dark ms-2">Abrir imagens</a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  // Adiciona toast customizado se não existir
  if (!document.getElementById('privateRepoToast')) {
    const toastHtml = `
      <div id="privateRepoToast" class="toast align-items-center text-bg-danger border-0 position-fixed bottom-0 end-0 m-4" role="alert" aria-live="assertive" aria-atomic="true" style="z-index: 9999; min-width: 280px;">
        <div class="d-flex">
          <div class="toast-body">
            <i class="fa-solid fa-lock me-2"></i>
            Este repositório é <b>privado</b> e não pode ser acessado publicamente.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Fechar"></button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toastHtml);
  }
  // Lógica para botão do GitHub privado
  document.querySelector('.github-btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (project.private) {
      const toastEl = document.getElementById('privateRepoToast');
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    } else {
      window.open(project.github, '_blank');
    }
  });
  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  modal.show();
  document.getElementById('projectModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('projectModal').remove();
  });
}

function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects');
  if (!container) return;
  container.innerHTML = projects.filter(p => p.featured).map((project, i) => `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm border-0 project-card animate__animated animate__fadeInUp">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title} <i class="fa-brands fa-github"></i></h5>
          <p class="card-text">${project.description}</p>
          <button class="btn btn-outline-primary btn-sm" onclick="openProjectModal(${projects.indexOf(project)})">Ver mais <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

// Para uso futuro: renderizar todos os projetos na página de projetos
function renderAllProjects() {
  const container = document.getElementById('all-projects');
  if (!container) return;
  container.innerHTML = projects.map((project, i) => `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm border-0 project-card animate__animated animate__fadeInUp" data-aos="fade-up">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title} <i class="fa-brands fa-github"></i></h5>
          <p class="card-text">${project.description}</p>
          <button class="btn btn-outline-primary btn-sm" onclick="openProjectModal(${i})">Ver mais <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterAndRenderProjects() {
  const search = document.getElementById('searchProjectInput')?.value.toLowerCase() || '';
  const tech = document.getElementById('filterTechSelect')?.value || '';
  const container = document.getElementById('all-projects');
  if (!container) return;
  let filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search)
    && (tech === '' || (p.tech && p.tech.includes(tech)))
  );
  if (filtered.length === 0) {
    container.innerHTML = '<div class="col-12 text-center text-muted">Nenhum projeto encontrado.</div>';
    return;
  }
  container.innerHTML = filtered.map((project, i) => `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm border-0 project-card animate__animated animate__fadeInUp" data-aos="fade-up">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title} <i class="fa-brands fa-github"></i></h5>
          <p class="card-text">${project.description}</p>
          <button class="btn btn-outline-primary btn-sm" onclick="openProjectModal(${projects.indexOf(project)})">Ver mais <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

// Eventos para pesquisa e filtro
if (document.getElementById('searchProjectInput')) {
  document.getElementById('searchProjectInput').addEventListener('input', filterAndRenderProjects);
}
if (document.getElementById('filterTechSelect')) {
  document.getElementById('filterTechSelect').addEventListener('change', filterAndRenderProjects);
}

// Inicialização automática na home
renderFeaturedProjects();

// Renderização automática na página de projetos
if (document.getElementById('all-projects')) {
  filterAndRenderProjects();
}

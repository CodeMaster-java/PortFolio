// Lista de projetos (exemplo)
const projects = [
  {
    title: "Projeto Exemplo",
    description: "Breve descrição do projeto, tecnologias utilizadas e principais desafios.",
    image: "img/exemplo.jpg",
    github: "#",
    featured: true,
    details: "Este projeto foi desenvolvido para demonstrar boas práticas de backend e integração com APIs. Utiliza Node.js, Express e banco de dados SQL.",
    tech: ["Node.js", "JavaScript", "SQL"]
  },
  {
    title: "Landing Page Responsiva",
    description: "Landing page moderna feita com Bootstrap 5 e animações.",
    image: "img/landing.jpg",
    github: "#",
    featured: true,
    details: "Projeto de front-end responsivo, com foco em UI/UX, usando Bootstrap, HTML5 e CSS3.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Dashboard de Vendas",
    description: "Dashboard interativo com gráficos em JS e layout responsivo.",
    image: "img/dashboard.jpg",
    github: "#",
    featured: false,
    details: "Dashboard completo com gráficos dinâmicos, integração com API de vendas e exportação de relatórios.",
    tech: ["JavaScript", "React"]
  }
];

function openProjectModal(index) {
  const project = projects[index];
  // Adiciona botão para página de detalhes
  const modalHtml = `
    <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectModalLabel">${project.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <img src="${project.image}" class="img-fluid rounded mb-3" alt="${project.title}">
            <p>${project.details}</p>
            <p><strong>Descrição curta:</strong> ${project.description}</p>
            <div class="d-flex flex-wrap gap-2 mb-3">
              ${(project.tech||[]).map(t => `<span class='badge bg-primary'>${t}</span>`).join(' ')}
            </div>
            <a href="${project.github}" class="btn btn-outline-dark me-2" target="_blank"><i class="fa-brands fa-github"></i> Ver no GitHub</a>
            <a href="pages/project-details.html?project=${encodeURIComponent(project.title)}" class="btn btn-primary">Página de Detalhes</a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
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

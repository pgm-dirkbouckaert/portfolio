import { navItems, projects } from './data.js';

(() => {
  const app = {
    init() {
      const pathArr = window.location.pathname.split('/');
      this.path = pathArr[pathArr.length - 1];
      this.cacheElements();
      this.buildNav();
      this.buildProjects();
      this.listenForShowProjectDetails();
      this.listenForCloseModal();
    },
    cacheElements() {
      this.$modal = document.getElementById('modal');
      this.$btnCloseModal = document.getElementById('btn-close-modal');
      this.$modalBody = document.getElementById('modal-body');
      this.$navbar = document.getElementById('navbar');
      this.$projects = document.getElementById('projects');
    },
    /**
     * NAVBAR
     */
    buildNav() {
      this.$navbar.innerHTML = this.renderNav(navItems, this.path);
    },
    renderNav(navItems, path) {
      return navItems
        .map((item) => {
          return `
          <li>
            <a  href="${item.href}" 
                class="${path === item.href ? 'active' : ''}">
                ${item.text}
            </a>
          </li>`;
        })
        .join('');
    },
    /**
     * PROJECTS
     */
    buildProjects() {
      if (this.path === 'projects.html') {
        const categories = [...new Set(projects.map((p) => p.category))];
        this.$projects.innerHTML = this.renderProjects(categories);
      }
    },
    renderProjects(categories) {
      return categories
        .map((category) => {
          const filteredProjects = projects.filter(
            (p) => p.category === category
          );
          return `
            <h2 class="category">${category}</h2>
            <ul class="project-list">
              ${filteredProjects
                .map((project) => {
                  return `
                  <li class="project-card">
                    <div class="tooltip">${project.summary}</div>
                    <a href="" data-project-id="${project.id}">
                      <img src="images/${project.image}" alt="logo" />
                      <h5>${project.title.replace('NT2', 'NT2<br>')}</h5>
                    </a>
                  </li>`;
                })
                .join('')}
            </ul>
          `;
        })
        .join('');
    },
    /**
     * PROJECT DETAILS
     */
    listenForShowProjectDetails() {
      const links = document.querySelectorAll('.project-card a');
      for (const link of links) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const projectId = parseInt(e.currentTarget.dataset.projectId, 10);
          const project = projects.find((p) => p.id === projectId);
          if (!project) {
            return this.showModal({
              type: 'error',
              message: 'Project niet gevonden.',
            });
          }
          this.showModal({
            type: 'info',
            message: this.renderProjectDetails(project),
          });
        });
      }
    },
    renderProjectDetails(project) {
      return `
        <h3>${project.title}</h3>
        <div class="text-muted">Categorie: ${project.category}</div>
        <div class="project-summary">${project.summary}</div>
        <div class="project-details">
          <ul>
            ${project.details
              .split('|')
              .map((item) => `<li>${item.trim()}</li>`)
              .join('')}
          </ul>  
        </div>
        <div class="project-link">
          <a href="${
            project.link
          }" target="_blank" title="Open in een nieuw venster">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      `;
    },
    /**
     * MODAL
     */
    showModal(options) {
      this.$modalBody.innerHTML = options.message;
      this.$modal.classList.add(options.type);
      this.$modal.classList.remove('hidden');
    },
    listenForCloseModal() {
      if (this.$modal) {
        this.$btnCloseModal.addEventListener('click', (e) => {
          this.$modal.setAttribute('class', 'modal hidden');
        });
      }
    },
  };
  app.init();
})();

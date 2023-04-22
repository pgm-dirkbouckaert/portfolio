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
          this.listenForShowPreviousProject();
          this.listenForShowNextProject();
        });
      }
    },
    renderProjectDetails(project) {
      return `
        <h3 class="project-title">
          <a href="${project.url}" target="_blank">
            ${project.title}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </h3>
        <div class="project-category">Categorie: ${project.category}</div>
        <div class="project-summary">${project.summary}</div>
        <div class="project-details">
          <ul>
            ${project.details
              .split('|')
              .map((item) => `<li>${item.trim()}</li>`)
              .join('')}
            <li><a href="${
              project.url
            }" target="_blank">Bekijk het project</a></li>
          </ul>  
        </div>
        ${this.renderProjectDetailsNav(
          projects.findIndex((p) => p.id === project.id)
        )}
      `;
    },
    renderProjectDetailsNav(currentIndex) {
      return `
        <div class="project-footer-nav">
          ${
            currentIndex !== 0
              ? `<i class="fa-solid fa-angles-left btn-previous" id="btn-previous"
                    data-previous-index="${currentIndex - 1}"></i>`
              : '<i>&nbsp;</i>'
          }
          ${
            currentIndex !== projects.length - 1
              ? `<i class="fa-solid fa-angles-right btn-next" id="btn-next"
                    data-next-index="${currentIndex + 1}"></i>`
              : '<i>&nbsp;</i>'
          }
        </div>
      `;
    },
    listenForShowPreviousProject() {
      const button = document.getElementById('btn-previous');
      if (button) {
        button.addEventListener('click', (e) => {
          const newIndex = parseInt(e.currentTarget.dataset.previousIndex, 10);
          const newProject = projects[newIndex];
          this.showModal({
            type: 'info',
            message: this.renderProjectDetails(newProject),
          });
          this.listenForShowPreviousProject();
          this.listenForShowNextProject();
        });
      }
    },
    listenForShowNextProject() {
      const button = document.getElementById('btn-next');
      if (button) {
        button.addEventListener('click', (e) => {
          const newIndex = parseInt(e.currentTarget.dataset.nextIndex, 10);
          const newProject = projects[newIndex];
          this.showModal({
            type: 'info',
            message: this.renderProjectDetails(newProject),
          });
          this.listenForShowPreviousProject();
          this.listenForShowNextProject();
        });
      }
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

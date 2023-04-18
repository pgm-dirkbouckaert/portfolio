import { navItems, projects } from './data.js';

(() => {
  const app = {
    init() {
      const pathArr = window.location.pathname.split('/');
      this.path = pathArr[pathArr.length - 1];
      this.cacheElements();
      this.buildNav();
      this.buildProjects();
    },
    cacheElements() {
      this.$pageInfo = document.getElementById('page-info');
      this.$navList = document.getElementById('nav-list');
      this.$projects = document.getElementById('projects');
    },
    buildNav() {
      this.$navList.innerHTML = this.renderNav(navItems, this.path);
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
    buildProjects() {
      if (this.path === 'projects.html') {
        const categories = [...new Set(projects.map((p) => p.category))];
        console.log('categories:', categories);
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
                    <a href="" data-id="${project.id}">
                      <img src="images/${project.image}" alt="logo" />
                      <h5>${project.title}</h5>
                    </a>
                  </li>`;
                })
                .join('')}
            </ul>
          `;
        })
        .join('');
    },
  };
  app.init();
})();

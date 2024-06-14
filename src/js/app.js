import {
  navItems,
  info,
  projects,
  contactFormInputs,
  contacFormLabels,
  contactFormMessages,
} from './data.js';

(() => {
  const app = {
    init() {
      const pathArr = window.location.pathname.split('/');
      this.path = pathArr[pathArr.length - 1];
      if (this.path == '') this.path = 'index.html';
      this.ajaxBasePath = '';
      // this.ajaxBasePath = '/src';
      this.host = 'github';
      this.language = null;
      this.cacheElements();
      this.getLanguage();
      this.buildNav();
      this.buildInfo();
      this.buildProjects();
      this.buildContactForm();
      this.listenForChangeLanguage();
      this.listenForCloseModal();
      this.listenForFormSubmit();
    },
    cacheElements() {
      this.$body = document.body;
      this.$modal = document.getElementById('modal');
      this.$btnCloseModal = document.getElementById('btn-close-modal');
      this.$modalBody = document.getElementById('modal-body');
      this.$chooseLanguage = document.getElementById('choose-language');
      this.$navbar = document.getElementById('navbar');
      this.$info = document.getElementById('info');
      this.$projects = document.getElementById('projects');
      this.$form = document.getElementById('form');
      this.$formSimulationMessage = document.getElementById('simulation');
    },
    /**
     * GET LANGUAGE
     */
    getLanguage() {
      this.language = localStorage.getItem('language');
      if (this.language) this.$chooseLanguage.value = this.language;
      else {
        this.language = this.$chooseLanguage.value;
        localStorage.setItem('language', this.language);
      }
    },
    listenForChangeLanguage() {
      this.$chooseLanguage.addEventListener('change', (e) => {
        e.preventDefault();
        const newLang = e.currentTarget.value;
        localStorage.setItem('language', newLang);
        this.language = newLang;
        if (this.path === 'index.html') {
          this.buildInfo();
          this.buildProjects();
        } else if (this.path === 'contact.html') {
          this.buildContactForm();
        }
      });
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
     * INFO
     */
    buildInfo() {
      if (this.path === 'index.html') {
        this.$info.innerHTML = info[this.language];
      }
    },
    /**
     * PROJECTS
     */
    buildProjects() {
      if (this.path === 'index.html') {
        const categories = [...new Set(projects.map((p) => p[this.language].category))];
        this.$projects.innerHTML = this.renderProjects(categories);
        this.listenForShowProjectDetails();
      }
    },
    renderProjects(categories) {
      return categories
        .map((category) => {
          const filteredProjects = projects.filter(
            (p) => p[this.language].category === category
          );
          return `
            <h2 class="category">${category}</h2>
            <ul class="project-list">
              ${filteredProjects
                .map((project) => {
                  return `
                  <li class="project-card">
                    <a href="" data-project-id="${project.id}">
                      <img src="images/${project.image}" alt="logo" />
                      <h5>${project[this.language].title.replace('NT2', 'NT2<br>')}</h5>
                    </a>
                    <div class="tooltip">${project[this.language].summary}</div>
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
          const projectId = e.currentTarget.dataset.projectId;
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
        ${
          project.url
            ? `<a href="${project.url}" target="_blank">
              ${project[this.language].title}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
             </a>`
            : `${project[this.language].title}`
        }
        </h3>
        <div class="project-category-icons">${project[this.language].categoryIcons
          .map((icon) => {
            return `<img src="images/techs/${icon}" alt="tech icon" />`;
          })
          .join('')}
        </div>
        <div class="project-summary"><h5>${project[this.language].summary}</h5></div>
        <div class="project-details">
          <ul>
          ${project[this.language].details
            .split('|')
            .map((item) => `<li>${item.trim()}</li>`)
            .join('')}
          ${
            project.url
              ? `<li>
                <a href="${project.url}" target="_blank">${
                  project[this.language].linkText
                }
                </a>
              </li>`
              : ''
          }
          </ul>  
        </div>
        ${this.renderProjectDetailsNav(projects.findIndex((p) => p.id === project.id))}
      `;
    },
    renderProjectDetailsNav(currentIndex) {
      return `
        <div class="project-footer-nav">
          ${
            currentIndex !== 0
              ? `<button  id="btn-previous" class="btn-previous" 
                          data-previous-index="${currentIndex - 1}">
                  <i class="fa-solid fa-angles-left"></i></i>
                 </button>`
              : '<i>&nbsp;</i>'
          }
          ${
            currentIndex !== projects.length - 1
              ? `<button  id="btn-next" class="btn-next" 
                          data-next-index="${currentIndex + 1}">
                  <i class="fa-solid fa-angles-right"></i>
                 </button>`
              : '<i>&nbsp;</i>'
          }
        </div>
      `;
    },
    listenForShowPreviousProject() {
      const button = document.getElementById('btn-previous');
      if (button) {
        button.addEventListener('click', (e) => {
          const newIndex = e.currentTarget.dataset.previousIndex;
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
          const newIndex = e.currentTarget.dataset.nextIndex;
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
     * CONTACT FORM
     */
    buildContactForm() {
      if (this.path === 'contact.html') {
        this.$formSimulationMessage.innerHTML = this.renderSimulationMessage();
        this.$form.innerHTML = this.renderContactForm(contactFormInputs);
      }
    },
    renderSimulationMessage() {
      return `<p>${contactFormMessages.simulation[this.language]}</p>`;
    },
    renderContactForm(inputs) {
      return inputs
        .map((input) => {
          switch (input.type) {
            case 'text':
            case 'email':
              return `
                <div class="form-item ${input.name}">
                  <label for="${input.name}"> 
                    ${contacFormLabels[input.name][this.language]} 
                    ${input.required ? `<span class="form-item-required">*</span>` : ''} 
                  </label>
                  <input type="${input.type}" name="${input.name}" id="${input.name}" 
                        ${input.required ? 'required' : ''} />
                </div>`;
            case 'textarea':
              return `
                <div class="form-item ${input.name}">
                  <label for="${input.name}">
                    ${contacFormLabels[input.name][this.language]} 
                    ${input.required ? `<span class="form-item-required">*</span>` : ''} 
                  </label>
                  <textarea name="${input.name}" id="${input.name}" 
                    cols="30" rows="7" 
                    ${input.required ? 'required' : ''}></textarea>
                </div>`;
            case 'submit':
              return `
                <button type="submit" class="form-btn-submit">
                  ${contacFormLabels[input.name][this.language]}
                </button>`;
          }
        })
        .join('');
    },
    listenForFormSubmit() {
      if (this.$form) {
        this.$form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const formData = new FormData(this.$form);
          // When hosted on GitHub pages: simulate response
          if (this.host && this.host === 'github') {
            return (this.$form.innerHTML = contactFormMessages.success[this.language]);
          }
          // Send email
          try {
            const res = await fetch(`${this.ajaxBasePath}/ajax/contact.php`, {
              method: 'POST',
              mode: 'cors',
              headers: {
                // 'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: formData,
            });
            const json = await res.json();
            // console.log('json:', json);
            // Handle form errors
            if (json.errors) {
              this.showModal({
                type: 'error',
                message: this.renderFormErrors(json.errors),
              });
              return;
            }
            // On success
            if (json.status && (json.status === 200 || json.status === 202)) {
              this.$form.innerHTML = contactFormMessages.success[this.language];
            }
          } catch (error) {
            console.error(error);
            this.showModal({
              type: 'error',
              message: contactFormMessages.error[this.language],
            });
          }
        });
      }
    },
    renderFormErrors(errors) {
      return `
        <ul>
          ${errors
            .map((error) => {
              return `<li>${error}</li>`;
            })
            .join('')}
        </ul>
      `;
    },
    /**
     * MODAL
     */
    showModal(options) {
      this.$modalBody.innerHTML = options.message;
      this.$modal.classList.add(options.type);
      this.$modal.classList.remove('hidden');
      this.$body.classList.add('modal-active');
    },
    listenForCloseModal() {
      if (this.$modal) {
        this.$btnCloseModal.addEventListener('click', this.closeModal.bind(this));
        window.addEventListener('keydown', this.closeModalWithEsc.bind(this));
      }
    },
    closeModal() {
      this.$modal.setAttribute('class', 'modal hidden');
      this.$modalBody.innerHTML = '';
      this.$body.classList.remove('modal-active');
      this.$btnCloseModal.removeEventListener('click', this.closeModal);
      window.removeEventListener('keydown', this.closeModalWithEsc);
    },
    closeModalWithEsc(e) {
      if (e.key.toLowerCase() === 'escape') {
        this.closeModal();
        this.$btnCloseModal.removeEventListener(
          'click',
          this.closeModal.bind(this),
          false
        );
        window.removeEventListener('keydown', this.closeModalWithEsc.bind(this), false);
      }
    },
  };
  app.init();
})();

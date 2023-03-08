const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobile_menu_container');
const close = document.querySelector('.close');
const backdrop = document.querySelector('#backdrop');

function showMenu() {
  mobileMenu.classList.remove('hide');
}
function closeMenu() {
  mobileMenu.classList.add('hide');
}

hamburger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);

// lets make popup daynamically,

// object,

const works = document.querySelector('.cards-whole');

const projects = [
  {
    id: 1,
    fullName: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',

    liveLink: 'https://bilalrajput09.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/bilalrajput09',
    technologies: ['HTML', 'CSS', 'Ruby On Rails'],
  },
  {
    id: 2,
    fullName: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc..',

    liveLink: 'https://bilalrajput09.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/bilalrajput09',
    technologies: ['HTML', 'CSS', 'Ruby On Rails'],
  },
  {
    id: 3,
    fullName: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',

    liveLink: 'https://bilalrajput09.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/bilalrajput09',
    technologies: ['HTML', 'CSS', 'Ruby On Rails'],
  },
  {
    id: 4,
    fullName: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',

    liveLink: 'https://bilalrajput09.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/bilalrajput09',
    technologies: ['HTML', 'CSS', 'Ruby On Rails'],
  },
  {
    id: 5,
    fullName: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',

    liveLink: 'https://bilalrajput09.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/bilalrajput09',
    technologies: ['HTML', 'CSS', 'Ruby On Rails'],
  },
  {
    id: 6,
    fullName: 'Project 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',

    liveLink: 'https://bilalrajput09.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/bilalrajput09',
    technologies: ['HTML', 'CSS', 'Ruby On Rails'],
  },
];

function createProjectCards(projects) {
  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('cards');
    projectCard.innerHTML = `
              <div class="cards">
            <h2 class="data">
              ${project.fullName}
            </h2>
            <p class="para">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard.
              And this si what has not been done daily.
              has been the industry's standard.
              And this si what has not been done daily.
            </p>
            <ul class="languages-2">
              ${project.technologies.map((tech) => `<li class "card-tag" >${tech}</li>`).join('')}
            </ul>
            <a href="#" class="cards-project" data-target = "modal-${project.id}" onclick = "showModal(this)">See Project</a>
          </div>
          `;
    works.appendChild(projectCard);
  });
}

function createModals(projects) {
  projects.forEach((project) => {
    const modal = document.createElement('div');
    modal.classList.add('main_popup_container');
    modal.classList.add('modal-hidden');
    modal.id = `modal-${project.id}`;
    modal.innerHTML = `
    <div class="popup_heading_container">

    <h2 class="main_popup_heading">${project.fullName}</h2>

    <div>
    
    <img class="close_popup"
    onclick = "closeModal('modal-${project.id}')"
    src="./img/cross.png" ">
    
    </div>

    </div>

    <ul class="popup_language_box">
    
    ${project.technologies.map((tech) => `<li class = "language_box_item" >${tech}</li>`).join('')}

    </ul>
    <div class="popup_grid_container">
    
    <img src="./img/popup-img-desktop.png" class="popup_img">


      <p class="popup_para">${project.description}</p>


      <div class="popup_button_main_container">


        <div class="popup_buttons_container">
        
        <a class="popup_buttons" href = "${project.liveLink}">See Live</a>
        
        <span
            class="popup_icons">

            <img src="./img/see-live.png">
            
        </span>

        </div>
        <div class="popup_buttons_container">
        
        <a class="popup_buttons" href = "${project.linkToSource}">See Source</a>

        <span class="popup_icons">

        <img src="./img/github-white-popup.png">

        </span>
        </div>
      </div>
    </div>
    `;
    document.body.appendChild(modal);
  });
}

// eslint-disable-next-line no-unused-vars
function showModal(btn) {
  const modal = document.getElementById(btn.dataset.target);
  modal.classList.remove('modal-hidden');
  backdrop.classList.remove('backdrop-hidden');
}

// eslint-disable-next-line no-unused-vars
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('modal-hidden');
  backdrop.classList.add('backdrop-hidden');
}

createModals(projects);
createProjectCards(projects);

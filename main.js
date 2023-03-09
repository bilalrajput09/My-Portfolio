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
            <a href="#" class="cards-project open-popup-btn" data-target = "modal-${project.id}" id="card-${project.id}">See Project</a>
          </div>
          `;
    works.appendChild(projectCard);
  });
}

const firstProjects = [
  {
    name: 'Multi Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.verita.",
    technologies: ['HTML', 'CSS', 'Ruby On Rails'],
  },
];

const mainTagContainer = document.querySelector('.main-container');
const firstProjectBtn = document.createElement('a');
firstProjectBtn.innerHTML = 'See Project';
firstProjectBtn.classList.add('project1');
firstProjectBtn.href = '#';
const multistoriesContainer = document.createElement('div');
multistoriesContainer.classList.add('multistories');

function createFirstProject() {
  firstProjects.forEach((firstProject) => {
    const recentWork = document.createElement('div');
    recentWork.classList.add('recent-work');
    multistoriesContainer.innerHTML = `<h2>${firstProject.name}</h2>
          <p>
            ${firstProject.description}
          </p>
          <ul class="languages-1">
            <li class="html">Html</li>
            <li class="css">Css</li>
            <li class="javascript">Javascript</li>
          </ul>`;
    recentWork.innerHTML = `<div class="placeholder-multistories">
          <img src="./img/placeholder.png" class="placeholder" alt="placeholder-1" />
        </div>`;
    multistoriesContainer.appendChild(firstProjectBtn);
    recentWork.appendChild(multistoriesContainer);
    mainTagContainer.appendChild(recentWork);
  });
}

const firstProjectContainer = document.createElement('div');
firstProjectBtn.addEventListener('click', () => {
  firstProjectContainer.style.display = 'block';
  firstProjectContainer.innerHTML = `<div class="main_popup_container" id="modal-3">
    <div class="popup_heading_container">

    <h2 class="main_popup_heading">Multi Post Stories</h2>

    <div>
    
    <img class="close_first" src="./img/cross.png" id="popup-closeImg">
    
    </div>

    </div>

    <ul class="popup_language_box">
    
    <li class="language_box_item">HTML</li><li class="language_box_item">CSS</li><li class="language_box_item">Ruby On Rails</li>

    </ul>
    <div class="popup_grid_container">
    
    <img src="./img/popup-img-desktop.png" class="popup_img">


      <p class="popup_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>


      <div class="popup_button_main_container">


        <div class="popup_buttons_container">
        
        <a class="popup_buttons" href="https://bilalrajput09.github.io/My-Portfolio/">See Live</a>
        
        <span class="popup_icons">

            <img src="./img/see-live.png">
            
        </span>

        </div>
        <div class="popup_buttons_container">
        
        <a class="popup_buttons" href="https://github.com/bilalrajput09">See Source</a>

        <span class="popup_icons">

        <img src="./img/github-white-popup.png">

        </span>
        </div>
      </div>
    </div>
    </div>`;
  document.body.appendChild(firstProjectContainer);
  const popupCloseImg = document.getElementById('popup-closeImg');
  popupCloseImg.addEventListener('click', () => {
    backdrop.classList.add('backdrop-hidden');
    firstProjectContainer.style.display = 'none';
  });
  backdrop.classList.remove('backdrop-hidden');
});

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
    
    <img class="close_popup close_popup_x"
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

function getbtns() {
  const btns = document.getElementsByClassName('open-popup-btn');
  Array.from(btns).forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(`modal-${index + 1}`);
      modal.classList.remove('modal-hidden');
      backdrop.classList.remove('backdrop-hidden');
    });
  });
}

function getclosebtns() {
  const closebtns = document.getElementsByClassName('close_popup_x');
  Array.from(closebtns).forEach((closebtn, index) => {
    closebtn.addEventListener('click', () => {
      const modal = document.getElementById(`modal-${index + 1}`);
      modal.classList.add('modal-hidden');
      backdrop.classList.add('backdrop-hidden');
    });
  });
}

createFirstProject();
createModals(projects);
createProjectCards(projects);
getclosebtns();
getbtns();
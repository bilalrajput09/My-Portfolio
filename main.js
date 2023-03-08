const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobile_menu_container');
const close = document.querySelector('.close');

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

const projects = [
  {
    fullName: 'Multi',
    technologiesOne: 'html',
    technologiesTwo: 'Bootstrap',
    technologiesThree: 'Ruby on rails',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    linkToLive: 'See Live',
    linkToSource: 'See Source',
  },
  {
    fullName: ' Post',
    technologiesOne: 'html',
    technologiesTwo: 'Bootstrap',
    technologiesThree: 'Ruby on rails',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    linkToLive: 'See Live',
    linkToSource: 'See Source',
  },
  {
    fullName: ' Stories',
    technologiesOne: 'html',
    technologiesTwo: 'Bootstrap',
    technologiesThree: 'Ruby on rails',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    linkToLive: 'See Live',
    linkToSource: 'See Source',
  },

];

const crossButton = document.createElement('span');
const crossImg = document.createElement('img');
crossImg.src = './img/cross.png';
crossImg.classList.add('close_popup');
crossButton.appendChild(crossImg);

function generatePopup() {
  const body = document.querySelector('body');
  const popupBackgroundContainer = document.createElement('div');
  popupBackgroundContainer.classList.add('popup_background_container');
  const popupHeadingContainer = document.createElement('div');
  popupHeadingContainer.classList.add('popup_heading_container');
  const mainPopupHeading = document.createElement('h2');
  mainPopupHeading.classList.add('main_popup_heading');

  projects.forEach((project) => {
    const mainContainer = document.createElement('section');
    mainContainer.classList.add('main_popup_container');

    // popup heading starts here !!!
    const fullName = document.createTextNode(project.fullName);
    mainPopupHeading.appendChild(fullName);

    popupHeadingContainer.appendChild(mainPopupHeading);
    mainContainer.appendChild(popupHeadingContainer);

    // popup Technology part starts here !!!
    const popupLanguageBox = document.createElement('ul');
    popupLanguageBox.classList.add('popup_language_box');

    const languageBoxOne = document.createElement('li');
    languageBoxOne.classList.add('language_box_item');

    const technologiesOne = document.createTextNode(project.technologiesOne);
    languageBoxOne.appendChild(technologiesOne);

    const languageBoxTwo = document.createElement('li');
    languageBoxTwo.classList.add('language_box_item');

    const technologiesTwo = document.createTextNode(project.technologiesTwo);
    languageBoxTwo.appendChild(technologiesTwo);

    const languageBoxThree = document.createElement('li');
    languageBoxThree.classList.add('language_box_item');

    const technologiesThree = document.createTextNode(project.technologiesThree);
    languageBoxThree.appendChild(technologiesThree);

    popupLanguageBox.appendChild(languageBoxOne);
    popupLanguageBox.appendChild(languageBoxTwo);
    popupLanguageBox.appendChild(languageBoxThree);

    mainContainer.appendChild(popupLanguageBox);

    // popup img and pragraph starts here part starts here !!!

    const popupGridContainer = document.createElement('div');
    popupGridContainer.classList.add('popup_grid_container');

    const popupImg = document.createElement('img');
    popupImg.src = './img/popup-img-desktop.png';
    popupImg.classList.add('popup_img');
    popupGridContainer.appendChild(popupImg);

    const popupPara = document.createElement('p');
    popupPara.classList.add('popup_para');

    const popupParaText = document.createTextNode(project.description);
    popupPara.appendChild(popupParaText);

    popupGridContainer.appendChild(popupPara);

    // popup Buttons part starts here !!!

    const popupButtonMainContainer = document.createElement('div');
    popupButtonMainContainer.classList.add('popup_button_main_container');

    const popupButtonContainerOne = document.createElement('div');
    popupButtonContainerOne.classList.add('popup_buttons_container');
    popupGridContainer.appendChild(popupButtonContainerOne);

    const popupButtonOne = document.createElement('button');
    popupButtonOne.classList.add('popup_buttons');

    popupButtonOne.addEventListener('click', () => {
      window.open('https://bilalrajput09.github.io/My-Portfolio/', '_blank');
    });

    const linkToLive = document.createTextNode(project.linkToLive);

    popupButtonOne.appendChild(linkToLive);

    const popupIconOne = document.createElement('span');
    popupIconOne.classList.add('popup_icons');

    const popupIconsImgOne = document.createElement('img');
    popupIconsImgOne.src = './img/see-live.png';

    popupIconOne.appendChild(popupIconsImgOne);

    popupButtonContainerOne.appendChild(popupButtonOne);
    popupButtonContainerOne.appendChild(popupIconOne);

    const popupButtonContainerTwo = document.createElement('div');
    popupButtonContainerTwo.classList.add('popup_buttons_container');
    popupGridContainer.appendChild(popupButtonContainerTwo);

    const popupButtonTwo = document.createElement('button');
    popupButtonTwo.classList.add('popup_buttons');

    popupButtonTwo.addEventListener('click', () => {
      window.open('https://github.com/bilalrajput09', '_blank');
    });

    const linkToSource = document.createTextNode(project.linkToSource);

    popupButtonTwo.appendChild(linkToSource);

    const popupIconTwo = document.createElement('span');
    popupIconTwo.classList.add('popup_icons');

    const popupIconsImgTwo = document.createElement('img');
    popupIconsImgTwo.src = './img/github-white-popup.png';

    popupIconTwo.appendChild(popupIconsImgTwo);

    popupButtonContainerTwo.appendChild(popupButtonTwo);
    popupButtonContainerTwo.appendChild(popupIconTwo);

    popupButtonMainContainer.appendChild(popupButtonContainerOne);
    popupButtonMainContainer.appendChild(popupButtonContainerTwo);

    popupGridContainer.appendChild(popupButtonMainContainer);

    mainContainer.appendChild(popupGridContainer);

    popupBackgroundContainer.appendChild(mainContainer);
  });
  popupHeadingContainer.appendChild(crossButton);
  body.appendChild(popupBackgroundContainer);
  crossButton.addEventListener('click', () => {
    body.removeChild(popupBackgroundContainer);
  });
}

const project1 = document.querySelector('.project1');
project1.addEventListener('click', generatePopup);

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
    fullName: "Multi",
    technologies_1: "html",
    technologies_2: "Bootstrap",
    technologies_3: "Ruby on rails",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    linkToLive: "See Live",
    linkToSource: "See Source",
  },
  {
    fullName: " Post",
    technologies_1: "html",
    technologies_2: "Bootstrap",
    technologies_3: "Ruby on rails",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    linkToLive: "See Live",
    linkToSource: "See Source",
  },
  {
    fullName: " Stories",
    technologies_1: "html",
    technologies_2: "Bootstrap",
    technologies_3: "Ruby on rails",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    linkToLive: "See Live",
    linkToSource: "See Source",
  },


];

var body = document.querySelector("body");
var crossButton = document.createElement("span");
var crossImg = document.createElement("img");
crossImg.src = "./img/cross.png";
crossImg.classList.add("close_popup");
crossButton.appendChild(crossImg);

function generatePopup() {

  var body = document.querySelector("body");
  var popupBackgroundContainer = document.createElement("div");
  popupBackgroundContainer.classList.add("popup_background_container");
  var popupHeadingContainer = document.createElement("div");
  popupHeadingContainer.classList.add("popup_heading_container");
  var mainPopupHeading = document.createElement("h2");
  mainPopupHeading.classList.add("main_popup_heading");

  projects.forEach((project) => {

    var mainContainer = document.createElement("section");
    mainContainer.classList.add("main_popup_container");

    //popup heading starts here !!!
    var fullName = document.createTextNode(project.fullName);
    mainPopupHeading.appendChild(fullName);

    popupHeadingContainer.appendChild(mainPopupHeading);
    mainContainer.appendChild(popupHeadingContainer);

    //popup Technology part starts here !!!
    var popupLanguageBox = document.createElement("ul");
    popupLanguageBox.classList.add("popup_language_box");

    var languageBoxOne = document.createElement("li");
    languageBoxOne.classList.add("language_box_item");

    var technologies_1 = document.createTextNode(project.technologies_1);
    languageBoxOne.appendChild(technologies_1);

    var languageBoxTwo = document.createElement("li");
    languageBoxTwo.classList.add("language_box_item");

    var technologies_2 = document.createTextNode(project.technologies_2);
    languageBoxTwo.appendChild(technologies_2);

    var languageBoxThree = document.createElement("li");
    languageBoxThree.classList.add("language_box_item");

    var technologies_3 = document.createTextNode(project.technologies_3);
    languageBoxThree.appendChild(technologies_3);

    popupLanguageBox.appendChild(languageBoxOne);
    popupLanguageBox.appendChild(languageBoxTwo);
    popupLanguageBox.appendChild(languageBoxThree);

    mainContainer.appendChild(popupLanguageBox);

    //popup img and pragraph starts here part starts here !!!

    var popupGridContainer = document.createElement("div");
    popupGridContainer.classList.add("popup_grid_container");

    var popupImg = document.createElement("img");
    popupImg.src = "./img/popup-img-desktop.png";
    popupImg.classList.add("popup_img");
    popupGridContainer.appendChild(popupImg);

    var popupPara = document.createElement("p");
    popupPara.classList.add("popup_para");

    var popupParaText = document.createTextNode(project.description);
    popupPara.appendChild(popupParaText);

    popupGridContainer.appendChild(popupPara);

    //popup Buttons part starts here !!!

    var popupButtonMainContainer = document.createElement("div");
    popupButtonMainContainer.classList.add("popup_button_main_container");

    var popupButtonContainerOne = document.createElement("div");
    popupButtonContainerOne.classList.add("popup_buttons_container");
    popupGridContainer.appendChild(popupButtonContainerOne);

    var popupButtonOne = document.createElement("button");
    popupButtonOne.classList.add("popup_buttons");

    popupButtonOne.addEventListener("click", () => {

      window.open("https://bilalrajput09.github.io/My-Portfolio/", "_blank");
    })

    var linkToLive = document.createTextNode(project.linkToLive);

    popupButtonOne.appendChild(linkToLive);

    var popupIconOne = document.createElement("span");
    popupIconOne.classList.add("popup_icons");

    var popupIconsImgOne = document.createElement("img");
    popupIconsImgOne.src = "./img/see-live.png";

    popupIconOne.appendChild(popupIconsImgOne);

    popupButtonContainerOne.appendChild(popupButtonOne);
    popupButtonContainerOne.appendChild(popupIconOne);

    var popupButtonContainerTwo = document.createElement("div");
    popupButtonContainerTwo.classList.add("popup_buttons_container");
    popupGridContainer.appendChild(popupButtonContainerTwo);

    var popupButtonTwo = document.createElement("button");
    popupButtonTwo.classList.add("popup_buttons");

    popupButtonTwo.addEventListener("click", () => {
      window.open("https://github.com/bilalrajput09", "_blank");
    });

    var linkToSource = document.createTextNode(project.linkToSource);

    popupButtonTwo.appendChild(linkToSource);

    var popupIconTwo = document.createElement("span");
    popupIconTwo.classList.add("popup_icons");

    var popupIconsImgTwo = document.createElement("img");
    popupIconsImgTwo.src = "./img/github-white-popup.png";

    popupIconTwo.appendChild(popupIconsImgTwo);

    popupButtonContainerTwo.appendChild(popupButtonTwo);
    popupButtonContainerTwo.appendChild(popupIconTwo);

    popupButtonMainContainer.appendChild(popupButtonContainerOne);
    popupButtonMainContainer.appendChild(popupButtonContainerTwo);

    popupGridContainer.appendChild(popupButtonMainContainer);

    mainContainer.appendChild(popupGridContainer);

    popupBackgroundContainer.appendChild(mainContainer);

  })
  popupHeadingContainer.appendChild(crossButton);
  body.appendChild(popupBackgroundContainer);
  crossButton.addEventListener("click", () => {
    body.removeChild(popupBackgroundContainer);
  })
};

var project1 = document.querySelector(".project1");
project1.addEventListener("click", generatePopup);

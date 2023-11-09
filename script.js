const aboutPage = document.getElementById("aboutPages");
const skillPage = document.getElementById("skillPages");
const projectPage = document.getElementById("projectPages");
const aboutButton = document.getElementById("aboutButton");
const skillButton = document.getElementById("skillButton");
const projectButton = document.getElementById("projectButton");

projectPage.style.display = "none";
skillPage.style.display = "none";

aboutButton.addEventListener("click", function () {
  aboutPage.style.display = "block";
  projectPage.style.display = "none";
  skillPage.style.display = "none";
});

projectButton.addEventListener("click", function () {
  aboutPage.style.display = "none";
  projectPage.style.display = "block";
  skillPage.style.display = "none";
});

skillButton.addEventListener("click", function () {
    aboutPage.style.display = "none";
    projectPage.style.display = "none";
    skillPage.style.display = "block";
  });

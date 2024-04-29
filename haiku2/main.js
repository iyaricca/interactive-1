let projects = document.getElementsByClassName('project');
let documentH = document.body.offsetHeight;
let viewportH = window.innerHeight;
let scrollableH = documentH - viewportH;
let scrollPerProject = scrollableH / projects.length;
let scrollY = 0;
let note = document.getElementById("note");

update();
document.addEventListener("scroll", update, false);

function update(e) {
  scrollY = window.scrollY;
  let currentProjectIndex = Math.min (Math.floor(scrollY / scrollPerProject), projects.length - 1);
  let currentScale = (scrollY - (currentProjectIndex * scrollPerProject)) / scrollPerProject;
  note.innerText = 
    "Current scroll amount is: " + scrollY + "\n" +
    "Current project index: " + currentProjectIndex + "\n"

  for (i = 0; i < projects.length; i++) {
    if (i == currentProjectIndex) {
      projects[i].style.transform = "scale(" + currentScale + ")";
    } else if (i < currentProjectIndex){
      projects[i].style.transform = "scale(1)"; 
    } else {
      projects[i].style.transform = "scale(0)"; 
    }
  }

  
}
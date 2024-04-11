
console.log('hello world');

for (j = 0; j < 20; j++) { 
  console.log("A new J begins");

  for (i = 0; i < 10; i++) {
  console.log("j: " + j + ", i: " +i);
  let element = document.createElement("div");

  element.classList.add("rect");
  document.querySelector(".container").appendChild(element);
  if (i == 5) {
    element.style.borderRadius = "20px";
  }

  if (i > 6) {
    element.style.backgroundColor = "blue";
  }

  else {
    element.style.backgroundColor = "hsl(" + i * 10 + ", 100%, 50%)";
  }

  }

  let breaker = document.createElement("div");
  breaker.classList.add("clear");
  document.querySelector(".container").appendChild(breaker);
}








/*
let hue = i * 30;
let rotation = i * 1
let width = i * 30;
// 1. create a div, add class and append
  let element = document.createElement("div"); 

// 2. add a class name "rect" to the element
element.classList.add("rect");

element.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
element.style.transform = "rotate(" + rotation + "deg)";
element.style.width = width + "px";

// 3. append the created element to the document
document.querySelector(".container").appendChild(element);  
*/
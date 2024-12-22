// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";


const parag = document.createElement("p");
content.classList.add("parag");
content.textContent = "This is the glorious text-parag!";




container.appendChild(content);

container.appendChild(parag);


const container = document.querySelector("body");

const redp = document.createElement("p");
redp.textContent = "Hey I'm red!";
redp.style.color = "red";
container.appendChild(redp);

const blueh3 = document.createElement("h3");
blueh3.textContent = "I'm a blue h3";
blueh3.style.color = "blue";
container.appendChild(blueh3);

const bpdiv = document.createElement("div");
bpdiv.style.backgroundColor = "pink";
bpdiv.style.border = "1px solid black";

const divh1 = document.createElement("h1");
divh1.textContent = "I'm in a div";
bpdiv.appendChild(divh1);

const divp = document.createElement("p");
divp.textContent = "ME TOO!";
bpdiv.appendChild(divp);

container.appendChild(bpdiv);
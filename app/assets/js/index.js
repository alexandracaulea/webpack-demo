import "../css/app.css";

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

const element = document.createElement("h1");
element.textContent = "Hello World";
root.appendChild(element);

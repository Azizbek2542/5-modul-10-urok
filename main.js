const userName = prompt("Ismingizni kiriting");

// document.body.style.backgroundColor = "blue";
document.body.style.display = "flex"; 
document.body.style.justifyContent = "center"; 
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

const nameElement = document.createElement("h1");
nameElement.textContent = `${userName}`;
document.body.appendChild(nameElement);
nameElement.style.color = "yellow";
nameElement.style.fontSize = "50px";


if (userName) {
    nameElement.style.textTransform = "uppercase";
}
else {
    alert("Ism kiritilmadi");
}

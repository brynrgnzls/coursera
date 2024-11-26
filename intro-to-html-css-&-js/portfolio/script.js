const form = document.getElementById("recommendation-form");
const closeIcon = document.getElementById("close-modal");
const menuIcon = document.getElementById("menu-icon");

const recommendations = document.getElementById("recommendation-container");

form.onsubmit = (e) => {
  e.preventDefault();

  const messageInput = document.getElementById("message");
  const nameInput = document.getElementById("name");
  const recommendationContainer = document.getElementById(
    "recommendation-container"
  );

  const messageContainer = document.createElement("div");
  const message = document.createElement("h6");
  const name = document.createElement("p");

  messageContainer.classList.add("recommendation");
  message.textContent = `"` + messageInput.value + `"`;
  name.textContent = nameInput.value;

  messageContainer.appendChild(message);
  messageContainer.appendChild(name);

  recommendationContainer.appendChild(messageContainer);

  alert("Thank you for leaving a recommendation");

  messageInput.value = "";
  nameInput.value = "";
};

closeIcon.onclick = (e) => {
  const nav = document.getElementById("nav");

  nav.style.display = "none";
};

menuIcon.onclick = (e) => {
  const nav = document.getElementById("nav");
  nav.style.display = "block"
}

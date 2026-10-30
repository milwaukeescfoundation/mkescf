const CONTACT_EMAIL = "milwaukeescfoundation@gmail.com";

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");

    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Website inquiry: ${data.get("topic")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    status.textContent = "Your email app should open with the message prepared. Please send it from there.";
  });
}

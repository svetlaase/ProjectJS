//Prvky z HTML stránky
document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.querySelector("nav ul");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const menuIcon = document.querySelector(".menu-icon");
  const hamburgerIcon = document.querySelector(".fa-solid");

  //Pomocné funkce k přepnutí tmavého režimu
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀" : "🌙";
  });

  //Tento kód ovládá zobrazení a skrytí seznam menu
  menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList.contains("fa-bars")) {
      hamburgerIcon.classList.add("fa-xmark");
      hamburgerIcon.classList.remove("fa-bars");
      menuList.style.display = "flex";
      menuList.style.flexDirection = "column";
    } else {
      hamburgerIcon.classList.add("fa-bars");
      hamburgerIcon.classList.remove("fa-xmark");
      menuList.style.display = "none";
    }
  });

  //Formular kontrola hesel
  const form = document.getElementById("password-form");
  const message = document.getElementById("message");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  password2.addEventListener("input", () => {
    if (password1.value === password2.value) {
      message.textContent = "Heslo se shoduje";
      message.style.color = "green";
    } else {
      message.textContent = "Heslo se neshoduje";
      message.style.color = "red";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (password1.value === password2.value) {
      message.textContent = "Heslo se shoduje";
      message.style.color = "green";
    } else {
      message.textContent = "Heslo se neshoduje";
      message.style.color = "red";
    }
  });

  //Šipka - zpět na začátek
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

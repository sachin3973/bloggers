// Show navbar
const showNavBar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const bodypd = document.getElementById(bodyId);
  const headerpd = document.getElementById(headerId);

  // Validate that all varibales exist
  if (toggle && nav && bodypd && headerpd) {
    toggle.addEventListener("click", () => {
      // show navbar
      nav.classList.toggle("show");
      // change icon
      toggle.classList.toggle("bx-x");
      // add padding to body
      bodypd.classList.toggle("body-pd");
      // add padding to header
      headerpd.classList.toggle("body-pd");
    });
  }
};

showNavBar("header-toggle", "nav-bar", "body-pd", "header");

// Link Active
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}

linkColor.forEach((l) => l.addEventListener("click", colorLink));

// Dark mode
const darkModeToggle = (darkModeId) => {
  const dark = document.getElementById(darkModeId);
  if (dark) {
    dark.addEventListener("click", () => {
      dark.classList.toggle("bx-sun");
      console.log("dark");
    });
  }
};

const loginToggle = (loginId) => {
  const login = document.getElementById(loginId);
  if (login) {
    login.addEventListener("click", () => {
      login.classList.toggle("bx-log-out");
      console.log("Clicked");
    });
  }
};

darkModeToggle("darkmode-toggle");
loginToggle("login-toggle");

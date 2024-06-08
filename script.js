const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

//show Sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change theme
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".theme-toggler");
  const body = document.body;

  // Check if the user has a preference saved in localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
  }

  themeToggle.addEventListener("click", function () {
    // Toggle the theme class on the body
    body.classList.toggle("dark-theme-variables");

    // Save the user's preference to localStorage
    if (body.classList.contains("dark-theme-variables")) {
      localStorage.setItem("theme", "dark-theme-variables");
    } else {
      localStorage.setItem("theme", "");
    }
    themeToggle.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggle.querySelector("span:nth-child(2)").classList.toggle("active");
  });
});

const menuIcon = document.querySelector(".menu-icon");
const menuDashboard = document.querySelector(".aside-left");

menuIcon.addEventListener("click", function () {
  menuDashboard.classList.toggle("active");
});

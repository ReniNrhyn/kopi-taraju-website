// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Cek apakah elemen ditemukan
console.log(navbarNav, hamburgerMenu);

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
  console.log("Hamburger diklik!");
};

//klik di luar sidebar untuk menghilangkan nav
const Hamburger = document.querySelector("#hamburger=menu");

document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

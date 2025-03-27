const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");

menuBtn.addEventListener("click", function () {
  menuList.classList.toggle("active");

  if (menuBtn.classList.contains("open")) {
    menuBtn.innerHTML = "&#9776;";
    menuBtn.classList.remove("open");
  } else {
    menuBtn.innerHTML = "&#10005;";
    menuBtn.classList.add("open");
  }
});

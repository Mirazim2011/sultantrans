document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuList = document.getElementById("menuList");
  const list = document.querySelector(".trust__list");
  const indicatorsContainer = document.querySelector(".trust__indicators");
  const items = document.querySelectorAll(".trust__list__item");

  let currentIndex = 0;
  const itemWidth = items[0]?.offsetWidth + 20 || 0;
  const totalItems = items.length;

  if (!list || !indicatorsContainer || !totalItems) return;

  indicatorsContainer.innerHTML = Array.from(
    { length: totalItems },
    (_, i) => `<div class="trust__indicator ${i === 0 ? "active" : ""}"></div>`
  ).join("");

  const updateIndicators = () => {
    document
      .querySelectorAll(".trust__indicator")
      .forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
  };

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    list.scrollTo({ left: currentIndex * itemWidth, behavior: "smooth" });
    updateIndicators();
  }, 2000);

  menuBtn?.addEventListener("click", () => {
    menuList.classList.toggle("active");
    menuBtn.classList.toggle("open");
    menuBtn.innerHTML = menuBtn.classList.contains("open")
      ? "&#10005;"
      : "&#9776;";
  });
});

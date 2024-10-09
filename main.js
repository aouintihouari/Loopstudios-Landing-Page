const hamburgerMenuOpen = document.getElementById("hamburger-open");
const hamburgerMenuClose = document.getElementById("hamburger-close");
const overlay = document.getElementById("overlay");
const navList = document.getElementById("nav-list");

hamburgerMenuOpen.addEventListener("click", () => {
  hamburgerMenuOpen.style.display = "none";
  hamburgerMenuClose.style.display = "flex";
  overlay.style.display = "flex";
  overlay.style.opacity = "1";
  navList.classList.add("header__nav__list--active");
});

hamburgerMenuClose.addEventListener("click", () => {
  hamburgerMenuClose.style.display = "none";
  hamburgerMenuOpen.style.display = "flex";
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    navList.classList.remove("header__nav__list--active");
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  const vrContainer = document.querySelector(".vr__container");
  const vrContainerImage = document.querySelector(".vr__container__image");
  const vrContainerText = document.querySelector(".vr__container__text");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        vrContainerImage.classList.add("show");
        vrContainerText.classList.add("show");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(vrContainer);
});

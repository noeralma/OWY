document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("bar");
  const nav = document.querySelector(".navbar");
  const close = document.querySelector(".close");

  if (menu) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }

  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }

      // Close the mobile menu after clicking a link
      if (window.innerWidth <= 768 && nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  });

  const header = document.getElementById("header");
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth > 768) {
      header.style.top = "0";
    } else {
      if (
        currentScroll > lastScrollTop &&
        currentScroll > header.offsetHeight
      ) {
        header.style.top = "-100px";
      } else {
        header.style.top = "0";
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  };

  window.addEventListener("scroll", handleScroll);
});

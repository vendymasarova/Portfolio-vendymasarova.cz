// Reveal section
const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//Slidint into sections
// const nav = document.querySelector(".navigation");
// const btn = document.querySelector(".text-button");
// const scrolling = function (e) {
//   e.preventDefault();

//   //matching strategy--ignore events that are not click exactly on the nav__link
//   if (e.target.classList.contains("nav-link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// };

// nav.addEventListener("click", scrolling);
// btn.addEventListener("click", scrolling);

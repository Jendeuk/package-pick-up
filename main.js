import "./style.scss";

// Edit accordingly to your ideas, remeber to keep it JS light, and CSS heavy
const sections = document.querySelectorAll("section");

const options = {
  root: null,
  treshold: 0,
  rootMargin: "-250px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("green");
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

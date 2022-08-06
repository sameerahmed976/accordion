<<<<<<< HEAD
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList);
    accordion[index].classList.toggle("active-accordion");
=======
const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((element) => {
  element.addEventListener("click", (event) => {
    const content = event.currentTarget.nextElementSibling;
    content.classList.toggle("active-accordion");

    element.classList.toggle("active");
>>>>>>> cfa8ebc75700e2bab8f5813c7099afb4489f9dd8
  });
});

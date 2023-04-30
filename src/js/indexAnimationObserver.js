//Top
const homepageTopText = document.querySelector(".homepage__top__text");

//About
const aboutHeader = document.querySelector(".homepage__about__header");
const aboutText = document.querySelector(".homepage__about__text");

//Adoption
const adoptionBottom = document.querySelector(".homepage__adoption__bottom");
const adoptionText = document.querySelector(".homepage__adoption__text");

function addAnimationClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("homepage__about__text")) {
        addAnimationClass(aboutHeader, "slide-from-bottom");
        addAnimationClass(aboutText, "slide-from-bottom");
      }
      if (entry.target.classList.contains("homepage__adoption__bottom")) {
        addAnimationClass(adoptionText, "slide-from-bottom");
      }
      if (entry.target.classList.contains("homepage__top__text")) {
        addAnimationClass(homepageTopText, "animate__homepage__top__text");
      }
    }
  });
});

let elementsToWatch = [aboutText, adoptionBottom, homepageTopText];
elementsToWatch.forEach((element) => {
  observer.observe(element);
});

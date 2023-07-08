const nav = document.querySelector('.nav');
const home_section = document.querySelector('.home_section');

const stickNav = function (entries) {
  const [ entry ] = entries;

  if (!entries.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const homeSectionObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
})

homeSectionObserver.observe(home_section)
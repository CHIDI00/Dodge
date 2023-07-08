const navLinks = document.querySelector('.nav__links')
const anchor = document.querySelectorAll('.nav-link');


navLinks.addEventListener('click', function(e) {

  if (e.target.classList.contains('nav-link')) {
    e.preventDefault()
      const anchorLink = e.target.getAttribute('href');
      document.querySelector(anchorLink).scrollIntoView(
      { 
        behavior: 'smooth' 
      });        
  }
})






const handleClick = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav-ink');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.classList.add('active_nav');
      else anchor.classList.remove('active_nav');

    });
    // .classList.remove('active_nav')
  }
}

// Passing "argument" into handler
navLinks.addEventListener('click', handleClick)

// nav.addEventListener('mouseout', handleHover.bind(1))
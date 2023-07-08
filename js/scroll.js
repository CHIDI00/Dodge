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


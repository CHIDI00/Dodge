const navLinks = document.querySelector('.nav__links')

navLinks.addEventListener('click', function(e) {


  if (e.target.classList.contains('nav__link')) {
    e.preventDefault()
    const anchorLink = e.target.getAttribute('href');
    console.log(anchorLink);
    document.querySelector(anchorLink).scrollIntoView(
      { 
        behavior: 'smooth' 
      });    
  }
})

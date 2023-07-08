const btn1 = document.querySelector('.btn1')
const car_image = document.querySelector('.car-image10')
const images = [
  'dodgeAsh 2_edited',
  'dodgeAsh1_edited',
  'dodgeBlack1_edited',
  'dodgeBlue_edited',
  'dodgeLightBlue_edited',
  'dodgeRed1_edited',
  'dodgeBlue2_edited'
];

function click() {
  car_image.src =  `images/${images[5]}.png`
  console.log('clicked');
}

btn1.addEventListener('click', click)
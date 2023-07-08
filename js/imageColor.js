const images = [
  'dodgeAsh 2_edited',
  'dodgeAsh1_edited',
  'dodgeBlack1_edited',
  'dodgeBlue_edited',
  'dodgeLightBlue_edited',
  'dodgeRed1_edited',
  'dodgeBlue2_edited'
];


const allBtn = document.querySelectorAll('.btn')

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const carImage = document.querySelector('.car_image10');
const colorName = document.querySelector('.color_name')

// allBtn.addEventListener('click', function (e) {
//   allBtn.forEach(function() {
//     console.log('clicked')
//   })
// })

btn1.addEventListener('click', function() {
  carImage.src = `images/${images[1]}.png`
  colorName.textContent = 'Dodge Gray'
})
btn2.addEventListener('click', function() {
  carImage.src = `images/${images[4]}.png`;
  colorName.textContent = 'Dodge Light Blue'
})
btn3.addEventListener('click', function() {
  carImage.src = `images/${images[2]}.png`;
  colorName.textContent = 'Dodge Black'
})
btn4.addEventListener('click', function() {
  carImage.src = `images/${images[0]}.png`
  colorName.textContent = 'Dodge Mate DarkGray'
})
btn5.addEventListener('click', function() {
  carImage.src = `images/${images[6]}.png`
  colorName.textContent = 'Dodge SkyBlue'
})
btn6.addEventListener('click', function() {
  carImage.src = `images/${images[5]}.png`
  colorName.textContent = 'Dodge Red'
})
btn7.addEventListener('click', function() {
  carImage.src = `images/${images[3]}.png`;
  colorName.textContent = 'Dodge Mate Blue'
})
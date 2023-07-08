const allSections = document.querySelectorAll('.section');
console.log(allSections);

const showSections = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('active');
  observer.unobserve(entry.target);
}

const observeSection = new IntersectionObserver (showSections, {
  root: null,
  threshold: 0.15,
})
console.log(observeSection);

allSections.forEach(function (section) {
  observeSection.observe(section);
  section.classList.add('active')
})

const carEngine = document.querySelector('.engine1');
const carEngine2 = document.querySelector('.engine2');

const showEngineImg1 = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('car-hidden1')
  observer.unobserve(entry.target)
}

const observeImg1 = new IntersectionObserver(showEngineImg1, {
  root: null,
  threshold: 0.15,
})
carEngine.classList.add('car-hidden1')
observeImg1.observe(carEngine)




const showEngineImg2 = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('car-hidden2')
  observer.unobserve(entry.target)
}

const observeImg2 = new IntersectionObserver(showEngineImg2, {
  root: null,
  threshold: 0.15,
})
carEngine2.classList.add('car-hidden2')
observeImg2.observe(carEngine2)
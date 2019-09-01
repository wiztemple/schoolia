const selectItems = document.querySelectorAll('.flames-select');
const toggleSelect = () => {
  selectItems.forEach(selectItem => {
    const inputField = selectItem.querySelector('.input-field');
    const icon = selectItem.querySelector('.icon-right');
    const ul = selectItem.querySelector('.select-item');
    inputField.addEventListener('click', () => {
      ul.classList.toggle('active');
      icon.classList.toggle('active');
    })
  })
}
toggleSelect();

// const responsiveSlider = () => {
//   const slider = document.querySelector('.slider');
//   let sliderWidth = slider.offsetWidth;
//   const sliderList = document.querySelector('.slidewrapper');
//   let count = 1;
//   let items = sliderList.querySelectorAll('li').length;
//   const prev = document.querySelector('.prev');
//   const next = document.querySelector('.next');

//   window.addEventListener('resize', () => {
//     sliderWidth = slider.offsetWidth;
//   })
//   let prevSlide = () => {
//     if (count > 1) {
//       count = count - 2;
//       sliderList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     } else if (count = 1) {
//       count = items - 1;
//       sliderList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//   }
//   let nextSlide = () => {
//     if (count < items) {
//       sliderList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     } else if (count = items) {
//       sliderList.style.left = "0px";
//       count = 1;
//     }
//   }
//   next.addEventListener('click', () => nextSlide());
//   prev.addEventListener('click', () => prevSlide());

//   setInterval(() => { nextSlide() }, 3000)
// }
window.onload = () => responsiveSlider();

let slideIndex, slides, dots, captionText;
const initSlider = () => {
  slideIndex = 0;
  slides = document.getElementsByClassName('imageHolder');
  slides[slideIndex].style.opacity = 1;

  captionText = document.querySelector('.captionHolder .captionText')
  captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

  dots = [];
  let dotsContainer = document.querySelector('.dotsContainer');
  [...slides].forEach(() => {
    let dot = document.createElement('span');
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dots.push(dot);
  });
  dots[slideIndex].classList.add('active');
}
initSlider();

const addSlides = (n) => {
  moveSlide(slideIndex+n)
}
const moveSlide = () => {
  let i, current, next;

  let moveSlideAnimClass = {
    forCurrent: "",
    forNext: ""
  }
  if (n > slideIndex) {
    moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
    moveSlideAnimClass.forNext = "moveLeftNextSlide"
  } else if (n < slideIndex) {
    
  }
  if (n != slideIndex) {
    next = slides(n)
    current = slides[slideIndex];
    [...slides].forEach(slide => {
      slide.className = 'imageHolder';
      slide.style.opacity = 0;
      dots[i].classList.remove('active');
    });
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add('active');
    slideIndex = n;
  }
}
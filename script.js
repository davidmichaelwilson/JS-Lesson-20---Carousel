const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length

  console.log(totalSlides)

document.getElementById("button-next").addEventListener("click", nextSlide)
document.getElementById("button-prev").addEventListener("click", prevSlide)

function nextSlide() {
  hideSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++
  }
  slides[slidePosition].classList.add("carousel-item-visible")
}

function prevSlide() {
  hideSlides()
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }
  slides[slidePosition].classList.add("carousel-item-visible")
}

function hideSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible")
    slide.classList.add("carousel-item-hidden")
  }
}
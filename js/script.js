// Pricing
const monthly = document.querySelector("#monthly-btn");
const year = document.querySelector("#year-btn");

const standart = document.querySelector("#standart-price")
const premium = document.querySelector("#premium-price")

monthly.addEventListener('click', (event) => {
  event.preventDefault();

  if (!monthly.classList.contains("active")) {
    year.className = year.className.replace("active", "")
    monthly.className = monthly.className.concat(" active")
  }
  
  standart.innerHTML = `<span>$</span>19.00`;
  premium.innerHTML = `<span>$</span>49.00`;
})

year.addEventListener('click', (event) => {
  event.preventDefault();

  if (!year.classList.contains("active")) {
    monthly.className = monthly.className.replace("active", "")
    year.className = year.className.concat(" active")
  }
  
  standart.innerHTML = `<span>$</span>188.00`;
  premium.innerHTML = `<span>$</span>489.00`;
})



// Carusel
const slides = document.getElementsByClassName("carusel__group");
const dots = document.getElementsByClassName("carusel__dot")

const showSlide = (n) => {

  for (let i=0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  for(let i=0; i <dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "")
  }

  slides[n-1].style.display = "flex";
  dots[n-1].className = dots[n-1].className.concat(" active");
} 
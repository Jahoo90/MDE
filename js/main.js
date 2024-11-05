document.addEventListener('DOMContentLoaded', () => {
    console.log('Strona załadowana.');
});


// document.getElementById('alertButton').addEventListener('click', () => {
//     alert('Witaj, kliknąłeś przycisk!');
// });

const slides = document.querySelectorAll('.custom-carousel-item');
const indicators = document.querySelectorAll('.custom-indicator');
const carouselSlides = document.querySelector('.custom-carousel-slides');
let currentIndex = 1; // Startujemy od indeksu 1, aby pokazać pierwszy prawdziwy slajd
let autoSlideInterval;

// Ustawienie szerokości slajdu (na wypadek zmiany rozmiaru ekranu)
const slideWidth = slides[0].clientWidth;

// Funkcja do wyświetlania slajdu na podstawie indeksu
function showSlide(index) {
  carouselSlides.style.transition = 'transform 0.5s ease-in-out';
  carouselSlides.style.transform = `translateX(-${index * slideWidth}px)`;

  // Aktualizacja wskaźników
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === (index - 1) % indicators.length);
  });
}

// Przeskakiwanie na początek lub koniec karuzeli
carouselSlides.addEventListener('transitionend', () => {
  if (currentIndex === slides.length - 1) {
    carouselSlides.style.transition = 'none';
    currentIndex = 1;
    carouselSlides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  } else if (currentIndex === 0) {
    carouselSlides.style.transition = 'none';
    currentIndex = slides.length - 2;
    carouselSlides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

// Funkcja przechodzenia do następnego slajdu
function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

// Funkcja przechodzenia do poprzedniego slajdu
function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

// Reset automatycznego przesuwania
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000);
}

// Obsługa przycisków do zmiany slajdów
document.querySelector('.custom-carousel-next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector('.custom-carousel-prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Wskaźniki (kropki)
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index + 1;
    showSlide(currentIndex);
    resetAutoSlide();
  });
});

// Automatyczne przewijanie
autoSlideInterval = setInterval(nextSlide, 5000);

// Początkowe wyświetlenie
showSlide(currentIndex);

// ############################ Zmiana jezyka ##############################

function changeLanguage(lang) {
  alert(`Język zmieniony na: ${lang}`);
  // Tutaj można dodać logikę zmieniającą język na stronie
}

// ############################ Zmiana motywu ##############################

const switchButton = document.querySelector("header button");
let theme = localStorage.getItem("theme");

switchButton.addEventListener("click", () => {
  console.log("siema");
    if (theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
        theme = "light";
    } else {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}

if (theme === "light") {
    document.querySelector("body").classList.add("light");
}
document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
  
    learnMoreBtn.addEventListener('click', () => {
      // As an example, scroll smoothly to the Dealers section when the button is clicked
      const dealersSection = document.getElementById('dealers');
      if (dealersSection) {
        dealersSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  
  let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}

setInterval(showSlides, 3000); // Change image every 3 seconds
// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Carousel Animation for all tracks (Reviews, Cases)
const tracks = document.querySelectorAll('.carousel-track');

tracks.forEach(track => {
  let isDown = false;
  let startX;
  let scrollLeft;
  
  // Clone nodes for infinite scroll effect
  const slides = Array.from(track.children);
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  // Auto scroll
  let autoScrollInterval;
  let currentScroll = 0;
  
  const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
      currentScroll += 1;
      track.style.transform = `translateX(-${currentScroll}px)`;
      
      // Reset if we've scrolled past the first set of items
      if (currentScroll > track.scrollWidth / 2) {
        currentScroll = 0;
        track.style.transform = `translateX(0)`;
      }
    }, 20); // Speed of scroll
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
  };

  startAutoScroll();

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoScroll);
  track.addEventListener('mouseleave', startAutoScroll);

  // Drag to scroll functionality
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    stopAutoScroll();
    startX = e.pageX - track.offsetLeft;
  });
  
  track.addEventListener('mouseleave', () => {
    isDown = false;
  });
  
  track.addEventListener('mouseup', () => {
    isDown = false;
    startAutoScroll();
  });
  
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (startX - x); 
    currentScroll += walk * 0.1; 
    track.style.transform = `translateX(-${currentScroll}px)`;
  });
});

// Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

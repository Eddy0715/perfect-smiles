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

// Intersection Observer for scroll-driven reveal animations
const revealElements = document.querySelectorAll('.reveal, .gold-glow-divider');

if (revealElements.length > 0) {
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  revealElements.forEach(element => {
    revealOnScroll.observe(element);
  });
}

// Scroll Progress Indicator (Glowing Gold Bar at top)
const progressBar = document.querySelector('.scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }
  });
}

// Background Blobs scroll parallax effect
const blobs = document.querySelectorAll('.bg-glow-blob');
if (blobs.length > 0) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 0.05;
      blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}



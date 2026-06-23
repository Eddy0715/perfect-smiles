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

// Cases Glance Carousel: CSS Infinite Scroll
const casesTrack = document.getElementById('casesTrack');
if (casesTrack) {
  const slides = Array.from(casesTrack.children);
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    casesTrack.appendChild(clone);
  });
}

// Reviews Carousel: Step-by-Step Slide & Zoom Sequence
const reviewTrack = document.getElementById('reviewTrack');
if (reviewTrack) {
  const slides = Array.from(reviewTrack.children);
  if (slides.length > 0) {
    let currentIndex = 0;
    let isPaused = false;
    let timeoutId = null;
    
    // Safely schedule next step in sequence and clear any existing timeout to avoid overlaps
    const setNextTimeout = (callback, delay) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(callback, delay);
    };
    
    // Update translation to center the active slide
    const updatePosition = () => {
      const activeSlide = slides[currentIndex];
      if (activeSlide) {
        const containerWidth = reviewTrack.parentElement.clientWidth;
        const slideWidth = activeSlide.clientWidth;
        const slideLeft = activeSlide.offsetLeft;
        
        // Center alignment offset
        const offset = slideLeft - (containerWidth - slideWidth) / 2;
        reviewTrack.style.transform = `translateX(-${offset}px)`;
      }
    };
    
    // Set initial state
    const initializeSlider = () => {
      slides.forEach((slide, index) => {
        slide.classList.remove('active-slide', 'zoomed-slide');
        if (index === currentIndex) {
          slide.classList.add('active-slide', 'zoomed-slide');
        }
      });
      updatePosition();
    };
    
    // Start sequence
    const startSequence = () => {
      if (isPaused) return;
      
      // Phase 1: Stay still for 2 seconds (zoomed state)
      setNextTimeout(() => {
        if (isPaused) return;
        
        // Phase 2: Zoom out the current slide (500ms transition)
        const currentSlide = slides[currentIndex];
        if (currentSlide) {
          currentSlide.classList.remove('zoomed-slide');
        }
        
        setNextTimeout(() => {
          if (isPaused) return;
          
          // Remove active class from old slide
          if (currentSlide) {
            currentSlide.classList.remove('active-slide');
          }
          
          // Phase 3: Increment index and slide to the next card (800ms track transition)
          currentIndex = (currentIndex + 1) % slides.length;
          const nextSlide = slides[currentIndex];
          
          if (nextSlide) {
            nextSlide.classList.add('active-slide');
            updatePosition();
          }
          
          setNextTimeout(() => {
            if (isPaused) return;
            
            // Phase 4: Zoom in the new active slide (500ms transition)
            if (nextSlide) {
              nextSlide.classList.add('zoomed-slide');
            }
            
            setNextTimeout(() => {
              if (isPaused) return;
              // Loop recursively
              startSequence();
            }, 500); // Wait for zoom-in completion
            
          }, 800); // Wait for slide completion
          
        }, 500); // Wait for zoom-out completion
        
      }, 2000); // Wait for stay still period
    };
    
    // Initialize and schedule start
    setTimeout(() => {
      initializeSlider();
      startSequence();
    }, 100);
    
    window.addEventListener('resize', () => {
      updatePosition();
    });
    
    // Pause on hover
    const container = reviewTrack.parentElement;
    container.addEventListener('mouseenter', () => {
      isPaused = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    });
    
    container.addEventListener('mouseleave', () => {
      isPaused = false;
      // When resuming, ensure current index has active and zoomed classes and start cycle
      slides.forEach((slide, index) => {
        slide.classList.remove('active-slide', 'zoomed-slide');
        if (index === currentIndex) {
          slide.classList.add('active-slide', 'zoomed-slide');
        }
      });
      updatePosition();
      startSequence();
    });
  }
}

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



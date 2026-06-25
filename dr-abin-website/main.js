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

// Services Data matching PDF exact content and images
const servicesData = {
  "metal-braces": {
    title: "Metal Braces",
    subtitle: "Metal Braces: Trusted, Powerful, and Proven",
    img: "./assets/pdf_extracted_new/page_1_img_0.jpg",
    description: "Get a confident, well-aligned smile with metal braces—the most reliable option for correcting crowding, spacing, and a wide range of bite issues from childhood through adulthood.",
    whyTitle: "Why metal?",
    whyList: [
      "Powerful: handles complex cases and heavy mechanics better than other braces",
      "Effective: consistent, predictable results for mild to severe issues",
      "Affordable: typically the most cost-effective orthodontic option",
      "Durable: strong stainless steel brackets resist breakage"
    ],
    tipsTitle: "Quick care tips",
    tipsList: [
      "Brush after every meal; use interdental brushes or floss threaders",
      "Avoid hard/sticky foods (nuts, ice, caramel, hard candies)",
      "Limit stain triggers if you have elastic ties; rinse and brush after coffee, tea, curry",
      "Use orthodontic wax for poking wires; call us for loose/broken brackets",
      "Soreness after adjustments? OTC analgesics + warm salt rinses help"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "One-day bonding after consult + digital scan/X-rays",
      "Adjustments every 4–8 weeks",
      "Typical treatment: 12–36 months (complex cases may take longer)",
      "Finished with retainers to keep your smile stable"
    ]
  },
  "ceramic-braces": {
    title: "Ceramic Braces",
    subtitle: "Ceramic Braces: Nearly Invisible, Fully Effective",
    img: "./assets/pdf_extracted_new/page_2_img_0.jpg",
    description: "Transform your smile with ceramic braces—tooth-colored brackets that blend naturally while delivering precise alignment for crowding, spacing, and mild bite issues. Perfect for teens and adults who want reliable results without the metal look.",
    whyTitle: "Why ceramic?",
    whyList: [
      "Discreet: tooth-colored brackets = far less noticeable than metal",
      "Effective: proven movement for mild–moderate cases",
      "Comfortable: smooth surfaces reduce irritation",
      "Confidence: the cosmetic choice many patients prefer"
    ],
    tipsTitle: "Care in a flash",
    tipsList: [
      "Brush after every meal; use interdental brushes or floss threaders",
      "Avoid hard/sticky foods (nuts, ice, caramel)",
      "Limit stain triggers (coffee, tea, red wine, curry); rinse and brush after",
      "Use orthodontic wax for poking wires; call us for loose/broken brackets"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "One-day bonding after a quick consult + digital scan",
      "Adjustments every 4–8 weeks",
      "Typical treatment: 12–36 months",
      "Finished with retainers to keep your smile stable"
    ]
  },
  "self-ligating-braces": {
    title: "Self-Ligating Braces",
    subtitle: "Self-Ligating Braces: Faster, Cleaner, More Comfortable",
    img: "./assets/pdf_extracted_new/page_3_img_0.jpg",
    description: "Upgrade your smile with self-ligating braces—brackets that use a built-in metal clip instead of elastic ties. They deliver lower friction for smoother tooth movement, make hygiene easier, and often feel more comfortable after adjustments. Many patients enjoy longer intervals between visits and fewer plaque traps than conventional braces. Ideal for mild to moderate crowding, spacing, and bite correction in teens and adults.",
    whyTitle: "Why self-ligating?",
    whyList: [
      "Cleaner & Faster: clip design eliminates elastic ties, reducing friction and food trapping",
      "More Comfortable: smoother tooth movement and lower friction",
      "Less Adjustments: longer intervals between office visits"
    ],
    tipsTitle: "Quick care tips",
    tipsList: [
      "Clean after every meal to keep clips functioning optimally",
      "Skip hard/sticky foods to prevent brackets from breaking",
      "Use orthodontic wax for any poking wires"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Quick consult and digital scan first",
      "Bonded in one visit",
      "Adjustments every 4–8 weeks (sometimes 6–10)",
      "Finished with a polished bite and a retainer plan to keep results stable"
    ]
  },
  "lingual-braces": {
    title: "Lingual Braces",
    subtitle: "Lingual Braces: Invisible From the Front, Powerful Inside",
    img: "./assets/pdf_extracted_new/page_4_img_0.jpg",
    description: "Transform your smile with lingual braces—brackets placed on the back (tongue side) of your teeth so they're completely hidden from view. Ideal for teens and adults who want noticeable results without anyone seeing their braces.",
    whyTitle: "Why lingual?",
    whyList: [
      "100% invisible: no front-facing brackets or wires",
      "Effective: handles crowding, spacing, and many bite issues",
      "Professional confidence: perfect for public-facing roles",
      "Comfortable once adapted: smooth surfaces reduce lip irritation"
    ],
    tipsTitle: "Quick care tips",
    tipsList: [
      "Brush after every meal; focus on the tongue-side brackets with interdental brushes",
      "Avoid hard/sticky foods (nuts, ice, caramel) that can loosen brackets",
      "Initial speech adjustment is normal; practice speaking and reading aloud",
      "Use orthodontic wax for any poking wires; call us for loose brackets",
      "Soreness after adjustments? OTC analgesics + warm salt rinses help"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Specialized consult + digital scan to plan precise back-of-teeth placement",
      "Bonding takes slightly longer due to access difficulty",
      "Adjustments every 6–8 weeks (specialist follow-up)",
      "Typical treatment: 18–36 months depending on complexity",
      "Finished with retainers to lock in your invisible smile"
    ]
  },
  "clear-aligners": {
    title: "Clear Aligners + Invisalign®",
    subtitle: "Clear Aligners + Invisalign: Invisible, Removable, and Trusted",
    img: "./assets/pdf_extracted_new/page_5_img_0.jpg",
    description: "Straighten your smile with clear aligners—and experience the leading brand, Invisalign. These custom, transparent trays gently shift teeth into place and are nearly invisible when worn. Invisalign is the most researched and widely used clear aligner system, backed by millions of treatments and advanced software (SmartTrack material and SmartForce attachments) for precise, comfortable results.",
    whyTitle: "Why choose Invisalign clear aligners?",
    whyList: [
      "Invisible: nearly undetectable so you can smile confidently during treatment",
      "Removable: eat freely and maintain easy brushing/flossing",
      "Comfortable: smooth medical-grade plastic (SmartTrack) reduces irritation",
      "Precise: ClinCheck 3D planning lets you see your projected outcome before starting",
      "Convenient: fewer office visits; many progress checks are remote"
    ],
    tipsTitle: "Quick care tips",
    tipsList: [
      "Wear 20–22 hours/day; remove only to eat, drink (except water), and brush",
      "Brush and floss before reinserting; clean aligners daily with a soft brush and clear soap or Invisalign cleaner (no hot water)",
      "Store in your case when not worn; avoid colored/hot drinks while wearing",
      "Mild pressure or soreness when starting a new tray is normal"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Digital scan to create your custom ClinCheck plan",
      "Receive a series of trays; change every 1–2 weeks as directed",
      "Typical treatment: 6–18 months for mild to moderate cases (complex cases may take longer)",
      "Progress checks every 8–12 weeks (in-office or remote)",
      "Finished with Invisalign retainers to maintain your new smile"
    ]
  },
  "palatal-expanders": {
    title: "Palatal Expanders",
    subtitle: "Palatal Expanders: Wider Airway, Better Bite, Confident Smile",
    img: "./assets/pdf_extracted_new/page_6_img_0.jpg",
    description: "Broaden your upper jaw with a palatal expander—perfect for correcting a narrow arch, crowding, crossbite, and even supporting better breathing. Great for kids and teens, and now effective for adults too with MARPE (Miniscrew-Assisted Rapid Palatal Expansion).",
    whyTitle: "Why expand?",
    whyList: [
      "Fixes crossbite and narrow arches",
      "Creates space for crowded teeth (often avoiding extractions)",
      "Improves airflow and can support better breathing",
      "Sets the foundation for a balanced, stable bite"
    ],
    tipsTitle: "Quick care tips",
    tipsList: [
      "Follow your activation schedule exactly (turn key as directed)",
      "Keep up with brushing; use a small brush or water flosser around the expander",
      "Avoid hard/sticky foods (nuts, ice, caramel) that can bend or break the device",
      "Mild pressure or a gap between front teeth is normal during expansion",
      "Use orthodontic wax if there's irritation; call us for loose screws or broken parts"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Consultation + 3D scan/X-ray to plan expansion",
      "Custom expander fitted and activated at home (or in-office for certain types)",
      "Expansion phase: typically 2–4 weeks of daily turns",
      "Retention: device stays in place for several months to let bone stabilize",
      "Next steps: braces or clear aligners to fine-tune alignment (if needed)"
    ]
  },
  "twin-block": {
    title: "Twin Block Appliance",
    subtitle: "Twin Block Appliance: Correct Your Overjet, Grow Into a Better Bite",
    img: "./assets/pdf_extracted_new/page_8_img_0.jpg",
    description: "Fix a retruded lower jaw and improve your Class II overjet with the Twin Block Appliance—a functional orthodontic device that encourages the lower jaw to grow forward while aligning teeth. Ideal for growing children and teens who need jaw correction before braces.",
    whyTitle: "Why Twin Block?",
    whyList: [
      "Corrects Class II overjet (retruded lower jaw) efficiently",
      "Encourages natural lower jaw growth during development",
      "Two-piece design (upper + lower blocks) allows comfortable chewing and speech",
      "Often reduces the need for later jaw surgery or prolonged braces",
      "Can be used alongside or before fixed braces for optimal results"
    ],
    tipsTitle: "Patient instructions & care",
    tipsList: [
      "Wear full-time as prescribed (typically 22+ hours/day); remove only for eating and cleaning",
      "Practice speaking and chewing; mild discomfort is normal initially",
      "Clean blocks daily with a soft brush and cool water (no hot water)",
      "Avoid hard/sticky foods that can bend or break the appliance",
      "Store in your case when not worn; bring to every appointment",
      "Use orthodontic wax for irritation; call us for loose parts or broken blocks"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Consultation + scans/X-rays to confirm Class II and growth status",
      "Custom Twin Block fabricated and fitted",
      "Activation: wear full-time for 6–12 months",
      "Follow-up: progress checks every 4–6 weeks",
      "Next phase: braces or clear aligners to finalize alignment after jaw correction"
    ]
  },
  "herbst": {
    title: "Herbst Appliance",
    subtitle: "Herbst Appliance: Fixed Jaw Correction for a Better Bite",
    img: "./assets/pdf_extracted_new/page_9_img_0.jpg",
    description: "Correct a retruded lower jaw (Class II overjet) with the Herbst Appliance—a fixed, all-day device that gently guides the lower jaw forward while teeth align. Ideal for growing children and teens who need jaw correction before or alongside braces.",
    whyTitle: "Why Herbst?",
    whyList: [
      "Fixed & continuous: works 24/7 without relying on patient compliance like removable appliances",
      "Efficient overjet reduction: often achieves results faster than elastic-based methods",
      "Growth-friendly: encourages natural lower jaw positioning during development",
      "Often paired with braces for comprehensive alignment",
      "Can reduce the need for future jaw surgery in moderate cases"
    ],
    tipsTitle: "Patient instructions & care",
    tipsList: [
      "Do not remove the appliance; it's fixed in place",
      "Brush thoroughly after meals; use interdental brushes or a water flosser around the rods and bands",
      "Avoid hard/sticky foods (nuts, ice, caramel, hard candies) that can bend or break the device",
      "Mild discomfort or tongue irritation is normal initially; use orthodontic wax if needed",
      "If a rod feels loose or the appliance breaks, call us promptly for repair",
      "Practice speaking and chewing; improvement happens within a few weeks"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Consultation + X-rays/scans to confirm Class II and growth status",
      "Custom Herbst fabricated and bonded to upper/lower teeth (or crowns)",
      "Active phase: typically 6–12 months of continuous wear",
      "Follow-up: progress checks every 4–6 weeks",
      "Next phase: braces or aligners to finalize alignment after jaw correction"
    ]
  },
  "retainers": {
    title: "Retainers",
    subtitle: "Retainers: Lock In Your New Smile for Life",
    img: "./assets/pdf_extracted_new/page_11_img_0.jpg",
    description: "Protect your orthodontic results with retainers—the essential final step after braces or clear aligners. Without retainers, teeth naturally shift back; with them, your smile stays straight, stable, and confident for years.",
    whyTitle: "Why wear retainers?",
    whyList: [
      "Prevent relapse: keep teeth from shifting post-treatment",
      "Stable bite: maintain the alignment and jaw relationship you achieved",
      "Long-term confidence: safeguard your investment in a better smile",
      "Options for every lifestyle: fixed (bonded) or removable (clear/Hawley)"
    ],
    tipsTitle: "Patient instructions & care",
    tipsList: [
      "Fixed: brush thoroughly + use interdental brushes/water floss; avoid biting hard objects",
      "Removable clear: wear 20–22 hours/day (or as directed); clean daily with soft brush + cool water or retainer cleaner",
      "Hawley: clean with a soft brush and mild soap; avoid hot water that can warp acrylic",
      "Store removable retainers in their case when not worn; never wrap in napkins",
      "If a retainer feels loose, breaks, or causes pain, call us promptly for an adjustment or replacement"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Post-braces/aligner consult + scan or impression",
      "Custom retainer fabricated (fixed bonded in-office or removable delivered next visit)",
      "Wear schedule: often full-time initially (4–6 months), then nightly long-term",
      "Periodic checks to confirm fit and stability"
    ]
  },
  "tads": {
    title: "TADs (Mini Implants)",
    subtitle: "TADs (Mini Implants): Precise Anchorage for Smarter Orthodontics",
    img: "./assets/pdf_extracted_new/page_12_img_0.jpg",
    description: "Power difficult tooth movements with TADs—Temporary Anchorage Devices (mini implants) that act as solid, stationary anchors. They enable precise corrections without relying on patient compliance, often shortening treatment and avoiding extra appliances.",
    whyTitle: "Why choose TADs?",
    whyList: [
      "Precision: move specific teeth exactly where needed",
      "Compliance-free: works 24/7 without elastics or headgear",
      "Efficiency: often reduces treatment time and simplifies complex cases",
      "Less invasive: small, temporary screws placed in bone; removed after treatment",
      "Versatile: closes gaps, retracts teeth, corrects crossbites, and assists impaction/exposure"
    ],
    tipsTitle: "Patient instructions & care",
    tipsList: [
      "Keep the area clean: brush gently and use interdental brushes or a water flosser around TADs",
      "Avoid hard/sticky foods that can put excessive force on the device",
      "Mild soreness after placement is normal; use OTC analgesics if needed",
      "If a TAD feels loose, causes persistent pain, or irritates gum, call us promptly",
      "Do not attempt to remove or adjust TADs yourself"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Consultation + 3D scan/X-ray to assess bone and plan placement",
      "Minor procedure: TADs placed under local anesthesia (quick, minimally invasive)",
      "Active phase: TADs used to anchor wires/elastics for targeted movement (weeks to months)",
      "Removal: TADs removed easily after treatment; site heals quickly",
      "Next steps: continue braces/aligners to finalize alignment"
    ]
  },
  "elastics": {
    title: "Elastics",
    subtitle: "Elastics: Simple, Powerful Bite Correction for Braces Owners",
    img: "./assets/pdf_extracted_new/page_14_img_0.jpg",
    description: "Fine-tune your bite with orthodontic elastics—stretchable bands that connect upper and lower braces to guide jaw relationship and close gaps. A small daily habit that delivers big results for Class II overjets, Class III underjets, and vertical corrections.",
    whyTitle: "Why wear elastics?",
    whyList: [
      "Precise bite correction: moves jaws and teeth into the right position",
      "Gaps closure: helps close spaces between upper and lower teeth",
      "Fast results: often works within weeks when worn consistently",
      "Affordable: low-cost add-on to braces treatment",
      "Essential for many cases: often required for stable, long-term bite"
    ],
    tipsTitle: "Patient instructions & care",
    tipsList: [
      "Wear 22+ hours/day: remove only for eating, brushing, and flossing",
      "Change elastics daily (morning or night) using clean hands",
      "Stretch gently to hook onto braces; avoid overstretching or snapping",
      "Keep a spare pack at home, work, and in your bag",
      "If an elastic breaks, replace it immediately",
      "Mild soreness is normal; use OTC analgesics if needed",
      "Store elastics in a cool, dry place; avoid heat that weakens them"
    ],
    glanceTitle: "Treatment at a glance",
    glanceList: [
      "Prescribed during active braces phase after initial alignment",
      "You'll receive a supply with clear hook placement instructions",
      "Wear continuously (22+ hours/day); remove only to eat, brush, and change",
      "Replace elastics daily (or as directed) to maintain strength",
      "Progress checked every 4–6 weeks; elastics may be adjusted or discontinued when bite is corrected"
    ]
  }
};

// Services Tab Filtering
const serviceFilterBtns = document.querySelectorAll('#services .filter-btn');
const serviceCards = document.querySelectorAll('#services .service-card');

serviceFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    serviceFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    serviceCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'block';
        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
      } else {
        const cat = card.getAttribute('data-category');
        if (cat === filter) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      }
    });
  });
});

// Services Modal Logic
const serviceModal = document.getElementById('serviceModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDesc = document.getElementById('modalDesc');

const modalWhyList = document.getElementById('modalWhyList');
const modalTipsList = document.getElementById('modalTipsList');
const modalGlanceList = document.getElementById('modalGlanceList');

let closeTimeout = null;
let isInsideCard = false;
let isInsideModal = false;

// Function to populate and open modal
const openServiceModal = (serviceKey) => {
  const data = servicesData[serviceKey];
  
  if (data) {
    modalImg.src = data.img;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalDesc.textContent = data.description;
    
    // Populate lists helper
    const populateList = (listEl, items) => {
      listEl.innerHTML = '';
      if (items && items.length > 0) {
        items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          listEl.appendChild(li);
        });
        listEl.parentElement.style.display = 'block';
      } else {
        listEl.parentElement.style.display = 'none';
      }
    };
    
    populateList(modalWhyList, data.whyList);
    populateList(modalTipsList, data.tipsList);
    populateList(modalGlanceList, data.glanceList);
    
    serviceModal.classList.add('active');
  }
};

const closeModal = () => {
  serviceModal.classList.remove('active');
  document.body.style.overflow = ''; // Enable page scrolling
};

serviceCards.forEach(card => {
  // Click/Touch trigger
  card.addEventListener('click', () => {
    const serviceKey = card.getAttribute('data-service');
    openServiceModal(serviceKey);
    document.body.style.overflow = 'hidden'; // Lock scrolling on click
  });
});

modalCloseBtn.addEventListener('click', closeModal);
serviceModal.addEventListener('click', (e) => {
  if (e.target === serviceModal) {
    closeModal();
  }
});




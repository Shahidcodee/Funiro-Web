// ==========================================
// FUNIRO FURNITURE - CUSTOM JAVASCRIPT (Updated for Contact Form)
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });

  // ==========================================
  // NAVBAR SCROLL EFFECT
  // ==========================================
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.08)";
    } else {
      navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
    }

    lastScroll = currentScroll;
  });

  // ==========================================
  // CONTACT FORM SUBMISSION (Replaced Newsletter)
  // ==========================================
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = this.querySelector('input[placeholder="Your Name"]');
      const emailInput = this.querySelector('input[type="email"]');
      const messageInput = this.querySelector("textarea");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      // Basic validation
      if (name && email && message) {
        // Success feedback
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
      } else {
        // Error feedback
        alert("Please fill in all fields.");
      }
    });
  }
  // <!-- Additional JS for Search Bar (Simple functionality) -->
  document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".input-group");
    if (searchForm) {
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = document.querySelector('[type="search"]').value;
        if (query.trim()) {
          alert(`Searching for: ${query}`); // Placeholder - integrate with actual search logic
        }
      });
    }
  });

  // ==========================================
  // PRODUCT CARD INTERACTIONS
  // ==========================================
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const overlay = card.querySelector(".product-overlay");
    const addToCartBtn = overlay?.querySelector(".btn-overlay");

    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const productName = card.querySelector(".product-name").textContent;

        // Add a simple feedback animation
        this.textContent = "Added!";
        this.style.backgroundColor = "#2EC1AC";
        this.style.color = "#FFFFFF";

        setTimeout(() => {
          this.textContent = "Add to cart";
          this.style.backgroundColor = "";
          this.style.color = "";
        }, 1500);

        // You can add actual cart functionality here
        console.log(`Added ${productName} to cart`);
      });
    }
  });
  // ==========================================
  // INTERIOR.JS UPDATES (Replace/Append this in interior.js to ensure AOS initialization - this fixes disappeared animations)
  // ==========================================

  document.addEventListener("DOMContentLoaded", function () {
    // AOS Initialization for Luxury Animations (Re-initialize to fix disappearance)
    AOS.init({
      duration: 700, // Default 700ms for subtle timing
      easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Luxury ease-out curve
      once: true, // Animate only once for performance
      offset: 100, // Trigger 100px before viewport
      disable: false, // Ensure not disabled (change to 'mobile' if you want to disable on mobile)
    });

    // Refresh AOS on window load and scroll for dynamic content (helps if animations disappear on reload/resize)
    window.addEventListener("load", AOS.refresh);
    window.addEventListener("scroll", AOS.refresh);
    window.addEventListener("resize", AOS.refreshHard); // Hard refresh on resize to recalculate positions

    // ... (Rest of your existing interior.js code here)

    // Parallax effect for story image (simple CSS-based, no heavy JS)
    const storyImg = document.querySelector(".story-img");
    if (storyImg) {
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5; // Slow zoom/parallax
        storyImg.style.transform = `translateY(${rate}px) scale(1 + ${
          scrolled * 0.0005
        })`;
      });
    }
  });

  // ==========================================
  // INSTAGRAM GRID LAZY LOADING (OPTIONAL)
  // ==========================================
  const instagramItems = document.querySelectorAll(".instagram-item img");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = "0";
        img.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
          img.style.opacity = "1";
        }, 100);

        observer.unobserve(img);
      }
    });
  });

  instagramItems.forEach((img) => {
    imageObserver.observe(img);
  });

  // ==========================================
  // CONSOLE BRANDING (OPTIONAL)
  // ==========================================
  console.log(
    "%cFuniro Furniture",
    "font-size: 24px; font-weight: bold; color: #D4AF37;"
  );
  console.log(
    "%cDiscover Our New Collection",
    "font-size: 14px; color: #666666;"
  );
  console.log("%cWebsite by Funiro Team", "font-size: 12px; color: #898989;");

  // ==========================================
  // AOS INITIALIZATION FOR LUXURY ANIMATIONS
  // ==========================================
  AOS.init({
    duration: 700, // Default 700ms for subtle timing
    easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Luxury ease-out curve
    once: true, // Animate only once for performance
    offset: 100, // Trigger 100px before viewport
    disable: "mobile", // Optional: Disable on mobile for better perf (uncomment if needed)
  });

  // Refresh AOS on scroll for dynamic content
  window.addEventListener("scroll", () => {
    AOS.refresh();
  });

  // Parallax effect for story image (simple CSS-based, no heavy JS)
  const storyImg = document.querySelector(".story-img");
  if (storyImg) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5; // Slow zoom/parallax
      storyImg.style.transform = `translateY(${rate}px) scale(1 + ${
        scrolled * 0.0005
      })`;
    });
  }
});
// ==========================================
// CONTACT PAGE ENHANCEMENTS
// ==========================================

// AOS Initialization (if not already)
AOS.init({
  duration: 700,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  once: true,
  offset: 100,
});

// Contact Form Submission with Toast
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Simple success toast (can integrate GSAP for animation)
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.textContent =
      "Message sent successfully! We'll get back to you soon.";
    toast.style.cssText =
      "position: fixed; top: 20px; right: 20px; background: var(--color-primary); color: white; padding: 1rem 2rem; border-radius: 0.5rem; z-index: 9999; transform: translateX(100%); transition: transform 0.3s ease-out;";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transform = "translateX(0)";
    }, 100);
    setTimeout(() => {
      toast.remove();
    }, 3000);
    this.reset();
  });
}

// Footer Form Subscription
const footerForm = document.querySelector(
  '.contact-form[data-testid="form-footer-contact"]'
);
if (footerForm) {
  footerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Subscribed! Welcome to the Funiro community.");
    this.reset();
  });
}

// Floating Chat Button
const chatBtn = document.getElementById("chatBtn");
if (chatBtn) {
  chatBtn.addEventListener("click", function () {
    // Placeholder: Open chat modal or link to live chat
    alert("Chat with Funiro support! (Integrate your chat service here)");
  });
}

// Parallax for Banner Image
const bannerImg = document.querySelector(".banner-img");
if (bannerImg) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    bannerImg.style.transform = `translateY(${rate}px) scale(1 + ${
      scrolled * 0.0003
    })`;
  });
}
// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  // Show/hide button on scroll
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      // Show after scrolling 300px
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top on click
  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// AOS Refresh for Privacy Policy
AOS.refresh();

// Enhanced AOS for Fade-Up Animations (Consistent with GSAP-like behavior)
AOS.init({
  duration: 700,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  once: true,
  offset: 100,
});

// Custom Fade-Up for Non-AOS Elements (Fallback to JS-based)
document.addEventListener("DOMContentLoaded", function () {
  const fadeUps = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeUps.forEach((el) => observer.observe(el));
});

// Smooth Hover Transitions for Buttons and Links
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap
      ? gsap.to(el, { scale: 1.05, duration: 0.3 })
      : (el.style.transform = "scale(1.05)");
  });
  el.addEventListener("mouseleave", () => {
    gsap
      ? gsap.to(el, { scale: 1, duration: 0.3 })
      : (el.style.transform = "scale(1)");
  });
});

// Note: If GSAP is not loaded, fallback to CSS transitions. To use GSAP, add <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script> before interior.js.

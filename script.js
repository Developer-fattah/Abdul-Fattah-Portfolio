// WhatsApp Contact Form Submission
function sendWhatsAppMessage() {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phoneNumber = "+923052021176"; // Replace with your actual WhatsApp number
  
    if (name && message) {
      const url = `https://wa.me/${phoneNumber}?text=Hi, I'm ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
      window.open(url, "_blank");
  
      const thankYou = document.getElementById("thankYouMessage");
      thankYou.classList.add("show");
      setTimeout(() => {
        thankYou.classList.remove("show");
      }, 4000);
    }
  
    return false;
  }
  
  // Testimonials Flip Logic
  const testimonials = [
    {
      name: 'Syed Fayiz',
      role: 'Product Manager, TechCorp',
      img: 'images/fayiz.jpg',
      text: '“A visionary frontend developer who made our app shine.”'
    },
    {
      name: 'Mark Smith',
      role: 'CEO, InnovateX',
      img: 'images/review-3.webp',
      text: '“Creative and reliable, delivered everything perfectly.”'
    },
    {
      name: 'Sara Wilson',
      role: 'Design Lead, Creatives.io',
      img: 'images/review-2.jpg',
      text: '“Great eye for design and details. Highly recommended!”'
    }
  ];
  
  const flipper = document.getElementById('testimonialFlipper');
  const indicators = document.getElementById('testimonialIndicators');
  let activeIndex = 0;
  
  function renderTestimonials() {
    flipper.innerHTML = '';
    indicators.innerHTML = '';
  
    testimonials.forEach((t, index) => {
      const card = document.createElement('div');
      card.className = 'testimonial-flip' + (index === 0 ? ' active' : '');
      card.innerHTML = `
        <img src="${t.img}" alt="${t.name}" class="testimonial-img mb-3">
        <h5>${t.name}</h5>
        <p class="text-muted">${t.role}</p>
        <p class="testimonial-text">${t.text}</p>
      `;
      flipper.appendChild(card);
  
      const btn = document.createElement('button');
      btn.className = index === 0 ? 'active' : '';
      btn.addEventListener('click', () => {
        activeIndex = index;
        showTestimonial(index);
        resetInterval();
      });
      indicators.appendChild(btn);
    });
  }
  
  function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-flip');
    const dots = document.querySelectorAll('#testimonialIndicators button');
  
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  function nextTestimonial() {
    activeIndex = (activeIndex + 1) % testimonials.length;
    showTestimonial(activeIndex);
  }
  
  let rotateInterval = setInterval(nextTestimonial, 6000);
  function resetInterval() {
    clearInterval(rotateInterval);
    rotateInterval = setInterval(nextTestimonial, 6000);
  }
  
  renderTestimonials();
  
  // Navbar Scroll Shadow
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
  
  // Typed.js for Hero
  var typed = new Typed("#typed-name", {
    strings: ["Abdul Fattah Jagirani.", "Abdul Fattah Jagirani."],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
  });
  
  // Cursor Effect
  const cursorDot = document.createElement('div');
  const cursorOutline = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  cursorOutline.classList.add('cursor-outline');
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);
  
  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    cursorDot.style.transform = `translate(${x}px, ${y}px)`;
    cursorOutline.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
  });
  
  // Preloader
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });
  const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("scroll-progress");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed(".typed-text", {
      strings: ["Frontend Developer", "UI/UX Enthusiast", "Creative Coder"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("typewriter-name");
    const text = "Fattah Jagirani";
    let index = 0;
    let isDeleting = false;
  
    function type() {
      if (isDeleting) {
        element.textContent = text.substring(0, index--);
      } else {
        element.textContent = text.substring(0, index++);
      }
  
      if (!isDeleting && index > text.length) {
        isDeleting = true;
        setTimeout(type, 1200); // Pause before deleting
        return;
      }
  
      if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(type, 500); // Pause before typing again
        return;
      }
  
      setTimeout(type, isDeleting ? 100 : 150);
    }
  
    type();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("typewriter-name");
    const text = "Fattah Jagirani";
    let index = 0;
  
    function type() {
      if (index <= text.length) {
        element.textContent = text.substring(0, index++);
        setTimeout(type, 120);
      } else {
        element.classList.remove("blinking"); // stop blinking cursor
      }
    }
  
    type();
  });
    
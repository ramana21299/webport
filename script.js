// Sidebar functionality
const sidebar = document.getElementById('sidebar');

function showNavbar() {
  sidebar.classList.add('show');
}

function hideNavbar() {
  sidebar.classList.remove('show');
}

// Download resume function
function downloadResume() {
  // Create a link element to download the actual PDF file
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // Path to your PDF file
  link.download = 'Venkata_Ramana_Seepana_Resume.pdf'; // Name for the downloaded file
  link.target = '_blank'; // Open in new tab if direct download fails
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Interactive Code Challenge Game
function checkAnswer(selectedAnswer) {
  const correctAnswer = 'b'; // The correct answer is B) 222
  const resultDiv = document.getElementById('challenge-result');
  const optionBtns = document.querySelectorAll('.option-btn');
  
  // Remove previous classes
  optionBtns.forEach(btn => {
    btn.classList.remove('correct', 'incorrect');
  });
  
  // Add correct/incorrect classes
  optionBtns.forEach(btn => {
    const btnAnswer = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    if (btnAnswer === correctAnswer) {
      btn.classList.add('correct');
    } else if (btnAnswer === selectedAnswer) {
      btn.classList.add('incorrect');
    }
  });
  
  // Show result
  resultDiv.style.display = 'block';
  if (selectedAnswer === correctAnswer) {
    resultDiv.textContent = '🎉 Correct! In JavaScript, 2 + "2" + 2 results in "222" due to type coercion.';
    resultDiv.className = 'challenge-result correct';
  } else {
    resultDiv.textContent = '❌ Incorrect! The answer is B) 222. In JavaScript, when you add a number to a string, the number gets converted to a string.';
    resultDiv.className = 'challenge-result incorrect';
  }
  
  // Disable buttons after answer
  optionBtns.forEach(btn => {
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
  });
}

// Add new challenge function
function newChallenge() {
  const resultDiv = document.getElementById('challenge-result');
  const optionBtns = document.querySelectorAll('.option-btn');
  
  // Reset everything
  resultDiv.style.display = 'none';
  optionBtns.forEach(btn => {
    btn.classList.remove('correct', 'incorrect');
    btn.disabled = false;
    btn.style.cursor = 'pointer';
  });
  
  // You can add more challenges here
  const challenges = [
    {
      question: 'What does this code output?',
      code: 'console.log(typeof null);',
      options: ['A) "null"', 'B) "object"', 'C) "undefined"', 'D) "number"'],
      correct: 'b'
    },
    {
      question: 'What is the result of this expression?',
      code: 'console.log([] + []);',
      options: ['A) []', 'B) ""', 'C) undefined', 'D) Error'],
      correct: 'b'
    }
  ];
  
  // For now, just reset to the original challenge
  // You can implement random challenge selection here
}

// Smooth scrolling function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill items
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.3s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Animate project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.2}s`;
    observer.observe(card);
  });

  // Animate stat items
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    item.style.transition = `all 0.4s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Animate contact items
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `all 0.4s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `all 0.6s ease ${index * 0.2}s`;
    observer.observe(item);
  });

  // Animate testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.2}s`;
    observer.observe(card);
  });

  // Animate blog cards
  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.2}s`;
    observer.observe(card);
  });
});

// Terminal animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize terminal animation
document.addEventListener('DOMContentLoaded', () => {
  const terminalLines = document.querySelectorAll('.code-line');
  
  terminalLines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = '1';
    }, index * 1000);
  });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
});

// Skill item hover effects
document.addEventListener('DOMContentLoaded', () => {
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1) rotate(0deg)';
    });
  });
});

// Project card click effects
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.transform = 'translateY(-10px)';
      }, 150);
    });
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar a[href^="#"]');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add active class styles to CSS
const style = document.createElement('style');
style.textContent = `
  .sidebar a.active {
    background: rgba(255, 255, 255, 0.2);
    border-left-color: #fff;
  }
  
  .sidebar a.active i {
    color: #fff;
  }
`;
document.head.appendChild(style);

// Mobile menu toggle (for smaller screens)
function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Add mobile menu button for smaller screens
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.onclick = toggleMobileMenu;
    
    document.body.appendChild(mobileMenuBtn);
    
    // Add mobile menu button styles
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
      .mobile-menu-btn {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }
      
      .mobile-menu-btn:hover {
        transform: scale(1.1);
      }
      
      @media (min-width: 769px) {
        .mobile-menu-btn {
          display: none;
        }
      }
    `;
    document.head.appendChild(mobileStyle);
  }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  
  if (window.innerWidth <= 768 && 
      !sidebar.contains(e.target) && 
      !mobileMenuBtn?.contains(e.target) &&
      !e.target.classList.contains('trigger-zone')) {
    sidebar.classList.remove('show');
  }
});

// Smooth reveal animations for sections
const revealSections = () => {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};

// Initialize section animations
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
  });
  
  // Initial check
  revealSections();
  
  // Check on scroll
  window.addEventListener('scroll', revealSections);
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

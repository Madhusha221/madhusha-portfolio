// ============================
// ScrollReveal Animations
// ============================

// Hero Section
ScrollReveal().reveal('.hero-left', { 
  origin: 'left', 
  distance: '50px', 
  duration: 1000, 
  delay: 300 
});
ScrollReveal().reveal('.hero-right', { 
  origin: 'right', 
  distance: '50px', 
  duration: 1000, 
  delay: 500 
});
ScrollReveal().reveal('.navbar', { 
  origin: 'top', 
  distance: '20px', 
  duration: 800, 
  delay: 200 
});

// About Section
ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});

// Contact Section
ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
});

// Services Section
ScrollReveal().reveal('.services .service-card', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  interval: 200, // reveal one by one
  delay: 300
});

// Skills Section
ScrollReveal().reveal('.skills .skill-bar', {
  origin: 'left',
  distance: '70px',
  duration: 1000,
  interval: 150,
  delay: 200
});

// Portfolio / Projects Section
ScrollReveal().reveal('.portfolio .project-card', {
  origin: 'bottom',
  distance: '70px',
  duration: 1000,
  interval: 200,
  delay: 200
});

// Footer Section
ScrollReveal().reveal('footer', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 200
});


// ============================
// Contact Form Submission
// ============================

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // Your FormSubmit endpoint (replace with your email if needed)
  const formAction = "https://formsubmit.co/madhushaa523@gmail.com";

  const formData = new FormData(form);
  fetch(formAction, {
      method: "POST",
      body: formData,
  })
  .then(() => {
      alert("✅ Email sent successfully!");
      form.reset();
  })
  .catch(() => {
      alert("❌ Failed to send email. Please try again.");
  });
}

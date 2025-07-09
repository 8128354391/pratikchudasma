document.addEventListener("DOMContentLoaded", function () {
  const bookBtn = document.getElementById("bookCallBtn");
  if (bookBtn) {
    bookBtn.addEventListener("click", function () {
      alert("Booking functionality coming soon!");
    });
  }
});

// Testimonial data
const testimonials = [
  {
    quote: '"Huy is phenomenal. An absolute pleasure to work with!"',
    author: "Pieter Pattyn",
    role: "Founder's Associate @Volup",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT", "SEO"],
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    quote: '"Pratik delivered beyond expectations. Highly recommended!"',
    author: "Sarah Lee",
    role: "CEO @StartupX",
    tags: ["UI/UX", "BRANDING"],
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    quote: '"A creative genius and a true professional."',
    author: "John Smith",
    role: "Marketing Lead @BigBrand",
    tags: ["MARKETING", "CONSULTING"],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&q=80",
  },
];

let currentTestimonial = 0;

function renderTestimonial(idx) {
  const t = testimonials[idx];
  document.getElementById("testimonialQuote").textContent = t.quote;
  document.getElementById("testimonialAuthor").textContent = t.author;
  document.getElementById("testimonialRole").textContent = t.role;
  document.getElementById("testimonialImage").src = t.image;
  document.getElementById("testimonialImage").alt = t.author;

  // Tags
  const tagsDiv = document.getElementById("testimonialTags");
  tagsDiv.innerHTML = "";
  t.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "testimonial-tag";
    span.textContent = tag;
    tagsDiv.appendChild(span);
  });
}

document.getElementById("testimonialPrev").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentTestimonial);
});
document.getElementById("testimonialNext").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  renderTestimonial(currentTestimonial);
});

// Initial render
renderTestimonial(currentTestimonial);

// Add this to script.js
document.querySelectorAll(".cta-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "#contact"; // or your booking link
  });
});

// Local time display (Melbourne, Australia)
function updateLocalTime() {
  const melTime = new Date().toLocaleTimeString("en-AU", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  document.getElementById("localTime").textContent = melTime + "  Gujarat";
}
setInterval(updateLocalTime, 1000);
updateLocalTime();

// Scroll to top button
document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Loader hide logic
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  // Keep loader for 5 seconds after load
  setTimeout(() => {
    loader.classList.add("hide");
    // Wait for the fade-out transition to finish before removing from layout
    setTimeout(() => (loader.style.display = "none"), 2000); // match transition duration
  }, 5000); // 5 seconds visible before fade-out
});

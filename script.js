// Contact form handler for E-Identity
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh
  document.getElementById("msg").innerText = "✅ Thank you! Your message has been sent.";
  this.reset(); // clear the form after submit
});
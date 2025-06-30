document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.textContent = "Application submitted successfully. We'll get in touch!";
  this.reset(); // Clear the form
});

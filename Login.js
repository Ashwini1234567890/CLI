document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Email validation
    if (!validateEmail(email)) {
      alert("⚠️ Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("🔒 Password must be at least 6 characters long.");
      passwordInput.focus();
      return;
    }

    // Simulated login success
    alert(`✅ Login successful!\n📧 Email: ${email}`);
    form.reset(); // Clear form after success
  });

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.toLowerCase());
  }
});

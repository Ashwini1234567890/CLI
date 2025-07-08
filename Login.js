document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
      showAlert("⚠️ Please enter a valid email.");
      emailInput.focus();
      return;
    }

    if (password.length < 6) {
      showAlert("🔒 Password must be at least 6 characters.");
      passwordInput.focus();
      return;
    }

    // Success
    alert(`✅ Welcome back!\nEmail: ${email}`);
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  function showAlert(message) {
    alert(message);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const messageDiv = document.querySelector('.message');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
      messageDiv.textContent = 'Success';
      messageDiv.style.color = 'green';
    } else {
      messageDiv.textContent = 'Please enter a valid email address.';
      messageDiv.style.color = 'red';
    }
  });
});
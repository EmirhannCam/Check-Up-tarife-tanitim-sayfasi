document.addEventListener('DOMContentLoaded', function() {
  const priceButtons = document.querySelectorAll('.package-btn');
  const formSection = document.querySelector('.health-form-container');

  priceButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      formSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
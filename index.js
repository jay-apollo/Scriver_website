document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Feedback when clicking demo buttons
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Request a Demo button clicked!');
      button.textContent = 'Loading...';
      setTimeout(() => {
        button.textContent = 'Request a Demo';
        window.location.href = 'demo.html'; // fixed path
      }, 800);
    });
  });

  // Quote rotation (optional)
  const quotes = [
    `"Scriber AI helped us increase our response rates by 40%! The personal touch makes all the difference." - Jane D.`,
    `"Our clients love the handwritten letters. It's a game-changer for our outreach strategy." - John S.`,
    `"Handwritten outreach has never been easier — we love Scriber AI." - Sarah M.`
  ];

  let currentQuoteIndex = 0;
  const quoteElements = document.querySelectorAll('blockquote');

  function rotateQuotes() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElements.forEach((el, i) => {
      el.textContent = quotes[(currentQuoteIndex + i) % quotes.length];
    });
  }

  if (quoteElements.length > 0) {
    setInterval(rotateQuotes, 6000);
  }

  // Handle form submission (for demo.html)
  const demoForm = document.querySelector('form');
  if (demoForm) {
    demoForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thanks! We’ll be in touch soon.');
      demoForm.reset();
    });
  }
});

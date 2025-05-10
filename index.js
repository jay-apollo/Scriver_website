// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Feedback when clicking demo buttons
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', () => {
    console.log('Request a Demo button clicked!');
    // Optional: add visual feedback
    button.textContent = 'Loading...';
    setTimeout(() => {
      button.textContent = 'Request a Demo';
      // Redirect (or simulate demo behavior)
      window.location.href = '/demo.html';
    }, 800);
  });
});

// Optional: Rotate quotes dynamically
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

// Start quote rotation every 6 seconds
setInterval(rotateQuotes, 6000);

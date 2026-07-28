// Get Involved Page - Donation Button Alert
document.getElementById('donateButton').addEventListener('click', function() {
    alert('Thank you for considering a donation! Please visit our donation page.');
});

// Contact Form Submission Handling
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById('formResponse').textContent = 'Thank you! Your message has been sent.';
});

// Blog Article Interaction (If needed)
const articles = document.querySelectorAll('ul li');
articles.forEach(article => {
    article.addEventListener('click', () => {
        alert(`You clicked on: ${article.innerText}`);
    });
});

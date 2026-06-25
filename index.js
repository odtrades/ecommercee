
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});







const toggleBtn = document.getElementById('menu-toggle-btn');
const buttonsPanel = document.querySelector('.navbar-buttons');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('is-open');
    buttonsPanel.classList.toggle('is-open');
});





const newsletterForm = document.querySelector('.footer-newsletter-form');
const emailWrapper = document.querySelector('.footer-email-textframe');
const emailInput = document.querySelector('.footer-email-textframe input');

if (newsletterForm && emailInput && emailWrapper) {
    newsletterForm.addEventListener('submit', (e) => {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            e.preventDefault(); // Stop submission
            
            // Apply the custom form error outline tracking shape
            emailWrapper.classList.add('field-error');
            
            // Optional: Clear error state automatically as soon as the user starts typing again
            emailInput.addEventListener('input', () => {
                emailWrapper.classList.remove('field-error');
            }, { once: true });
            
        } else {
            emailWrapper.classList.remove('field-error');
            alert("Thanks for subscribing!");
        }
    });
}






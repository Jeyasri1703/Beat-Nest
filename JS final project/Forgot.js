document.getElementById('forgot-form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }

    // If valid, form will submit
});

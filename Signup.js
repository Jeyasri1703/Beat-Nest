document.getElementById('signup-form').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username.length < 3) {
        alert('Username must be at least 3 characters.');
        e.preventDefault();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        e.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        e.preventDefault();
        return;
    }

    // Successful validation: Form submits naturally
   

});

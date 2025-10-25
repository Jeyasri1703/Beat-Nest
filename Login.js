document.getElementById('login-form').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
        e.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        e.preventDefault();
        return;
    }

    // On successful validation, form will submit
});

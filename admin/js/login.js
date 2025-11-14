document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        // In a real application, you would make an API call here.
        // For this demo, we'll use hardcoded credentials.
        if (username === 'admin' && password === 'password') {
            // Store authentication state in sessionStorage
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    });
});

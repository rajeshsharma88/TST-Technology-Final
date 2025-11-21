
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const users = DataManager.getUsers();
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Store authentication state in sessionStorage
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            sessionStorage.setItem('adminUser', JSON.stringify(user));
            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    });
});

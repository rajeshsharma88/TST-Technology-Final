(function() {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');

    // If not authenticated and not on the login page, redirect to login.
    // The check for 'index.html' prevents an infinite redirect loop.
    if (!isAuthenticated && !window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index.html';
    }
})();

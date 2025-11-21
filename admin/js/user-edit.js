
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    const pageTitle = document.getElementById('page-title');
    
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id') ? parseInt(urlParams.get('id'), 10) : null;
    let editingUser = null;

    if (userId) {
        pageTitle.textContent = 'Edit User';
        editingUser = DataManager.getUserById(userId);

        if (editingUser) {
            form.username.value = editingUser.username || '';
            form.password.value = editingUser.password || '';
            form.role.value = editingUser.role || 'admin';
        } else {
            alert('User not found!');
            window.location.href = 'users.html';
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = {
            id: userId,
            username: form.username.value,
            password: form.password.value,
            role: form.role.value
        };

        DataManager.saveUser(userData);

        alert('User saved successfully!');
        window.location.href = 'users.html';
    });
});

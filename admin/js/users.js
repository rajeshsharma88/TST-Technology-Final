
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('users-table-body');
    if (!tableBody) return;

    function renderTable() {
        const users = DataManager.getUsers();
        tableBody.innerHTML = '';
        
        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.role}</td>
                    <td class="actions-cell">
                        <a href="user-edit.html?id=${user.id}" class="btn btn-secondary btn-sm">Edit</a>
                        <button class="btn btn-danger btn-sm" data-id="${user.id}">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    renderTable();

    tableBody.addEventListener('click', (e) => {
        if (e.target.matches('button.btn-danger')) {
            const id = parseInt(e.target.dataset.id, 10);
            if (confirm(`Are you sure you want to delete user #${id}?`)) {
                const success = DataManager.deleteUser(id);
                if (success) renderTable();
            }
        }
    });
});

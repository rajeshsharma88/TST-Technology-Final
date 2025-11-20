document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('clients-table-body');
    if (!tableBody) return;

    function renderTable() {
        const clients = DataManager.getClients();
        tableBody.innerHTML = '';
        if (clients.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" style="text-align: center;">No clients found.</td></tr>';
            return;
        }

        clients.forEach(client => {
            const row = `
                <tr>
                    <td>${client.id}</td>
                    <td><img src="${client.logo_image}" alt="${client.client_name}" style="width: 60px; height: 60px; object-fit: contain; background-color: #eee;"></td>
                    <td>${client.client_name}</td>
                    <td class="actions-cell">
                        <a href="client-edit.html?id=${client.id}" class="btn btn-secondary btn-sm">Edit</a>
                        <button class="btn btn-danger btn-sm" data-id="${client.id}">Delete</button>
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
            if (confirm(`Are you sure you want to delete client #${id}?`)) {
                DataManager.deleteClient(id);
                renderTable();
            }
        }
    });
});
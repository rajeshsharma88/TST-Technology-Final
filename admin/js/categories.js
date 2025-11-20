document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('categories-table-body');
    if (!tableBody) return;

    function renderTable() {
        const categories = DataManager.getCategories();
        tableBody.innerHTML = '';
        if (categories.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No categories found.</td></tr>';
            return;
        }

        categories.forEach(category => {
            const row = `
                <tr>
                    <td>${category.id}</td>
                    <td><img src="${category.thumbnail}" alt="${category.name}" style="width: 60px; height: 60px; object-fit: cover;"></td>
                    <td>${category.name}</td>
                    <td>${category.slug}</td>
                    <td>${category.description}</td>
                    <td class="actions-cell">
                        <a href="category-edit.html?id=${category.id}" class="btn btn-secondary btn-sm">Edit</a>
                        <button class="btn btn-danger btn-sm" data-id="${category.id}">Delete</button>
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
            if (confirm(`Are you sure you want to delete category #${id}?`)) {
                DataManager.deleteCategory(id);
                renderTable();
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('products-table-body');
    if (!tableBody) return;

    function renderTable() {
        const products = DataManager.getProducts();
        tableBody.innerHTML = '';
        if (products.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center;">No products found.</td></tr>';
            return;
        }

        products.forEach(product => {
            const row = `
                <tr>
                    <td>${product.id}</td>
                    <td><img src="${product.main_image}" alt="${product.title}" style="width: 60px; height: 60px; object-fit: cover;"></td>
                    <td>${product.title}</td>
                    <td>${product.category}</td>
                    <td>$${(product.discount_price || product.price).toLocaleString()}</td>
                    <td><span class="badge ${product.stock_status === 'in_stock' ? 'badge-success' : 'badge-danger'}">${product.stock_status.replace('_', ' ')}</span></td>
                    <td>${product.is_featured ? 'Yes' : 'No'}</td>
                    <td class="actions-cell">
                        <a href="product-edit.html?id=${product.id}" class="btn btn-secondary btn-sm">Edit</a>
                        <button class="btn btn-danger btn-sm" data-id="${product.id}">Delete</button>
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
            if (confirm(`Are you sure you want to delete product #${id}? This action cannot be undone.`)) {
                DataManager.deleteProduct(id);
                renderTable(); // Re-render the table to reflect the deletion
            }
        }
    });
});

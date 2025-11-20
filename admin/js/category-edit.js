document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('category-form');
    const pageTitle = document.getElementById('page-title');
    
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id') ? parseInt(urlParams.get('id'), 10) : null;
    let editingCategory = null;

    if (categoryId) {
        pageTitle.textContent = 'Edit Category';
        editingCategory = DataManager.getCategoryById(categoryId);

        if (editingCategory) {
            form.name.value = editingCategory.name || '';
            form.slug.value = editingCategory.slug || '';
            form.description.value = editingCategory.description || '';
            form.thumbnail.value = editingCategory.thumbnail || '';
        } else {
            alert('Category not found!');
            window.location.href = 'categories.html';
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const categoryData = {
            id: categoryId,
            name: form.name.value,
            slug: form.slug.value,
            description: form.description.value,
            thumbnail: form.thumbnail.value,
            productCount: editingCategory ? editingCategory.productCount : 0 // Preserve product count
        };

        DataManager.saveCategory(categoryData);

        alert('Category saved successfully!');
        window.location.href = 'categories.html';
    });
});
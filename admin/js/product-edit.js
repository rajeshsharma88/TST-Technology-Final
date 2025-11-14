document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const pageTitle = document.getElementById('page-title');
    const categorySelect = document.getElementById('category_slug');
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') ? parseInt(urlParams.get('id'), 10) : null;
    let editingProduct = null;
    
    // Populate categories dropdown
    const categories = DataManager.getCategories();
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.slug;
        option.textContent = cat.name;
        categorySelect.appendChild(option);
    });

    if (productId) {
        pageTitle.textContent = 'Edit Product';
        editingProduct = DataManager.getProductById(productId);

        if (editingProduct) {
            // Populate form with existing product data
            form.title.value = editingProduct.title || '';
            form.model_number.value = editingProduct.model_number || '';
            form.sku.value = editingProduct.sku || '';
            form.dimensions.value = editingProduct.dimensions || '';
            form.warranty_info.value = editingProduct.warranty_info || '';
            form.description.value = editingProduct.description || '';
            form.price.value = editingProduct.price || 0;
            form.discount_price.value = editingProduct.discount_price || '';
            form.category_slug.value = editingProduct.category_slug || '';
            form.stock_status.value = editingProduct.stock_status || 'in_stock';
            form.main_image.value = editingProduct.main_image || '';
            form.is_featured.checked = editingProduct.is_featured || false;
            
            form.features.value = (editingProduct.features || []).join('\n');
            form.specifications.value = (editingProduct.specifications || []).map(s => `${s.name}:${s.value}`).join('\n');
        } else {
            alert('Product not found!');
            window.location.href = 'products.html';
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Helpers to parse textareas into structured data
        const features = form.features.value.split('\n').map(line => line.trim()).filter(line => line !== '');
        const specifications = form.specifications.value.split('\n').map(line => line.trim()).filter(line => line !== '' && line.includes(':')).map(line => {
            const [name, ...valueParts] = line.split(':');
            return { name: name.trim(), value: valueParts.join(':').trim() };
        });
        
        const selectedCategory = categories.find(c => c.slug === form.category_slug.value);

        const productData = {
            id: productId,
            title: form.title.value,
            model_number: form.model_number.value,
            sku: form.sku.value,
            dimensions: form.dimensions.value,
            warranty_info: form.warranty_info.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            discount_price: form.discount_price.value ? parseFloat(form.discount_price.value) : undefined,
            category: selectedCategory ? selectedCategory.name : '',
            category_slug: form.category_slug.value,
            stock_status: form.stock_status.value,
            main_image: form.main_image.value,
            is_featured: form.is_featured.checked,
            features,
            specifications,
            slug: editingProduct ? editingProduct.slug : '', // Slug is generated for new products in DataManager
        };

        DataManager.saveProduct(productData);

        alert('Product saved successfully!');
        window.location.href = 'products.html';
    });
});

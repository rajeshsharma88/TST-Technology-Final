const DataManager = {
    // Initialize data from static source if not in localStorage
    initializeData: () => {
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify(staticData.products));
        }
        if (!localStorage.getItem('categories')) {
            localStorage.setItem('categories', JSON.stringify(staticData.categories));
        }
    },
    
    getProducts: () => {
        return JSON.parse(localStorage.getItem('products') || '[]');
    },

    getProductById: (id) => {
        const products = DataManager.getProducts();
        return products.find(p => p.id === id);
    },

    saveProduct: (productToSave) => {
        let products = DataManager.getProducts();
        if (productToSave.id) { // Update existing
            products = products.map(p => p.id === productToSave.id ? productToSave : p);
        } else { // Create new
            const maxId = products.reduce((max, p) => p.id > max ? p.id : max, 0);
            productToSave.id = maxId + 1;
            // Create slug from title
            productToSave.slug = productToSave.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            products.push(productToSave);
        }
        localStorage.setItem('products', JSON.stringify(products));
    },
    
    deleteProduct: (id) => {
        let products = DataManager.getProducts();
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
    },

    getCategories: () => {
        return JSON.parse(localStorage.getItem('categories') || '[]');
    }
};

// Initialize data on script load
DataManager.initializeData();

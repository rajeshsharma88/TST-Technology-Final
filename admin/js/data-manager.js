
const DataManager = {
    // Initialize data from static source if not in localStorage
    initializeData: () => {
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify(staticData.products));
        }
        if (!localStorage.getItem('categories')) {
            localStorage.setItem('categories', JSON.stringify(staticData.categories));
        }
        if (!localStorage.getItem('clientData')) {
            localStorage.setItem('clientData', JSON.stringify(staticData.clients));
        }
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(staticData.users));
        }
    },
    
    // --- Products ---
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
            // Create slug from title if not present
            if (!productToSave.slug) {
                productToSave.slug = productToSave.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            }
            products.push(productToSave);
        }
        localStorage.setItem('products', JSON.stringify(products));
    },
    
    deleteProduct: (id) => {
        let products = DataManager.getProducts();
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
    },

    // --- Categories ---
    getCategories: () => {
        return JSON.parse(localStorage.getItem('categories') || '[]');
    },

    getCategoryById: (id) => {
        const categories = DataManager.getCategories();
        return categories.find(c => c.id === id);
    },

    saveCategory: (categoryToSave) => {
        let categories = DataManager.getCategories();
        if (categoryToSave.id) { // Update existing
            categories = categories.map(c => c.id === categoryToSave.id ? categoryToSave : c);
        } else { // Create new
            const maxId = categories.reduce((max, c) => c.id > max ? c.id : max, 0);
            categoryToSave.id = maxId + 1;
            // Create slug from name if not present
            if (!categoryToSave.slug) {
                categoryToSave.slug = categoryToSave.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            }
            // Default product count to 0 for new categories
            if (categoryToSave.productCount === undefined) categoryToSave.productCount = 0;
            categories.push(categoryToSave);
        }
        localStorage.setItem('categories', JSON.stringify(categories));
    },

    deleteCategory: (id) => {
        let categories = DataManager.getCategories();
        categories = categories.filter(c => c.id !== id);
        localStorage.setItem('categories', JSON.stringify(categories));
    },

    // --- Clients ---
    getClients: () => {
        return JSON.parse(localStorage.getItem('clientData') || '[]');
    },

    getClientById: (id) => {
        const clients = DataManager.getClients();
        return clients.find(c => c.id === id);
    },

    saveClient: (clientToSave) => {
        let clients = DataManager.getClients();
        if (clientToSave.id) { // Update existing
            clients = clients.map(c => c.id === clientToSave.id ? clientToSave : c);
        } else { // Create new
            const maxId = clients.reduce((max, c) => c.id > max ? c.id : max, 0);
            clientToSave.id = maxId + 1;
            clients.push(clientToSave);
        }
        localStorage.setItem('clientData', JSON.stringify(clients));
    },

    deleteClient: (id) => {
        let clients = DataManager.getClients();
        clients = clients.filter(c => c.id !== id);
        localStorage.setItem('clientData', JSON.stringify(clients));
    },

    // --- Inquiries ---
    getInquiries: () => {
        return JSON.parse(localStorage.getItem('inquiries') || '[]');
    },

    deleteInquiry: (id) => {
        let inquiries = DataManager.getInquiries();
        inquiries = inquiries.filter(i => i.id !== id);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
    },

    // --- Users ---
    getUsers: () => {
        return JSON.parse(localStorage.getItem('users') || '[]');
    },

    getUserById: (id) => {
        const users = DataManager.getUsers();
        return users.find(u => u.id === id);
    },

    saveUser: (userToSave) => {
        let users = DataManager.getUsers();
        if (userToSave.id) { // Update
            users = users.map(u => u.id === userToSave.id ? userToSave : u);
        } else { // Create
            const maxId = users.reduce((max, u) => u.id > max ? u.id : max, 0);
            userToSave.id = maxId + 1;
            users.push(userToSave);
        }
        localStorage.setItem('users', JSON.stringify(users));
    },

    deleteUser: (id) => {
        let users = DataManager.getUsers();
        // Prevent deleting the last user to avoid lockout
        if (users.length <= 1) {
            alert('Cannot delete the last user.');
            return false;
        }
        users = users.filter(u => u.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
};

// Initialize data on script load
DataManager.initializeData();

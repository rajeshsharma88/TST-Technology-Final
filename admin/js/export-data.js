
document.addEventListener('DOMContentLoaded', () => {
    generateProductCode();
    generateCategoryCode();
    generateClientCode();
});

function generateProductCode() {
    const products = DataManager.getProducts();
    const code = `import { Product } from '../types';

const staticProducts: Product[] = ${JSON.stringify(products, null, 4)};

let products: Product[];

try {
  const storedProductsJSON = localStorage.getItem('products');
  if (storedProductsJSON) {
    products = JSON.parse(storedProductsJSON);
  } else {
    products = staticProducts;
    localStorage.setItem('products', JSON.stringify(staticProducts));
  }
} catch (error) {
  console.error('Error handling products from localStorage:', error);
  products = staticProducts;
}

export { products };`;

    document.getElementById('products-code').value = code;
}

function generateCategoryCode() {
    const categories = DataManager.getCategories();
    const code = `import { Category } from '../types';

const staticCategories: Category[] = ${JSON.stringify(categories, null, 4)};

let categories: Category[];

try {
  const storedCategoriesJSON = localStorage.getItem('categories');
  if (storedCategoriesJSON) {
    categories = JSON.parse(storedCategoriesJSON);
  } else {
    categories = staticCategories;
    localStorage.setItem('categories', JSON.stringify(staticCategories));
  }
} catch (error) {
  console.error('Error handling categories from localStorage:', error);
  categories = staticCategories;
}

export { categories };`;

    document.getElementById('categories-code').value = code;
}

function generateClientCode() {
    const clients = DataManager.getClients();
    const code = `import { Client } from '../types';

const staticClientData: Client[] = ${JSON.stringify(clients, null, 4)};

let clientData: Client[];

try {
  const storedClientDataJSON = localStorage.getItem('clientData');
  if (storedClientDataJSON) {
    clientData = JSON.parse(storedClientDataJSON);
  } else {
    clientData = staticClientData;
    localStorage.setItem('clientData', JSON.stringify(staticClientData));
  }
} catch (error) {
  console.error('Error handling clientData from localStorage:', error);
  clientData = staticClientData;
}

export { clientData };`;

    document.getElementById('clients-code').value = code;
}

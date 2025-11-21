import { Category } from '../types';

const staticCategories: Category[] = [
  {
    id: 1,
    name: 'Web Development',
    slug: 'web-development',
    description: 'Custom websites and applications.',
    thumbnail: 'https://picsum.photos/seed/cat1/400/400',
    productCount: 5,
  },
  {
    id: 2,
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'iOS and Android apps for your business.',
    thumbnail: 'https://picsum.photos/seed/cat2/400/400',
    productCount: 4,
  },
  {
    id: 3,
    name: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Scalable and secure cloud infrastructure.',
    thumbnail: 'https://picsum.photos/seed/cat3/400/400',
    productCount: 6,
  },
  {
    id: 4,
    name: 'IT Consulting',
    slug: 'it-consulting',
    description: 'Expert advice to drive your strategy.',
    thumbnail: 'https://picsum.photos/seed/cat4/400/400',
    productCount: 3,
  },
  {
    id: 5,
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Grow your online presence and reach.',
    thumbnail: 'https://picsum.photos/seed/cat5/400/400',
    productCount: 4,
  },
  {
    id: 6,
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Protect your valuable digital assets.',
    thumbnail: 'https://picsum.photos/seed/cat6/400/400',
    productCount: 3,
  },
];

let categories: Category[];

try {
  const storedCategoriesJSON = typeof localStorage !== 'undefined' ? localStorage.getItem('categories') : null;
  if (storedCategoriesJSON) {
    const parsed = JSON.parse(storedCategoriesJSON);
    // Use stored categories only when it's a non-empty array; otherwise fallback.
    if (Array.isArray(parsed) && parsed.length > 0) {
      categories = parsed as Category[];
    } else {
      categories = staticCategories;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('categories', JSON.stringify(staticCategories));
      }
    }
  } else {
    categories = staticCategories;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('categories', JSON.stringify(staticCategories));
    }
  }
} catch (error) {
  console.error('Error handling categories from localStorage:', error);
  categories = staticCategories;
}

export { categories };


export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  background_image: string;
  cta1_text: string;
  cta1_link: string;
  cta2_text?: string;
  cta2_link?: string;
}

export interface Client {
  id: number;
  client_name: string;
  logo_image: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  productCount: number;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  model_number: string;
  description: string;
  features: string[];
  specifications: { name: string; value: string; }[];
  price: number;
  discount_price?: number;
  category: string;
  category_slug: string;
  main_image: string;
  stock_status: 'in_stock' | 'out_of_stock';
  is_featured: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  main_image: string;
  author_name: string;
  author_avatar: string;
  published_date: string;
}
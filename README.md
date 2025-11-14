# TST Technologies Website

This is a modern, responsive frontend for TST Technologies, a fictional IT solutions company. The project showcases a dynamic hero slider, a comprehensive product showcase with filtering and pagination, category pages, and an inquiry modal. It is built using React, TypeScript, and Tailwind CSS.

## Features

- **Fully Responsive Design:** Adapts seamlessly to all screen sizes, from mobile to desktop.
- **Dynamic Hero Slider:** Engaging hero section with auto-playing slides.
- **Product Showcase:**
    - Advanced filtering by category, search term, and stock status.
    - Sorting options (Featured, Price, Name).
    - Pagination to handle a large number of products.
- **Category & Product Pages:** Dedicated pages for categories and detailed product views.
- **Blog Section:** A simple blog with a listing page and detail pages for articles.
- **Interactive Inquiry Modal:** A pop-up form for users to make general or product-specific inquiries.
- **Admin Panel:** A basic, password-protected admin section.
- **Static Pages:** Includes "About Us" and "Contact Us" pages.

## Tech Stack

- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router

## Development Steps

This project is designed to run in a web-based development environment. No local installation or build steps are required.

1.  **View the Website:** The main website is available at the root URL.
2.  **Explore Pages:** Use the navigation bar to visit different pages like Home, Products, Categories, Blog, etc.
3.  **Interact with Components:**
    - Use the filters on the Products page to narrow down the product list.
    - Click the "Get a Quote" or "Quick Inquiry" buttons to open the inquiry modal.

## Production Deployment

To run this application on a production website, you need to build the project into static files and host them on a web server. Here is a step-by-step process:

### Prerequisites
- A web server (e.g., Nginx, Apache) or a static hosting provider (e.g., Vercel, Netlify, AWS S3).
- Node.js and npm/yarn installed on your local machine to run the build command.

### Step 1: Build the Project
First, you need to compile the React/TypeScript application into static HTML, CSS, and JavaScript files. Assuming a standard React project setup (like Create React App or Vite), you would run the following command in your project's root directory:

```bash
# Using npm
npm install
npm run build

# Or using yarn
yarn install
yarn build
```
This command will create a `build` (or `dist`) folder containing the optimized, production-ready static assets.

### Step 2: Deploy Static Files
Upload the contents of the `build` (or `dist`) folder to the root directory of your web server or hosting provider. This includes `index.html`, the static CSS/JS bundles, and any other assets.

The `admin` folder and its contents should also be uploaded to maintain the admin panel functionality.

### Step 3: Configure Server for SPA Routing
Since this is a Single Page Application (SPA) using React Router, you must configure your server to handle client-side routing correctly. All requests for non-existent paths should be redirected to the root `index.html` file. This allows React Router to take over and display the correct page.

**Example for Nginx:**
Add the following `try_files` directive to your server block configuration:
```nginx
server {
  # ... other server config
  location / {
    root /path/to/your/project/build;
    try_files $uri /index.html;
  }
}
```

**Example for Apache:**
Create a `.htaccess` file in your root deployment directory with the following content:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```
Most modern static hosting providers (like Vercel or Netlify) handle this SPA routing configuration automatically.

## Admin Panel Access

A simple admin panel is included for demonstration purposes.

1.  **Navigate to the Login Page:** Access the admin login page by visiting `/admin/index.html` in your browser. A link is also available in the website footer.
2.  **Enter Credentials:**
    - **Username:** `admin`
    - **Password:** `password`
3.  **Access Dashboard:** Upon successful login, you will be redirected to the admin dashboard.

## File Structure

```
├── admin/
│   ├── css/
│   │   └── admin-style.css   # Styles for admin pages
│   ├── js/
│   │   ├── auth.js           # Protects dashboard page
│   │   └── login.js          # Handles login logic
│   ├── dashboard.html        # Admin dashboard page
│   └── index.html            # Admin login page
├── components/
│   ├── blog/
│   ├── home/
│   ├── layout/
│   ├── products/
│   ├── shared/
│   └── ui/
├── data/                     # Mock data files
├── pages/                    # Page components
├── App.tsx                   # Main application component with routing
├── index.html                # Main HTML entry point for the React app
├── index.tsx                 # React entry point
├── types.ts                  # TypeScript type definitions
└── README.md                 # This file
```
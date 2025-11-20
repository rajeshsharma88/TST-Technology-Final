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
- **Admin Panel:** A basic, password-protected admin section with full CRUD (Create, Read, Update, Delete) functionality for products, categories, and client logos.
- **Static Pages:** Includes "About Us" and "Contact Us" pages.
- **Dynamic Content:** Product data can be managed from the admin panel, with changes reflected instantly on the live site (data is stored in browser's localStorage).

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

## Deployment Guide (cPanel / Shared Hosting)

Since this application consists of a **React Frontend** and a **Static HTML Admin Panel**, deploying to cPanel shared hosting is straightforward involving building the app and configuring server routing.

### Phase 1: Prepare the Build Locally

1.  **Build the React App**
    Open your terminal (command prompt) in the project root directory and run:
    ```bash
    npm install
    npm run build
    ```
    This will create a new folder named `dist` (or sometimes `build`) in your project root containing your optimized website.

2.  **Include the Admin Panel**
    Since your `admin` folder is static HTML/JS outside the React logic, it must be manually included.
    *   Locate the `dist` folder created in step 1.
    *   Copy your entire `admin` folder (from your source code).
    *   Paste it **inside** the `dist` folder.
    *   *Structure check:* You should now have `dist/index.html`, `dist/assets/...`, and `dist/admin/index.html`.

3.  **Create the `.htaccess` File (Crucial for React Router)**
    React is a Single Page Application (SPA). If a user visits `yourdomain.com/products` and refreshes, the server needs to know to load `index.html` instead of looking for a directory named "products".
    *   Inside your `dist` folder, create a new text file named `.htaccess` (ensure there is a dot at the start).
    *   Paste the following code into it:
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

4.  **Zip the Contents**
    *   Go **inside** the `dist` folder.
    *   Select all files (the `assets` folder, `admin` folder, `index.html`, and `.htaccess`).
    *   Right-click and Zip them into a file named `deploy.zip`.

### Phase 2: Upload to cPanel

1.  **Log in to cPanel:** Log in to your hosting provider's cPanel dashboard.
2.  **Open File Manager:** Find the "Files" section and click on "File Manager".
3.  **Navigate to Public Folder:**
    *   For main domain: Go to `public_html`.
    *   For subdomain: Navigate to the specific folder for that subdomain.
4.  **Clean the Directory:** Remove default files (like `default.html` or `cgi-bin`) to ensure your app loads correctly.
5.  **Upload:**
    *   Click "Upload" in the top toolbar.
    *   Drag and drop your `deploy.zip` file.
    *   Wait for the progress bar to turn green.
6.  **Extract:**
    *   Right-click on `deploy.zip` in the file manager.
    *   Select "Extract" and extract to the current directory.
    *   Once extracted, you can delete `deploy.zip`.

### Phase 3: Verification

1.  **Check the Main Site:** Visit your domain. Navigate to a sub-page (e.g., Products) and refresh the browser. If the page reloads without a 404 error, your `.htaccess` is working.
2.  **Check the Admin Panel:** Visit `www.yourdomain.com/admin/`.
    *   **Username:** `admin`
    *   **Password:** `password`

### Troubleshooting

-   **White Screen:** If the site loads a white screen, check the browser console (F12). If hosting in a subfolder (e.g., `domain.com/app`), you may need to configure the `base` property in your vite config before building.
-   **404 on Refresh:** Ensure the `.htaccess` file exists and is located in the same directory as `index.html`.
-   **Data Not Saving:** Changes in the Admin panel are saved to `localStorage`. Since there is no backend database, changes are local to the browser you are using.

## Content Management Guide

Since this is a **Static Web App** (no backend database), content updates work differently than a CMS like WordPress.

### 1. Managing Images
The app does not support direct file uploads via the Admin Panel because there is no backend server. You must upload images manually via cPanel.

1.  **Log in to cPanel** and open **File Manager**.
2.  Navigate to your website's root folder (e.g., `public_html`).
3.  Create a folder named `assets` if it doesn't exist.
4.  **Upload** your image file (e.g., `new-client-logo.png`).
5.  The **URL** for this image will be `/assets/new-client-logo.png`. Use this URL in the Admin Panel.

### 2. Managing Products, Collections, and Clients

There are two methods to manage content:

#### Method A: Admin Panel (For Quick Updates & Testing)
*Note: Changes made via the Admin Panel are saved to your **browser's Local Storage**. They are visible ONLY to you on that specific browser. This is perfect for testing or demos.*

1.  **Login:** Go to `yourdomain.com/admin/`.
    *   **User:** `admin`
    *   **Pass:** `password`
2.  **Products:** Click "Products" in the sidebar. Use the "Add New Product" button or "Edit/Delete" buttons.
3.  **Collections (Categories):** Click "Categories" in the sidebar to manage product categories.
4.  **Clients:** Click "Clients" in the sidebar to add or remove logos from the "Trusted Clients" homepage section.

#### Method B: Source Code (For Permanent Public Changes)
To make changes visible to **all visitors permanently**, you should update the source data files and redeploy the app.

**To Update Products:**
1.  Open `data/productData.ts`.
2.  Add a new object to the `staticProducts` array.
3.  Save the file.

**To Update Collections (Categories):**
1.  Open `data/categoryData.ts`.
2.  Add or modify objects in the `staticCategories` array.

**To Update Client Logos:**
1.  Open `data/clientData.ts`.
2.  Add a new client object:
    ```typescript
    { 
      id: 13, 
      client_name: 'New Client Name', 
      logo_image: '/assets/logo.png' // Ensure you uploaded this image to cPanel
    }
    ```

**After updating source files:**
1.  Run `npm run build`.
2.  Follow the **Deployment Guide** above to upload the new `dist` folder to cPanel.

## File Structure

```
├── admin/
│   ├── css/
│   │   └── admin-style.css   # Styles for admin pages
│   ├── js/
│   │   ├── auth.js           # Protects dashboard page
│   │   ├── login.js          # Handles login logic
│   │   ├── data-manager.js   # Handles localStorage data for admin
│   │   ├── static-data.js    # Holds initial data for admin
│   │   ├── products.js       # Logic for product list page
│   │   ├── product-edit.js   # Logic for product edit page
│   │   ├── categories.js     # Logic for category list
│   │   ├── category-edit.js  # Logic for category edit
│   │   ├── clients.js        # Logic for clients list
│   │   └── client-edit.js    # Logic for client edit
│   ├── dashboard.html        # Admin dashboard page
│   ├── index.html            # Admin login page
│   ├── products.html         # Product management page
│   ├── product-edit.html     # Product creation/editing page
│   ├── categories.html       # Category management page
│   ├── category-edit.html    # Category creation/editing page
│   ├── clients.html          # Client management page
│   └── client-edit.html      # Client creation/editing page
├── components/
├── data/                     # Mock data files with localStorage logic
├── pages/                    # Page components
├── App.tsx                   # Main application component with routing
├── index.html                # Main HTML entry point for the React app
├── index.tsx                 # React entry point
├── types.ts                  # TypeScript type definitions
└── README.md                 # This file
```
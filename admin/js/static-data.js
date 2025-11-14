const staticData = {
    products: [
        {
            id: 1,
            title: "Enterprise Web Application",
            slug: "enterprise-web-application",
            model_number: "EWA-2024-PRO",
            description: "Scalable web application built with modern technologies for large businesses, focusing on performance, security, and maintainability.",
            features: [
                "Microservices architecture for scalability",
                "Role-based access control (RBAC)",
                "Advanced analytics dashboard",
                "Third-party API integration support",
                "CI/CD pipeline setup included"
            ],
            specifications: [
                { name: "Backend Framework", value: "Node.js (Express) / Django" },
                { name: "Frontend Framework", value: "React with TypeScript" },
                { name: "Database", value: "PostgreSQL / MongoDB" },
                { name: "Deployment", value: "Docker & Kubernetes" },
                { name: "Initial User Capacity", value: "100,000 users" }
            ],
            price: 10000,
            discount_price: 7999,
            category: "Web Development",
            category_slug: "web-development",
            main_image: "https://picsum.photos/seed/prod1/400/400",
            stock_status: "in_stock",
            is_featured: true,
        },
        {
            id: 2,
            title: "E-commerce Platform",
            slug: "ecommerce-platform",
            model_number: "ECP-2024-STD",
            description: "A complete solution for your online store with payment gateway integration, inventory management, and customer relationship tools.",
            features: [
                "Secure payment gateway integration (Stripe, PayPal)",
                "Product and inventory management system",
                "Customer account and order history",
                "Discount and coupon code engine",
                "Responsive design for mobile shopping"
            ],
            specifications: [
                { name: "Platform", value: "Shopify / Magento / Custom" },
                { name: "Payment Integrations", value: "Stripe, PayPal, Braintree" },
                { name: "Admin Panel", value: "Included" },
                { name: "Hosting", value: "Managed Cloud Hosting" },
                { name: "Support", value: "24/7 Technical Support" }
            ],
            price: 5000,
            category: "Web Development",
            category_slug: "web-development",
            main_image: "https://picsum.photos/seed/prod2/400/400",
            stock_status: "in_stock",
            is_featured: true,
        },
        {
            id: 3,
            title: "iOS & Android Mobile App",
            slug: "ios-android-mobile-app",
            model_number: "NMA-2024-PRO",
            description: "Native mobile application for both iOS and Android platforms, designed for optimal performance and user experience.",
            features: [
                "Native performance on iOS and Android",
                "Push notifications",
                "Offline mode capabilities",
                "App Store & Google Play submission",
                "Analytics and crash reporting"
            ],
            specifications: [
                { name: "iOS Language", value: "Swift" },
                { name: "Android Language", value: "Kotlin" },
                { name: "Backend API", value: "RESTful or GraphQL" },
                { name: "Database", value: "Firebase / AWS DynamoDB" },
                { name: "UI/UX Design", value: "Included (Figma)" }
            ],
            price: 15000,
            category: "Mobile App Development",
            category_slug: "mobile-app-development",
            
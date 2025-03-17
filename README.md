# Ecommerce Follow Along Project

Welcome to the "Ecommerce Follow Along Project". This is a hands-on project where we will build a complete e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

## Milestone 1: Project Overview

### 1. Understanding the MERN Stack:

- **MongoDB**: A database for storing application data in a flexible, document-based format.
- **Express.js**: A backend web application framework for building APIs and handling server logic.
- **React.js**: A frontend JavaScript library for building user interfaces.
- **Node.js**: A runtime environment that allows JavaScript to run on the server.

### 2. REST API Structure

REST APIs are used to allow communication between the frontend and backend.

We'll create APIs for:

- **User Authentication**: Allowing users to register and log in.
- **Product Management**: Adding, updating, and retrieving product data.
- **Order Handling**: Managing customer orders.

### 3. Database Schema Design

We'll learn how to design and organize data using MongoDB. A schema helps us define how the data is stored and related.

### 4. Authentication

Authentication ensures only the right people can access certain features. For example:

- Users need to log in to place orders or see their personal data.
- It keeps the app secure by verifying users' identities.

## Milestone 2:

- Created a login page in the frontend.

## Milestone 3:

- Set up dedicated folders for organizing backend code effectively.
- Initialized and configured a Node.js server to handle API requests.
- Connected the application to MongoDB to store and manage data.
- Implemented basic error handling to ensure smooth server operation.

## Milestone 4:

- Created a User Model to define how user data is structured in the database.
- Developed a User Controller to manage user interactions, like adding or retrieving data.
- Configured Multer to handle file uploads, allowing users to store files such as images.

## Milestone 5:
In this milestone, I built the Sign-Up page for user registration using HTML and CSS. I implemented form validation to ensure valid inputs, like email format and password security. This enhances user experience and prevents errors. All changes have been committed and pushed to the repository.

## Milestone 6 :
In this milestone, I created a backend signup API that securely stores user data. Passwords are encrypted using bcrypt before saving to MongoDB. The API ensures secure user authentication and data privacy. All changes are committed and pushed.

## Milestone 7:

In this milestone, we implemented user login authentication by validating credentials and comparing encrypted passwords using bcrypt. The process involves retrieving user data, hashing the entered password, and matching it with the stored hash. If authenticated, access is granted; otherwise, an error is returned. This enhances security and protects user data.

## Milestone 8
In this milestone, we created a reusable product card component and designed a homepage to display multiple cards dynamically. The component receives product details as props and is rendered using array mapping. This improves UI consistency, enhances user experience, and maintains an organized layout for showcasing products effectively.

## Milestone 9 :
In this milestone, we created a product page for the e-commerce website. The page displays a list of products with their details, including images, names, descriptions, and prices. Users can click on a product to view more information or add it to their cart. This page provides a user-friendly interface for browsing and selecting products.

## 🌟  Milestone 10
In this milestone, we created an API to allow product creation with image uploads using Multer. The images are stored in the uploads/ directory, and product data, including image paths, is saved to MongoDB for efficient storage and retrieval.

## Milestone 11 :
In this milestone, we created a My Products page that displays a list of products created by the user. The page fetches products from the database based on the user's email and displays them in a grid layout. This allows users to view and manage their products efficiently.

## Milestone 12 :
we created a My Products page that displays a list of products created by the user. The page fetches products from the database based on the user's email and displays them in a grid layout. This allows users to view and manage their products efficiently.

## Milestone 13:
In this milestone, we implemented the Update Product functionality, allowing users to edit product details. The update form dynamically loads the product's existing data, and changes are submitted via an API call. This ensures that users can modify product information easily while maintaining data integrity.

## Milestone 14:
This milestone focused on integrating the Delete Product functionality, allowing users to remove products permanently. A confirmation prompt ensures accidental deletions are avoided

## Milestone 15:

creating a navbar in react and tailwind css to enable smooth navigation between pages.

## Milestone 16:

creating a product details page in frontend and it display the details of the product and a add to cart button.

## Milestone 17:
In this milestone, we designed the cart schema to store product details in a user's cart, including product ID, name, quantity, price, and total. The schema also tracks the total amount for the cart and associates the cart with a specific user.

## Milestone 18: 
In this milestone, we created a **GET `/cart`** endpoint to fetch the user's cart details, including product information and total amount. The endpoint ensures that only authenticated users can access their cart and retrieves the cart data from the database.

## Milestone 19:
In this milestone, we created a cart page to display the products in the user's cart. The page includes + and - buttons to adjust product quantities. We also implemented PUT /cart/update-quantity endpoints to update the product quantities in the cart, ensuring seamless communication between the frontend and backend.

## Milestone 20:
In this milestone, we created a GET /user/profile endpoint to fetch the user's profile details, including their name, email, profile photo, and addresses. Additionally, a functionality to send the user’s data via email was implemented. On the frontend, we created a profile page that displays the user’s profile photo, name, email in one section, and addresses in another. If no addresses are found, a "No address found" message is displayed, along with an "Add Address" button.

## Milestone 21
In this milestone, we created a frontend form to collect user addresses. The form includes fields for country, city, address line 1, address line 2, zip code, and address type. The input values are stored in a state to manage the data efficiently. 
On the frontend, we implemented navigation from the profile page to the address form. When the user clicks on the "Add Address" button in the profile, they are redirected to the address form page. After filling in the details, the data is displayed in the console for now, with future plans for backend integration.
Additionally, the form validates required fields before submission and ensures a smooth user experience. The implementation is designed to be scalable, with plans for further enhancements like backend storage and address editing functionality.
## Milestone 22
In this milestone, we created a **POST /user/address** endpoint to store addresses inside the user profile in the database. This endpoint receives address data from the frontend form and adds it to the address array in the user collection.
On the backend, we validated the received address fields and ensured they were correctly stored inside the database. On the frontend, we integrated the address form submission to send user address details to this API. Once submitted, the new address gets stored successfully in the user's profile.
If no addresses exist, the profile page continues to display a **"No address found"** message with an **"Add Address"** button, allowing users to add new addresses.
This milestone helps in understanding how to create an endpoint that stores address data and integrates it with the frontend for a seamless user experience.

## Milestone 23:
Milestone 23 focuses on implementing the order placement flow. A "Place Order" button will be added to the cart page, which, when clicked, navigates to the "Select Address" page. This page will display all available addresses associated with the user, allowing them to choose one. A backend endpoint will be created to retrieve and send all user addresses to the frontend, ensuring seamless address selection before order confirmation.
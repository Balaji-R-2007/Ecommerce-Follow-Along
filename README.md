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

## Milestone 24:
The Order Summary page will provide users with a clear overview of their purchase before finalizing the order. It will display all the products being ordered, including their details such as name, quantity, and price. Below the product list, the selected delivery address will be shown to ensure the user reviews it before proceeding. The total cart value will also be displayed, giving a complete cost breakdown. At the bottom of the page, a "Place Order" button will be available, allowing the user to confirm and complete their purchase seamlessly.

## Milestone 25:
This endpoint allows users to place orders by sending product details, user information, and address details. The system retrieves the user's _id using their email and processes each product as a separate order while maintaining the same address. Each order is stored in the MongoDB orders collection using the previously defined Order schema. This ensures that every product is tracked as an independent order while linking all orders to the same user and delivery address.

## Milestone 26:
This endpoint allows retrieval of a user's order history using their email address. When a request is made, the server first searches for the user's _id based on the provided email. Once the _id is obtained, it queries the database to fetch all orders associated with that user. The response includes the complete list of orders, enabling seamless tracking of purchase history. This functionality ensures efficient data retrieval while maintaining a user-friendly experience.

# Milestone 27:
Milestone 27 focuses on implementing the My Orders page in the e-commerce project. This involves sending a GET request to the /my-orders endpoint, where the user's email is passed to retrieve all their orders from the database. The fetched orders will then be displayed dynamically on the My Orders page, ensuring users can easily view their purchase history. Additionally, a navigation link to this page will be added to the navbar for better accessibility. This update enhances the user experience by providing a dedicated section for order tracking and management.

# Milestone 28:
Milestone 28 enhances the **My Orders** page by adding a **Cancel Order** button for each active order. This button will allow users to cancel an order if it has not already been canceled. If an order is already marked as canceled, the button will not be displayed. To achieve this, a new **API endpoint** will be created to handle order cancellations. When a user clicks the cancel button, the order **ID** will be sent to this endpoint, which will retrieve the order, update its status to **canceled**, and save the changes. This feature improves order management and gives users more control over their purchases.

## Milestone 29 - PayPal Integration Setup:
In this milestone, we set up the PayPal sandbox environment for online payments. First, create a PayPal account and access the PayPal Developer Dashboard. From there, locate the sandbox accounts section, copy the UserID, and save it. Additionally, retrieve and save the client ID from the sandbox account. On the order confirmation page, implement two payment options: Cash on Delivery (COD) and online payment. Use radio buttons to toggle between these options, ensuring that the PayPal payment buttons appear when online payment is selected. In the next milestone, we will implement the functionality to display and process PayPal online payments.

## Milestone 30 - Implementing PayPal Online Payments
In this milestone, we integrate PayPal online payments into our project. Using the previously created PayPal sandbox account and client ID, implement the PayPal API to enable online transactions. Install the react-paypal-js NPM package, which provides the PayPalScriptProvider component to display various payment methods, including credit and debit cards. This step will enhance your understanding of integrating online payments seamlessly into your application.

# Milestone 31



In this milestone, we set up global state management in our React application using the react-redux package. First, we installed react-redux via npm. Then, we created a new folder named store containing two files: store.js and userActions.js. Inside store.js, we defined a userReducer function responsible for managing the user's email in the global state and configured the Redux store using this reducer. In userActions.js, we created an action creator function named setEmail to dispatch actions that update the email value in the store. Finally, in index.js, we wrapped the root <App /> component with Redux’s <Provider> component and passed the store as a prop to ensure the global state is accessible throughout the application. This setup allows us to manage and access the user's email globally using Redux.

# Milestone 32


In Milestone 32, we implemented global state management to handle user authentication by storing the user's email after login. When the user logs in successfully, we use the dispatch method from Redux to store their email in a global state using a slice (userSlice). This allows us to access the email across different components using the useSelector hook. By doing this, we avoid passing props manually and ensure a consistent user context throughout the application. This email is then used to filter and fetch data specific to the logged-in user in other pages, enhancing both security and user experience.

# Milestone 33



To begin using JWT authentication in your Node.js application, first install the jsonwebtoken package by running npm install jsonwebtoken in your project directory. Once installed, you can use the sign method from this package to create a JWT token by passing a payload that includes the user's email and ID. To control how long the token remains valid, you can set the expiresIn property using the maxAge option, such as '1d' for one day or '3h' for three hours. After generating the token, use the res.cookie() method provided by Express to store the token in a cookie on the user's browser. For security purposes, ensure the cookie is set with httpOnly: true to prevent access from client-side scripts. Here’s an example of setting the cookie: res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });, where maxAge is in milliseconds. This setup helps manage user sessions securely using JWTs stored in browser cookies.
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

# MyContactsApp Backend API

## Project Description

MyContacts Backend API is a robust and secure RESTful API built with Node.js and Express.js that provides comprehensive contact management functionality. This application allows users to register, authenticate, and manage their personal contacts with full CRUD operations. The system implements JWT-based authentication, ensuring secure access to user-specific contact data while maintaining data isolation between different users.

The project follows modern backend development practices with a clean architecture pattern, proper error handling, and middleware implementation. It serves as a backend foundation for contact management applications, providing secure APIs that can be consumed by various frontend clients.

## Features

### User Management
- **User Registration**: Secure user registration with email validation and password hashing
- **User Authentication**: JWT-based login system with secure password verification
- **User Profile**: Protected endpoint to retrieve current user information
- **Password Security**: Bcrypt encryption for secure password storage

### Contact Management
- **Create Contacts**: Add new contacts with name, email, and phone number
- **Read Contacts**: Retrieve all contacts for the authenticated user
- **Read Single Contact**: Get specific contact details by ID
- **Update Contacts**: Modify existing contact information
- **Delete Contacts**: Remove contacts from the system
- **User Isolation**: Users can only access and modify their own contacts

### Security Features
- **JWT Authentication**: Secure token-based authentication system
- **Route Protection**: Middleware-based route protection for sensitive endpoints
- **Password Hashing**: Secure password storage using bcrypt
- **Authorization**: User-specific data access control

## Technology Stack

### Backend Framework
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js

### Database
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling tool for Node.js

### Authentication & Security
- **JSON Web Tokens (JWT)**: For secure authentication
- **Bcrypt**: For password hashing and verification
- **Express Async Handler**: For asynchronous error handling

### Development Tools
- **Nodemon**: Development server with auto-restart functionality
- **Dotenv**: Environment variable management

## Project Structure

### Configuration
- **Database Connection**: MongoDB connection setup with error handling
- **Environment Variables**: Configuration management for sensitive data

### Models
- **User Model**: Schema for user data including username, email, and encrypted password
- **Contact Model**: Schema for contact information with user association

### Controllers
- **User Controller**: Handles user registration, login, and profile management
- **Contact Controller**: Manages all contact-related operations with user validation

### Routes
- **User Routes**: API endpoints for user authentication and management
- **Contact Routes**: API endpoints for contact CRUD operations

### Middleware
- **Token Validation**: JWT token verification and user authentication
- **Error Handler**: Centralized error handling with appropriate HTTP status codes

### Constants
- **HTTP Status Codes**: Centralized definition of response status codes

## API Endpoints

### Authentication Endpoints
- **POST /api/users/register**: User registration
- **POST /api/users/login**: User authentication
- **GET /api/users/current**: Get current user information (protected)

### Contact Endpoints
- **GET /api/contacts**: Retrieve all contacts for authenticated user (protected)
- **POST /api/contacts**: Create a new contact (protected)
- **GET /api/contacts/:id**: Get specific contact by ID (protected)
- **PUT /api/contacts/:id**: Update existing contact (protected)
- **DELETE /api/contacts/:id**: Delete contact (protected)

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB database
- npm or yarn package manager

### Environment Variables
The following environment variables need to be configured:
- **CONNECTION_STRING**: MongoDB connection string
- **ACCESS_TOKEN_SECRET**: Secret key for JWT token signing
- **PORT**: Server port number (defaults to 5000)

### Dependencies Installation
Install all required packages using npm or yarn

### Database Setup
Ensure MongoDB is running and accessible with the connection string

### Server Startup
Start the development server with hot reload or production server

## Development Scripts

- **Development Mode**: Start server with nodemon for development
- **Production Mode**: Start server in production environment
- **Test**: Run test suite (currently not implemented)

## Security Considerations

- All contact endpoints require valid JWT authentication
- User data is isolated - users cannot access other users' contacts
- Passwords are encrypted using bcrypt before storage
- JWT tokens have expiration time for enhanced security
- Input validation is implemented for all user inputs

## Error Handling

The application implements comprehensive error handling with:
- Centralized error handling middleware
- Appropriate HTTP status codes for different error types
- Structured error responses with meaningful messages
- Validation error handling for user inputs

## Data Models

### User Schema
- Username (required, unique)
- Email (required, unique)
- Password (required, encrypted)
- Timestamps for creation and updates

### Contact Schema
- User ID (reference to User model)
- Name (required)
- Email (required)
- Phone number (required)
- Timestamps for creation and updates

## Future Enhancements

- User profile management
- Contact search and filtering
- Contact categories and tags
- Bulk contact operations
- Contact import/export functionality
- Enhanced validation and sanitization
- Rate limiting and API throttling
- Comprehensive testing suite
- API documentation with Swagger
- Logging and monitoring

## Contributing

This project follows standard development practices and is structured for easy contribution and maintenance. The modular architecture allows for easy addition of new features and modifications to existing functionality.

## License

This project is licensed under the MIT License, allowing for free use, modification, and distribution while maintaining attribution to the original author. 

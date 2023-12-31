
# Tobams
Tobams is a RESTful API service user management system.

## Documentation

A detailed documentation of the api can be found here: [API Documentation](https://documenter.getpostman.com/view/11971882/2s9XxsUvoU)


Run Project Locally

- Clone the project

- cd into the project's folder and run yarn or npm install to install dependencies

- Create a .env file and check  env.sample file for all environment keys name

- Run npm run dev or yarn dev to start the server locally


## HTTP Request
All API requests are made by sending a secure HTTPS request using one of the following methods:

- POST Create a resource
- GET Get a resource or list of resources
- For POST, the body of your request must be a JSON payload.

## HTTP Response code
Each response will be returned with one of the following HTTP status codes:

- 200 OK Successful request
- 400 Bad Request There was a problem with the request
- 500 Server Error Server error

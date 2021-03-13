# API Documentation:

### Auth Routes

- POST /auth/signup

  - Requires: request body must contain username, password, city, and state (email is optional but encouraged)

  ```
  // like this:
  {
    username: YOUR_USERNAME,
    password: YOUR_PASSWORD,
    email: YOUR_EMAIL,
    city: "New York",
    state: "NY"
  }
  // for a full list of possible locations send GET request to localhost:5000/api/locations
  ```

  - Success Result:

  ```
  {
   loggedIn: true,
   user: {
     _id: [mongodb-generated unique ID],
     username: [username from request],
     password: [hashed password],
     email: [email from request],
     _location: [mondb-generated ID from request linking to location collection]
   }
  }
  ```

  - Error Meanings/Causes:
    - "Missing Required Information - username, password, city, or state": You have failed to pass required data in the request body.
    - "User Already Exists": Can't sign up because this username is already being used in the database. Correct action - link to forgot password or Login
    - "Location Unsupported": Location does not exist in our database, so user cannot register using that location.
    - "Location Not Found": Server error where MongoDb was unable to find the location for some reason.
    - "Username Not Found": Server error where MongoDb was unable to find username

- POST /auth/login
  - Requires: request body must contain username and password.
  ```
  // like this:
  {
    username: YOUR_USERNAME,
    password: YOUR_PASSWORD,
  }
  ```
  - Success Result:
  ```
  {
   loggedIn: true,
   user: {
     _id: [mongodb-generated unique ID],
     username: [username from request],
     password: [hashed password],
     email: [email from request],
     _location: [mondb-generated ID from request linking to location collection]
   }
  }
  ```
  - Error Meanings/Causes:
    - "Missing Required Information - username or password": You have failed to pass required data in the request body.
    - "User Does Not Exist": No user by that username exists. Correct Action - link to signup page
- GET /auth/logout
  - Requires: Logged In User
  - Success Result:
  ```
  {
   loggedIn: false,
   message: 'Logout Successful'
  }
  ```
  - Error Meanings/Causes:
    - "No User Logged In": Attempting to log out when no user is logged in.
- GET /auth/currentuser
  - Requires: Nothing
  - Success Result:
  ```
  {
   loggedIn: true,
   user: {
     _id: [mongodb-generated unique ID],
     username: [username from request],
     password: [hashed password],
     email: [email from request],
     _location: [mondb-generated ID from request linking to location collection]
   }
  }
  ```
  - Fail Result: No User Logged In
  ```
  {
   loggedIn: false,
   user: {}
  }
  ```
  - Error Meanings/Causes: None

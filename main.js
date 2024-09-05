const express = require('express'); // Import the Express module
const app = express(); // Create an instance of an Express application
const port = 3000; // Define a port number to listen on

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send "Hello, World!" as the response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

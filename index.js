// server/index.js

// 1. Load environment variables FIRST. This is critical.
require('dotenv').config();

// 2. Import all necessary packages.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import the API route we created in Step 5.
const contactRoutes = require('./routes/contactRoute');

// 3. Initialize the Express app and set the port.
const app = express();
const PORT = process.env.PORT || 5001;

// 4. Connect to your MongoDB Database.
// This line requires you to have MONGODB_URI in your .env file.
const dbURI = process.env.MONGODB_URI;
if (!dbURI) {
    console.error('FATAL ERROR: MONGODB_URI is not defined in .env file.');
    process.exit(1); // This stops the server if the database string is missing.
}

mongoose.connect(dbURI)
    .then(() => console.log("MongoDB connected successfully."))
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Also stops the server on connection failure.
    });

// 5. Middleware Setup.
app.use(cors());         // Allows your frontend to talk to this backend.
app.use(express.json()); // Allows the server to understand JSON data from form submissions.

// 6. API Route Activation.
// This tells the app: "Any request starting with '/api' should be handled by the 'contactRoutes' file."
app.use('/api', contactRoutes);

// 7. Start the server and listen for requests.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
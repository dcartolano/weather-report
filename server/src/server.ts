import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
console.log(process.env); // from Roger to show how this works

// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
app.use(express.static('../client/dist')); // copied from miniproject

// TODO: Implement middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true })); // copied from miniproject
app.use(express.json()); // copied from miniproject

// TODO: Implement middleware to connect the routes
app.use(routes); // copied from miniproject

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

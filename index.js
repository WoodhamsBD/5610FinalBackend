console.log("Starting Server @ index.js");

// Packages
import express from 'express';
import cors from 'cors';

// Set App
const app = express();
app.use(cors());
app.use(express.json());


// Controllers


// Fire it up

app.listen(process.env.PORT || 4000);
console.log("Server has started");

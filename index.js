console.log("Starting @ index.js");
// Packages
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';

// Controllers
import SessionController from './controllers/sessions/session-controller.js';
import UsersController from "./controllers/users/users-controller.js";

// connect to DB -- need to be ENV var.
const connection = "mongodb+srv://woodhamsbd:Sandybeach2013@cs5610final.xipswow.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection);

// Set App
const app = express();
app.use(cors({
  credentials:true,
  origin: 'http://localhost:3000'
}))

app.use(session({
  secret: 'holymolyitssecret',
  resave: false,
  saveUnititialized: true,
  cookie: { secure: false}
}))
app.use(express.json());


// Implement Controllers
SessionController(app)
UsersController(app)

// Fire it up

app.listen(process.env.PORT || 4000);
console.log("Server has started");

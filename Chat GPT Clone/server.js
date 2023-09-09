//setup express
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening on PORT 3000");
});

// middleware to serve static public, and use json to send data
app.use(express.static("public"));
app.use(express.json());

// add enviroment variables
import dotenv from "dotenv";
dotenv.config();

// handle POST request
app.post("/completion", (req, res) => {
  console.log(req.body.message);
});



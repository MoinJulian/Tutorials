import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening on PORT 3000");
});

// app.get("/", (req, res) => res.send("Hi, server is running"));

app.use(express.static("public"));

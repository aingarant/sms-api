const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const { MongoClient } = require("mongodb");

app.use(express.json());
app.use(morgan("dev"));


require("dotenv").config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });

app.get("/", async(req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/', async (req, res) => {


  try {
    const { name, email } = req.body;
    const db = client.db('freepbx');

    const newUser = req.body;

    const result = await db.collection('users').insertOne(newUser);
    
    if (result.acknowledged) {
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } else {
      res.status(500).json({ message: 'Failed to create user' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

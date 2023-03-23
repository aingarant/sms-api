require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });

await client.connect();

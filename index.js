const express = require('express');
const app = express();
const port = 3000;
const morga = require("morgan")
app.use(express.json());
app.use(morga("dev"));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/", (req, res) => {
  res.send(req.body);
})
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`Hello SALT Developer ${name}`);
  } else {
    res.send('Please enter your name in the URL, for example: /?name=YourName');
  }
});

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
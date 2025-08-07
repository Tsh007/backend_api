const express = require('express');
const app = express();
const PORT = 80;

app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello User." });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
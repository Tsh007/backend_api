const express = require('express');
const app = express();
// Use port 3000 instead of 80
const PORT = process.env.PORT || 3000;

app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello User." });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
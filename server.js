const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Optional: dynamic route for blogs
app.get('/blog/:name', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog', `${req.params.name}.html`));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

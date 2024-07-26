const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use routes
const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

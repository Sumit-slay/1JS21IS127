const express = require('express');
const productsRoutes = require('./routes/productsRoutes');
const app = express();

app.use(express.json());

// Define a root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Top Products Microservice!');
});

// Use /api prefix for routes
app.use('/api', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

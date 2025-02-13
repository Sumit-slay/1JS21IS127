const express = require('express');
const productsRoutes = require('./routes/productsRoutes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Top Products Microservice!');
});

app.use('/api', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

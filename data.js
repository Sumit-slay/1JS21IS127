const { v4: uuidv4 } = require('uuid');

module.exports = {
  Laptop: [
    { unique_id: uuidv4(), productName: 'Laptop 1', price: 2236, rating: 4.7, discount: 63, availability: 'yes' },
    { unique_id: uuidv4(), productName: 'Laptop 2', price: 1244, rating: 4.5, discount: 45, availability: 'out-of-stock' },
    { unique_id: uuidv4(), productName: 'Laptop 3', price: 9102, rating: 4.44, discount: 98, availability: 'out-of-stock' },
    { unique_id: uuidv4(), productName: 'Laptop 4', price: 2652, rating: 4.12, discount: 70, availability: 'yes' },
    { unique_id: uuidv4(), productName: 'Laptop 5', price: 1258, rating: 3.8, discount: 33, availability: 'yes' },
    // Add more products as needed
  ],
  // Add more categories if needed
};

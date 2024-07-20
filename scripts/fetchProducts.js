require('dotenv').config();

const axios = require('axios');

const BEARER_TOKEN = process.env.BEARER_TOKEN;

axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products', {
  headers: {
    'Authorization': `Bearer ${BEARER_TOKEN}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error fetching products from AMZ:', error);
});

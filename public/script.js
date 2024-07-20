document.getElementById('product-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const category = document.getElementById('category').value;
    const n = document.getElementById('n').value;
    const page = document.getElementById('page').value;
    const sortBy = document.getElementById('sort_by').value;
    const order = document.getElementById('order').value;

    try {
        const response = await fetch(`/categories/${category}/products?n=${n}&page=${page}&sort_by=${sortBy}&order=${order}`);
        const products = await response.json();

        const productsDiv = document.getElementById('products');
        productsDiv.innerHTML = '';

        if (products.length === 0) {
            productsDiv.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
                <p>Discount: ${product.discount}%</p>
                <p>Company: ${product.company}</p>
                <button onclick="getProductDetails('${product.unique_id}')">View Details</button>
            `;
            productsDiv.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});

const getProductDetails = async (productId) => {
    try {
        const response = await fetch(`/categories/${document.getElementById('category').value}/products/${productId}`);
        const product = await response.json();

        if (!product) {
            alert('Product not found');
            return;
        }

        alert(`Product Details:
        Name: ${product.name}
        Price: $${product.price}
        Rating: ${product.rating}
        Discount: ${product.discount}%
        Company: ${product.company}`);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
};

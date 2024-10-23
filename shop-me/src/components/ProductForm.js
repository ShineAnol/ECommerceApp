import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stocks, setStocks] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = { name, price, stocks };

        axios.post('http://localhost:8000/api/products', newProduct)
            .then(response => {
                console.log('Product added:', response.data);
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Stocks</label>
                <input type="number" value={stocks} onChange={(e) => setStocks(e.target.value)} />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;

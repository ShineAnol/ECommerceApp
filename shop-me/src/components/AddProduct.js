import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stocks, setStocks] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = { name, price, stocks };

        axios.post('http://localhost:8000/api/products', newProduct)
            .then(response => {
                console.log('Product added:', response.data);
                setName('');
                setPrice('');
                setStocks('');
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    return (
        <Container>
            <h1>Add Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter product name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="formPrice" className="mt-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="formStocks" className="mt-3">
                    <Form.Label>Stocks</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter number of stocks" 
                        value={stocks} 
                        onChange={(e) => setStocks(e.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-4">
                    Add Product
                </Button>
            </Form>
        </Container>
    );
}

export default AddProduct;

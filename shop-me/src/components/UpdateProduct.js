import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';

function UpdateProduct() {
    const { id } = useParams(); // Get product ID from the URL
    const [product, setProduct] = useState({ name: '', price: '', stocks: '' });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the product data to populate the form
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product data:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the updated product data
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(() => {
                console.log('Product updated successfully!');
                navigate('/'); // Redirect to the product list after update
            })
            .catch(error => console.error('Error updating product:', error));
    };

    return (
        <Container>
            <h1>Update Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formStocks">
                    <Form.Label>Stocks</Form.Label>
                    <Form.Control
                        type="number"
                        name="stocks"
                        value={product.stocks}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Update Product
                </Button>
            </Form>
        </Container>
    );
}

export default UpdateProduct;

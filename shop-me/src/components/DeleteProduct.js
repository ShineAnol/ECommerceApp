// src/components/DeleteProduct.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const DeleteProduct = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();

    const handleDelete = async () => {
        // Delete product logic (API call to delete product)
        await fetch(`/api/products/${id}`, {
            method: 'DELETE',
        });
        navigate('/'); // Redirect to the product list after deletion
    };

    return (
        <Container>
            <h2>Delete Product</h2>
            <p>Are you sure you want to delete this product?</p>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            <Button variant="secondary" onClick={() => navigate('/')}>
                Cancel
            </Button>
        </Container>
    );
};

export default DeleteProduct;

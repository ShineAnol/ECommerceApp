import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function ViewProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleUpdate = (id) => {
        console.log('Update product with ID:', id);
        // Implement update functionality here
    };

    const handleDelete = (id) => {
        console.log('Delete product with ID:', id);
        // Implement delete functionality here
    };

    return (
        <div>
            <h1><center>Product List</center></h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stocks</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stocks}</td>
                            <td>
                                <Button variant="primary" className="me-2" onClick={() => console.log('Add to Cart')}>
                                    Add to Cart
                                </Button>
                                <Button variant="secondary" className="me-2" onClick={() => handleUpdate(product.id)}>
                                    Update
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(product.id)}>
                                    x
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewProduct;

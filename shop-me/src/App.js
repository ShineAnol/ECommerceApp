import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <a href="/">Product List</a>
                    <a href="/add">Add Product</a>
                </nav>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/add" element={<ProductForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

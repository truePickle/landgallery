"use client"
import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        authorUsername: '',
        authorUserId: '',
        width: 0,
        height: 0,
        image: '',
        slug: '',
        quantity: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/items', formData);
            console.log(response.data);
            setFormData({
                title: '',
                description: '',
                authorUsername: '',
                authorUserId: '',
                width: 0,
                height: 0,
                image: '',
                slug: '',
                quantity: 0
            });
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return(
        <div>
            <h1>Admin Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                <br />
                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
                <br />
                <label>Author Username:</label>
                <input type="text" name="authorUsername" value={formData.authorUsername} onChange={handleChange} required />
                <br />
                <label>Author User ID:</label>
                <input type="text" name="authorUserId" value={formData.authorUserId} onChange={handleChange} required />
                <br />
                <label>Width:</label>
                <input type="number" name="width" value={formData.width} onChange={handleChange} required />
                <br />
                <label>Height:</label>
                <input type="number" name="height" value={formData.height} onChange={handleChange} required />
                <br />
                <label>Image:</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
                <br />
                <label>Slug:</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange} required />
                <br />
                <label>Quantity:</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                <br />
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default AdminPage;

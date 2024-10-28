
import React, { useState } from 'react';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        date: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('https://better-tamarillo.onrender.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            alert('Employee added');
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" placeholder="First Name" onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="salary" placeholder="Salary" onChange={handleChange} />
            <input name="date" placeholder="Date" type="date" onChange={handleChange} />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;

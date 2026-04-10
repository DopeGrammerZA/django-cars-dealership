import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({ username: '', first_name: '', last_name: '', email: '', password: '' });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/register/', form);
        alert('Registration successful!');
    };
    return (<div><h2>Sign Up</h2><form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="first_name" placeholder="First Name" onChange={handleChange} required />
        <input name="last_name" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
    </form></div>);
}
export default Register;

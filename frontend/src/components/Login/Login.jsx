import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', form);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            navigate('/');
        } catch (error) {
            alert('Login failed!');
        }
    };
    
    return (<div><h2>Login</h2><form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
    </form></div>);
}

export default Login;

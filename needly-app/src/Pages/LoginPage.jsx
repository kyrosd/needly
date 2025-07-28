import './LoginPage.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        username,
        password
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        const token = result.token;
        const userId = result.username;

        localStorage.setItem('token', token);
        console.log(result);

        navigate(`/myInventory/${userId}`);
    } catch (error) {
        console.error('Error:', error);
    }
};


    return (
        <form onSubmit={handleSubmit} className="sign-up-page">
            <div className='sign-up-box'>
                <h1 className='sign-up'>Log In</h1>
            </div>
            <div className='username-box'>
                <h1 className='above-inp'>Username:</h1>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input'></input>
            </div>
            <div className='password-box'>
                <h1 className='above-inp'>Password:</h1>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input'></input>
            </div>
            <div className='cancel-create-box'>
                <Link to='/' className='cancel'>Cancel</Link>
                <button type='submit' className='create'>Log In</button>
            </div>
        </form>
    )
};

export default LoginPage;
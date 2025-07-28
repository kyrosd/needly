import './SignUpPage.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignuUpPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username,
            email,
            password
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/signup/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
        
        const result = await response.json();
        console.log(result)
        navigate(`/myInventory/${data.username}`);

    } catch (error) {
        console.error('Error:', error); 
    }
};

return (
        <form className='sign-up-page' onSubmit={handleSubmit}>
        <div className='sign-up-box'>
            <h1 className='sign-up'>Sign Up</h1>
        </div>
        <div className='email-box'>
            <h1 className='above-inp'>Email:</h1>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='input'></input>
        </div>
        <div className='username-box'>
            <h1 className='above-inp'>Create Username:</h1>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input'></input>
        </div>
        <div className='password-box'>
            <h1 className='above-inp'>Create Password:</h1>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input'></input>
        </div>
        <div className='opt-login'>
            <h1 className='alt-login'>Already Have An Account? Log In
                <Link className='link' to="/log"> Here</Link></h1>
        </div>
        <div className='cancel-create-box'>
            <Link to='/' className='cancel'>Cancel</Link>
            <button type="submit" className='create'>Create Account</button>
        </div>
        </form>
)
};

export default SignuUpPage;
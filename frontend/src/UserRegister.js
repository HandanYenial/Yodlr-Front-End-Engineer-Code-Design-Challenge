import React from 'react';
import Api from './api';
import { useState } from 'react';

const UserRegister = () => {
    const [formData, setFormData] = useState();
    const [registered, setRegistered] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    
    console.log(formData);
    }

    const handleClick = (e) => {
        e.preventDefault();
        Api.register(formData);
        setRegistered(true);
    }

    return (
        <div>
        {!registered && <div>
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type='text' 
                       name="firstName" 
                       placeholder="" 
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type='text' 
                       name="lastName"
                       placeholder="" 
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type='text' 
                       name="email" 
                       placeholder="" 
                       onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleClick}>Submit</button>
            </div>
        </form>
        </div>}
        {registered}
        </div>
        
    );

};

export default UserRegister;
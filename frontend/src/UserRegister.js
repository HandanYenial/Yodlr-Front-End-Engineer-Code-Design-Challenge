import React from 'react';
import Api from './api';
import { useState } from 'react';
import './UserRegister.css';

function UserRegister({ register }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await Api.registerUser(username, password, firstName, lastName, email, state);
        register(user);
    }

    return (
        <div>
        
        <div className="register-form">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4" style={{padding:'20px', alignItems:'center' , textAlign:'center'}} >

            <h2 className="mb-3" style = {{alignItems:'center' , textAlign:'center',fontSize:'400%',marginTop:'5%', color:'#332FD0', padding:'10px'}}> Register </h2>
            <h3 style={{color:'#332FD0', marginTop:'5%', fontSize:'190%'}}>Welcome to Yodlr </h3>
            <p style={{color:'grey', fontSize:'110%'}}>Please fill in the registration form</p>
            
            <div className="card" style= {{fontSize:'150%' , padding:'20px', maxWidth:'800px', justifySelf:'center', alignItems:'center',marginTop:'10%',
                                    backgroundColor:'#FAF4B7',
                                    boxShadow:'10px 10px 7px #7a7a7b'}}>
            
            <div className="card-body" style = {{color:'#0901f4', fontSize:'100%', justifyContent:'left' , justifyItems:'center' }}>

            <form onSubmit={handleSubmit}>
            <div className="form-group" style={{padding:'5px', justifyContent:'center' , justifyItems:'center'}}>
                <label htmlFor="username">Username</label>
                <input style={{fontSize:'100%'}} type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input style={{fontSize:'100%'}} type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input style={{fontSize:'100%'}} type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input style={{fontSize:'100%'}} type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input style={{fontSize:'100%'}} type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
        
            <button
                type="submit"
                className="btn btn-primary float-right"
                onSubmit={handleSubmit}
                style={{
                justifyContent:'center',
                height: '20%',
                backgroundColor: '#97C4B8',
                fontSize: '120%',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width:'100%',
                
                marginTop: '50px',
                color:'black'}}
            >
              REGISTER
            </button>
            </form>
            </div>
            </div>
            </div>
        </div>
    </div>
    );

}

export default UserRegister;
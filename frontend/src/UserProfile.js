import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsers } from './api';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState();
    const {id} = useParams();
    useEffect(()=>{
        getUsers().then((data) => {
            const user = data.find((user) => user.id === id);
            setUser(user);
        });
    }, [id])

    return(
        <div>
            <h1>User Profile</h1>
            <p>{user && user.first_name}</p>
        </div>
    );
}

export default UserProfile;
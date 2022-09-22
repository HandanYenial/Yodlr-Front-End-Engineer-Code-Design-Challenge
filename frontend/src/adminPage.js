import React from 'react';
import { useEffect } from 'react';
import { getUsers } from './api';

const AdminPage = () => {
    const [users] = getUsers();
    useEffect(()=>{
        getUsers();
    }, [])

    return(
        <div>
            <h1>Admin Page</h1>
            <p>Users List</p>
            <ul>
                {users.map(user => <li>{user.first_name}</li>)}
            </ul>
        </div>
    )
}
export default AdminPage;
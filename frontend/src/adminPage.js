import React from 'react';
import { useEffect , useState } from 'react';


function AdminPage() {
    const [users,setUsers] =useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result);
                    setLoading(false);
                },
            )
    }, []);

    return (
        <div style = {{justifyContent:'center', padding:'20px', alignItems:'center', alignContent:'center' ,}}>
            <h1 style = {{justifyContent:'center', padding:'20px', alignItems:'center', alignContent:'center' , justifySelf:'center'}}>Admin Page</h1>
            <ul>
            {loading ? <p>Loading...</p> : users.map(user => (
                        <li key={user.id} style = {{border:'solid 3px green',justifyContent:'center', padding:'20px', alignItems:'center', 
                        alignContent:'center', maxWidth:'500px', fontFamily:'cursive', fontSize:'130%'}}>
                            <li>{user.firstName}</li>
                            <li>{user.lastName}</li>
                            <li>{user.email}</li>
                            <li>{user.state}</li>
                        </li>
                    ))}
            </ul>

        </div>
    );
}


export default AdminPage;
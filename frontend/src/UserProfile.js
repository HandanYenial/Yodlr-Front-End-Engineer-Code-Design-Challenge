import React from 'react';
import { useEffect , useState} from 'react';

import { useParams } from 'react-router-dom';

function UserProfile(){
    const [user,setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/users/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setUser(result);
                    setLoading(false);
                },
            )
    }, []);


    return (
        <div>
            <h1 style={{ marginLeft:'20%'}}>User Profile</h1>
            {loading ? <p>Loading...</p> : (
                <div style={{border:'3px solid green' , maxWidth:'500px', marginLeft:'20%', alignItems:'center', justifyContent:'center', padding:'5%',
                fontFamily:'cursive', fontSize:'120%'}}>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>State: {user.state}</p>
                </div>
            )}
        </div>
    );
}




export default UserProfile;
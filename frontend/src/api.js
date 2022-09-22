import axios from "axios"; //importing axios to make the AJAX calls


class Api {
  //Get all users
  static async getUsers(){
    const users = await axios.get('http://localhost:3001/users');
    console.log(users);
    return users.data;
  }
  //Get a user by username
  static async getCurrentUser(id){
    const user = await axios.get(`http://localhost:3001/users/${id}`);
    return user.data;
  }

  //Register a user
  static async register(data){
    const newUser = await axios.post('http://localhost:3001/users', data);
    return newUser.data;
  }
}

export default Api;
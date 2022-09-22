import axios from "axios"; //importing axios to make the AJAX calls

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001"; //setting the base url


class Api {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how we pass it in the header.
    //headers means that we are passing the token in the header.
    //params means that we are passing the token in the query string.
    const url = `${BASE_URL}/${endpoint}`; //setting the url
    
    const params = (method === "get") //if the method is get, then we will pass the data as params
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params})).data; //returning the data from the API call
    } catch (err) {
      console.error("API Error:", err.response); //if there is an error, print it to the console
      let message = err.response.data.error.message; //get the error message from the response
      throw Array.isArray(message) ? message : [message]; //if the message is an array, throw it, otherwise throw an array with one element.
    }
  }

  // Individual API routes

  //Get all users
  static async getUsers(){
    let res = await this.request(`users`);
    return res.users;
  }
  //Get a user by username
  static async getCurrentUser(id){
    let res = await this.request(`users/${id}`);
    return res.user;
  }

  //Update a user by username
  static async saveProfile(id, data){
    let res = await this.request(`users/${id}`, data, "patch");
    return res.user;
  }

  //Delete a user by username
  static async deleteUser(id){
    let res = await this.request(`users/${id}`, {}, "delete");
    return res.user;
  }

  //Register a user
  static async register(data){
    let res = await this.request(`users/register`, data , "post");
    return res.token;
  }
}

export default Api;
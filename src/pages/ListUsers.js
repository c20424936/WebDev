
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav  from '../components/sidebar';


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const UserList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
    <Header/>
    <Sidenav/>
    <div className='Home'>
    <div className="columns mt-5">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="subbtn"
                  >Edit</Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="newbtn">Delete </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <Footer/>
   
    </>
  );
};
 
export default UserList;
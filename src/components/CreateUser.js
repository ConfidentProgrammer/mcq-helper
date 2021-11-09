import React from 'react'
import '../App.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
function CreateUser() {
    const [user, setUser] = useState('');
  //  const [users, setUsers] =useState([]);
   // const [run, setRun] = useState(false);
// useEffect(() => {
//     axios.get('http://localhost:5000/users/')
//     .then((res) => {
//         //console.log(res.data)
//         for (let index = 0; index < res.data.length; index++) {
            
//            // console.log(res.data[index].username)
//            users.push(res.data[index].username)
//            // console.log(users)
            
//      }
//      setRun(!run);
//     });
    
// } , [])

 function handleUserName(e) {
    setUser(e.target.value);
 }
    function onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username : user
        }
        //console.log(newUser);
        axios.post('https://mcq-helper.herokuapp.com/users/add' , newUser)
        .then((res) => alert(res.data + ', ' + 'please add your answers'));
        setUser('');
// setTimeout(function() {
//     axios.get('http://localhost:5000/users/')
//     .then((res) => {
//         //console.log(res.data)
//         for (let index = 0; index < res.data.length; index++) {
            
//            // console.log(res.data[index].username)

//            users.push(res.data[index].username)
//           //  console.log(users)
            
//      }
     
//     // setRun(!run);
//     });
    
// }, 700);
 

    }
  
    return (
        <div>

            <form onSubmit={onSubmit}>
                <input className='p-2 login-username' type="text" placeholder="Enter Username" value={user} onChange={handleUserName}/>
                <button className='btn btn-primary p-2 ' type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default CreateUser


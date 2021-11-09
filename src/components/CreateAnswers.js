import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../App.css'

import Navbar from './Navbar';
function CreateAnswers() {
const [answer, setAnswers] = useState([]);
const [user, setUser] = useState('')
const [logged, setLogged] = useState([]);
const answersPlaceholder = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const ansChars = ['a', 'b', 'c' , 'd', 'A' , 'B', 'C', 'D'];


useEffect(()=> {
  
    axios.get('https://mcq-helper.herokuapp.com/users')
    .then((res)=>{
    setLogged(res.data)   
    
    })

 //setting default value to A and username
 for (let index = 0; index < 20; index++) {
     answer[index] = 'A';    
 }

}, [])

function onSubmit(e) {
    e.preventDefault();
    //pushing the users 
    const final = {
        username : user,
        answers : answer
    }

    console.log(final);

    axios.post(`https://mcq-helper.herokuapp.com/answers/add/${final.username}` , final)
    .then((res) => alert(res.data ));

}
function handleUserName(e) {
    setUser(e.target.value);
}
    return (
        <div>
         <form onSubmit={onSubmit}>
                {/* <input className='p-2 login-username' type="text" placeholder="Enter Username" value={user} onChange={handleUserName}/> */}
                <select name="username" id="options" onChange={(e)=> {
                  setUser(e.target.value);
                  
                }}>
                    <option >{"Select Your Username"}</option>
                    {logged.map(log => (
                        
                        <option value={log.username}>{log.username}</option>
                    ))}
                </select>
                <div className="answers-container">
                   {answersPlaceholder.map( a => (
                       <div>
                       <table>
                           <tr>
                               <td>{a}</td>
                               <td>
                               <select key={a} onChange={(e) => {
                                   answer[a-1] = e.target.value;
                                   console.log(answer);
                               }} name="options" id="options">
                      
                       <option value="A">A</option>
                       <option value="B">B</option>
                       <option value="C">C</option>
                       <option value="D">D</option>
                   </select>
                               </td>
                           </tr>
                           
                       </table>
                       
                       </div>
                    // <input className='p-2 login-username' key={a} type="text" placeholder={a + '.'} value={answer[answer.length - 1]} onChange={handleAnswers}/>
                   ))}
                </div>
                <button className='btn btn-primary p-2 ' type='submit'>Submit Info</button>
            </form>
        </div>
    )
}

export default CreateAnswers

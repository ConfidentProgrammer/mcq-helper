import React from 'react'
import { useState } from 'react'
import axios from 'axios' ;
function Login() {
    const [login, setLogin] = useState('');
    const [logged, setLogged] = useState('');
    const [users , setUsers] = useState([]);
    function handleLogin(e) {
      setLogin(e.target.value);

    }
  
    function onSubmit(e) {
      e.preventDefault();
  
      //check whether user is present in the database or not
      axios.get('http://localhost:5000/users/')
      .then((res) => {
        for (let index = 0; index < res.data.length; index++) {
             // console.log(res.data[index].username)
             users.push(res.data[index].username)
        }
    });
    
    //checking

    if(!users.includes(login)) {
        console.log(`Hey ${login}, please sign up`);
    }else {
        for (let i = 0; i < users.length; i++) {
            if(login === users[i]) {
                console.log(`Welcome Back ${users[i]}`);
                setLogged(login);
                break;
            }
        }
    }

   

      //console.log(login+" "+users);
      setLogin('');
    }
    return (
        <div>
      <form onSubmit={onSubmit}>
      <input className='p-2 login-username' type="text" placeholder='username' value={login} onChange={handleLogin} />
      <button className='btn btn-primary p-2 '  type='submit'>Login</button>
    </form>
        </div>
    )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react'

function Navbar() {
 // let namesSet = new Set(names);
//  const [run, setRun] = useState(false);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/AnswerList" className="navbar-brand" >Answers List</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
       <Link to="/user" className="nav-link">Add User </Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/addAnswers">Add your answers</Link>
      </li>
      
      <li class="nav-item">
        <span style={{cursor:'pointer'}} className="nav-link" onClick={() => {
            let password = prompt("Please enter password to delete:" );

            if(password === 'd123') {
              axios.delete('https://mcq-helper.herokuapp.com/delete/all')
            .then(() => console.log('Delete Success'));
          //  setRun(!run); 
            } else {
              alert('password is wrong');
            }
  
        }
            }>Delete All Info</span>
      </li>
    
    </ul>
  </div>
</nav>      
        </div>
    )
}

export default Navbar

// Not needed area

{/* <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Users
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    {/* {
      Array.from(namesSet).map(name => (
        <Link to={'/addAnswers/' + name} class="dropdown-item" key={name}>{name}</Link>
      ))
    } */}
  {/* <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a> */}
// </div>
// </li> 
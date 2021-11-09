import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router , Route} from 'react-router-dom';

import CreateAnswers from './components/CreateAnswers';
import CreateUser from './components/CreateUser';
import AnswerList from './components/AnswerList';

import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
 



  return (
    <Router>


    <div className="App"> 

    <Navbar />

    <Route path="/" exact component={CreateUser} />
    <Route path="/user" exact component={CreateUser} />
    <Route path="/addAnswers/" exact component={CreateAnswers} />
    <Route path="/AnswerList" exact component={AnswerList} />
    </div>
    </Router>
  );
}

export default App;

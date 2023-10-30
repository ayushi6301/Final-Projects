import './App.css';
import Login from './Login';
import Register from './Register';
// import Doctors from './Doctors';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'; 

import React, { useState, useEffect } from 'react';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/patients')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Before setPatients:', patients);
        setPatients(data);
        console.log('After setPatients:', patients);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div>
        <header>
          <nav>
            <div className='container'>
              <div className='logo'>
                <h1>Hospital Management System</h1>
              </div>
              <ul className='menu'>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
                <li>
                  <Link to='/doctors'>Doctors</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        {/* <Route path='/doctors' component={Doctors} /> */}
      </Routes>
    </Router>
  );
}

export default App;

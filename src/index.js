import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Careers from './components/Careers';
import About from './components/About';
import Contact from './components/Contact';


ReactDOM.render(

  <Router>
    <Navbar />
    <Routes>  
      <Route path='/' element={<App/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      
    </Routes>
  </Router>,


document.getElementById('root')
);


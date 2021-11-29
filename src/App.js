import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      /*Set up the Router*/
      <Routes>
       <Route exact path="/projects" component={Projects} />
       <Route path="/articles" component={Articles} />
       <Route path="/about" component={About} />
       </Routes>

       <div className="navigation">
         <div className="navigation-sub">

           // Set up the Links
           <Link to="/" className="item">Projects</Link>
           <Link to="/articles" className="item">Articles</Link>
           <Link to="/about" className="item">About</Link>
         </div>
       </div>
       /*<img src={logo} className="logo-image" alt="Logo Image" />*/
     </div>
    </BrowserRouter>
  );
}

export default App;

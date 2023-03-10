import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/profile/Profile';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products/1">First Product</Link>
            </li>
            <li>
              <Link to="/products/2">Second Product</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>

          <Route path="/" element={<Home/> } />
          {/* <Route path="/" element={Index } ><h2>Home</h2> </Route> */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/NotFound" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

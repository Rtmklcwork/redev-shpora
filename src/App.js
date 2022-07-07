import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Components from './components/Components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Navbar/>
    <Routers>
    <Route path='/home' element={<Home/>}/>
    <Route path='/component' element={<Components/>}/>  
     </Routers>
   
    </div>
    </BrowserRouter>
  );
}

export default App;

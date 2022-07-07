import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Components from './components/Components';
import Comp1 from './components/Class'; 

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route>
    <Route path='/home' element={<Home/>}/>
    <Route path='/component' element={<Components/>}/>  
     </Route>
   
    </div>
    </BrowserRouter>
  );
}

export default App;

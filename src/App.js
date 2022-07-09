import './App.css';
import Home from './components/Home';
import Components from './components/Components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Prop from './components/Prop';
import State1 from './components/State';
import Lifecycle from './components/Lifecycle';
import Events from './components/Events';
import Refs from './components/Refs';
import Keys from './components/Keys';
import Acync from './components/Acync';
import VirtualDom from './components/VirtualDom';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />  
        

        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/components' element={<Components />} />
          <Route path='/prop' element={<Prop/>} />
          <Route path='/state1' element={<State1/>}/>
          <Route path='/Lifecycle' element={<Lifecycle/>}/>
          <Route path='/Events' element={<Events/>}/>
          <Route path='/Keys' element={<Keys/>}/>
          <Route path='/Refs' element={<Refs/>}/>
          <Route path='/Acync' element={<Acync/>}/>
          <Route path='/VirtualDom' element={<VirtualDom/>}/>
         </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, Mixes, Contact } from './pages';
import './index.css'


function App() {
  

  return (
    <main className="bg-slate-300/20 h-full">
    <Router>
     <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
       
        <Route  path="/mixes" element={<Mixes/>}/>
        <Route  path="/contact" element={<Contact/>}/> 

  </Routes>
  </Router>
  </main>
  
      
  );
}

export default App;

import React from "react";
import { Routes,Route, Router } from "react-router-dom";
import Complaint from './pages/Complaint';
import Anonymus from "./pages/Anonymus";
import Self from "./pages/Self";
import Other from "./pages/Other";
 import './App.css';

const App = () => {
  
  return (  
   

  <>
  
  <Routes>
    
  <Route exact path='/'  element={<Complaint />} />
 <Route path='/anonymus' element={<Anonymus />} />
 <Route path='/Self' element={<Self />} />
 <Route path='/Other' element={<Other />} />
 
  </Routes>

  </>
  
  );
};

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,Link,useNavigate} from 'react-router-dom';
import Edit from './components/Edit';
import Home from './components/Home';

function App() {

 return(
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Raima" element={<Edit />} />
    </Routes>
  </Router>
)
}
export default App;

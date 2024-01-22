import { useState } from 'react'
import { block } from 'million'
import './App.css'
import Nav from './components/NavBar/Navbar';
import Home from './components/NavBar/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const  App=block(() => {


  return (
    <Router>
    <div className='w-full mx-auto pt-0'>
   <Nav />
   <Routes>
    <Route path='/' element={<Home />} />
   </Routes>

    </div>
    </Router>
  )
});

export default App

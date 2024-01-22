import { useState } from 'react'
import { block } from 'million'
import './App.css'
import Nav from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Articles from './components/Articles/Articles';

const  App=block(() => {


  return (
    <Router>
    <div className='w-full mx-auto pt-0'>
   <Nav />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/articles' element={<Articles />} />
   </Routes>

    </div>
    </Router>
  )
});

export default App

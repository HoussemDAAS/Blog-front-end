import { useState } from 'react'
import { block } from 'million'
import './App.css'
import Nav from './components/NavBar/Navbar';
import Home from './components/NavBar/Home/Home';


const  App=block(() => {


  return (
    <div className='w-full mx-auto pt-0'>
   <Nav />
<Home/>
    </div>
  )
});

export default App

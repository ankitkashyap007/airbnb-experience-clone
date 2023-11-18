import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import  Card from "./components/Card"
import data from "./data";
import "./App.css"

function App() {

  return (
    <>
    <Navbar/>
    <Hero/> 
    <section className='cards-list'>
    {
      data.map(item => <Card {...item} />)
    }
    </section> 
    </>
  )
}

export default App

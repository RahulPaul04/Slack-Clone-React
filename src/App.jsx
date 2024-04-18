import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Details from './components/Details'
import Sales from './components/Sales'
import More from './components/More'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Details/>
    <Sales/>
    <More/>
    <Footer/>
    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import { Navbar } from './components'
import {Hero, Advert, About} from './containers'

import './app.css'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Hero/>} />
      </Routes>
      <Advert />
      <About/>
    </>
  )
}

export default App
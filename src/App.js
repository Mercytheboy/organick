import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './app.css'
import Layout from './containers/layout'
import Home from './pages/home'
import About from './pages/about'
import Pages from './pages/pages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pages' element={<Pages />} />
        </Route>
      </Routes>
 
    </>
  )
}

export default App
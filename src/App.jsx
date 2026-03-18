import React from 'react'
import Header from './components/Header'
import AppRoutes from './components/AppRoutes'
import Footer from './components/Footer'

function App() {
  return (
    <div className=''>
      <Header/>
      <div>
        <AppRoutes/>
      </div>
      <Footer/>
    </div>
  )
}

export default App

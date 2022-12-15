import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'

const App = () => (
    <>
    <div className='bg-gray-900'>
      <Navbar />
      <Hero />
      <Stats />
    </div>
    </>
  )

export default App
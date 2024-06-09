import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <div className='flex-1 w-full'>
          <Navbar />
          <div>{children}</div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Layout

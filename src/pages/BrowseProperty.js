import React from 'react'
import BrowseProperties from '../Components/BrowseProperties'
import About from '../Components/About'
import Layout from '../layout'
import HouseProperty from '../Components/HouseProperty'

function BrowseProperty() {
  return (
    <div>
      <div className='overflow-hidden'>
        <Layout>
          <BrowseProperties />
         <div className=' bg-gray-1400'>
         <About />
         <HouseProperty/>
         </div>
        </Layout>
      </div>

    </div>
  )
}

export default BrowseProperty

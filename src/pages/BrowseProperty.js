import React from 'react'
import BrowseProperties from '../Components/BrowseProperties'
import About from '../Components/About'
import Layout from '../layout'

function BrowseProperty() {
  return (
    <div>
      <div className='overflow-hidden'>
        <Layout>
          <BrowseProperties />
          <About />
        </Layout>
      </div>

    </div>
  )
}

export default BrowseProperty

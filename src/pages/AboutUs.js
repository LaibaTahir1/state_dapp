import React from 'react'
import PropertyHouse from '../Components/PropertyHouse'
import Layout from '../layout'
import AboutHouse from '../Components/AboutHouse'
import Detail from '../Components/Detail'
import Description from '../Components/Description'
import Features from '../Components/Features'

function AboutUs() {
  return (
    <Layout>
      <PropertyHouse />
      <AboutHouse/>
      <Detail />
      <Description />
      <Features />
    </Layout>
  )
}

export default AboutUs

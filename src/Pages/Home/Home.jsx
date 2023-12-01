/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Chad Smith</title>
       
      </Helmet>
      <Header/>
    </div>
  )
}

export default Home
/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/routes'
import { HelmetProvider } from 'react-helmet-async';
const App = () => {
  return (
    <HelmetProvider>
      <div className='overflow-x-hidden'>
      
      <RouterProvider router={routes}/>
    </div>
    </HelmetProvider>
  )
}

export default App
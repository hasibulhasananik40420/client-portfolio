/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/routes'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
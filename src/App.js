import './App.css'
import { useState, useEffect } from 'react'
import Projects from './components/Projects'
import MenuItem from './components/MenuItem'
import AboutMe from './components/AboutMe'
import menuItems from './menuItems'
import WebFont from 'webfontloader'
import useVH from 'react-viewport-height'

function App() {
  useVH() // points to App.less (vh var)

  const unClickAll = []

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          'Ubuntu',
          'Roboto',
          'Open Sans',
          'Source Sans Pro',
          'Montserrat'
        ]
      }
    })
  })

  return (
    <div className="App">
      {
        menuItems.map((menuItem, index) => {
          return <MenuItem
            {...menuItem}
            key={index}
            index={index}
            unClickAll={unClickAll}
            first={index === 0}
            last={index === menuItems.length - 1}
          />
        })
      }
    </div>
  )
}

export default App

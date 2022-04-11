import { useState, useEffect } from 'react'
const background = '#007EA7'
const backgroundActive = '#ABFAA9'

export default function MenuItem (props) {
  const {
    index,
    unClickAll,
    name,
    first,
    last,
    Content
  } = props
  const [ clicked, setClicked ] = useState(index === 0 ? true : false)
  const isExperience = /experience/.test(name)

  const style = {
    flex: clicked ? 1 : 0
  }

  const nameStyle = {
    background: clicked ? backgroundActive : background,
    boxShadow: clicked && 'rgb(52 52 52 / 28%) 0px 5px 15px 0px',
    color: clicked ? 'black' : 'white'
  }

  unClickAll.push(() => setClicked(false))

  const onMenuItemClick = () => {
    if (!clicked) {
      unClickAll.forEach(cb => cb())
      setClicked(!clicked)
    }
  }

  return (
    <div 
      className={`menu-item ${first ? 'first' : ''} ${last ? 'last' : ''}`}
      onClick={onMenuItemClick}
      style={style}
    >
      <div className='name' style={nameStyle}>
        {name}
      </div>
      <div className={`content ${isExperience ? 'no-padding' : ''}`}>
        {Content && Content()}
      </div>
    </div>
  )
}


import { useState, useEffect } from 'react'

export default function MenuItem (props) {
  const {
    index,
    unClickAll,
    background,
    color,
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
    background: background,
    borderBottom: clicked ? '1px solid black' : '',
    color: color
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


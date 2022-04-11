import { useState } from 'react'
import Hyphenated from 'react-hyphen'

export default function Project (props) {
  const {
    image,
    name,
    description,
    link
  } = props
  const [hovered, setHovered] = useState(false)

  const imageStyle = {
    backgroundImage: `url(${image})`
  }

  const nameStyle = {
    display: hovered ? 'none' : 'block'
  }

  const descriptionStyle = {
    display: hovered ? 'block' : 'none'
  }

  const contentStyle = {
    flex: hovered ? 1 : 'unset'
  }

  return (
    <div
      className='project'
      style={imageStyle}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={() => {
        if (hovered && link) window.open(link, '_blank').focus()
      }}
    >
      <div
        className='project-content'
        style={contentStyle}
      >
        <div
          className='project-content__name'
          style={nameStyle}
        >
          {name}
        </div>
        <div
          className='project-content__description'
          style={descriptionStyle}
        >
          <Hyphenated>{description}</Hyphenated>
        </div>
      </div>
    </div>
  )
}


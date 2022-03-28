import ProgressBar from './ProgressBar'

export default function Skill (props) {
  const { name, progress } = props

  return (
    <div className='skill'>
      <div className='skill-name'>
        {name}
      </div>
      <ProgressBar progress={progress} />
    </div>
  )
}


export default function ProgressBar (props) {
  const { progress } = props

  const style = {
    width: progress + '%'
  }

  return (
    <div className='progress'>
      <span className='progress-bar' style={style} />
    </div>
  )
}

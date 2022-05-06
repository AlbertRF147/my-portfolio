import Skill from './Skill'

export default function Skills (props) {
  return (
    <>
      <div className='skills front-end'>
        <div className='title'>
          Front-end
        </div>
        <div className='skills-container'>
          <Skill name='HTML' progress={100} />
          <Skill name='CSS' progress={90} />
          <Skill name='Vanilla' progress={90} />
          <Skill name='React' progress={80} />
          <Skill name='jQuery' progress={80} />
          <Skill name='Vue' progress={20} />
        </div>
      </div>

      <div className='skills front-end'>
        <div className='title'>
          Back-end
        </div>
        <div className='skills-container'>
          <Skill name='NodeJS' progress={50} />
          <Skill name='MongoDB' progress={60} />
          <Skill name='MySQL' progress={90} />
          <Skill name='PHP' progress={70} />
          <Skill name='MSSQL' progress={90} />
        </div>
      </div>

      <div className='skills front-end'>
        <div className='title'>
          Tools
        </div>
        <div className='skills-container'>
          <Skill name='Git' progress={100} />
          <Skill name='GitHub' progress={90} />
          <Skill name='Webpack' progress={50} />
          <Skill name='Jest' progress={40} />
          <Skill name='Docker' progress={20} />
          <Skill name='Bash' progress={30} />
        </div>
      </div>
    </>
  )
}

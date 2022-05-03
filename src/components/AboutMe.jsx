import Hyphenated from 'react-hyphen'

const H = props => {
  const style = {
    color: '#FF331F'
  }

  return <span style={style}>{props.children}</span>
}

export default function AboutMe (props) {
  return (
    <>
      <h1 className='about-me-title'>
        AlbertRF
        <span>Web Developer</span>
      </h1>
      <div className='about-me-content'>
        <div className='about-me-avatar' />
          <Hyphenated>
            <H>Self-taught</H>, <H>ambitious</H> and a <H>fast-learner</H> developer. Someone that proudly can say that loves his job. I have acquired great experience in e-commerce working with big brands like Louis Vuitton, TJX and THG groups, and many more, delivering the best user experiences using <H>JS</H>.

            <p>I was very lucky to begin my professional career in a start-up environment with very talented people, where I developed other great skills like <H>fellowship</H>, <H>mentoring</H> and <H>commitment</H>. As someone passionate about my job it hasn’t been difficult for me to progress into a senior position in less than 2 years.</p>

            <p>I enjoy working with the latest front-end libraries like <H>React</H> and <H>Vue</H>. I am most familiar with the <H>MERN</H> stack but I have also worked with <H>LAMP</H> in the past. I love to learn new technologies and cutting-edge tech stuff.</p>

            As a developer, I feel confortable with terminals. I found my sweet-spot in terms of speed and productivity in my <H>Alacrity</H> terminal, with <H>Git</H>, <H>Tmux</H> and <H>Vim</H> as my personal Swiss knife. I have great <H>autonomy</H> and I am used to work in <H>fast-paced</H> and <H>collaborative</H> <H>Agile</H> environments.

            Looking forward to hear from you if the above sounds interesting 😉
          </Hyphenated>
      </div>
    </>
  )
}


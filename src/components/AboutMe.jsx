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
            <H>Self-taught</H> developer, <H>ambitious</H> and <H>fast-learner</H>. My dream was to one day make my hobby (web development) become my job, and that dream came through on September 19. Since then I have been enjoying every single day in the industry. I rapidly learned my way around and turned into <H>senior</H> in less than 2 years. As many others, I did some <H>PHP</H> in the past but slowly replaced that by <H>JS</H>. My preferred front-end framework is <H>React</H> but I also had exposure to <H>Vue</H> from time to time. Overall, I enjoy working with <H>MERN</H> but I am also very familiar with the LAMP stack. Over the past years, I found my sweet-spot in terms of speed and productivity in my <H>Alacrity</H> terminal, with <H>Git</H>, <H>Tmux</H> and <H>Vim</H> as part of my Swiss army knife. I enjoy working in <H>fast-paced</H>, <H>collaborative</H> and <H>agile</H> environments. I love to learn new technologies and to never stop learning and growing.
            Don’t be shy, drop me a line if you wish to work with me.
          </Hyphenated>
      </div>
    </>
  )
}


import React from 'react';
import Hyphenated from 'react-hyphen'
import {
  Timeline,
  themes,
  createTheme,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline'
import freelancerImage from '../images/freelancer.jpeg'
import qubitImage from '../images/qubit.png'
import coveoImage from '../images/coveo.png'

const freelanceText = `
<img class="icon" src="${freelancerImage}" alt="drawing" width="200"/>

### Freelance dev

Here is when I finally stepped out of "the cavern" and decided to start my professional career as a Web developer.
I participated in a contest to redesign a multistep online form. The front-end framework I used was Vue. My entry finished #2 out of other 44 from devs around the world.
`

const qubitText = `
<img class="icon" src="${qubitImage}" alt="drawing" width="100"/>

### Client Engineer

Finally I landed my first job in a business and that was at Qubit. I joined the professional services team at Qubit as a Client Engineer and participated in the transition of the department to Agile. I rapidly evolved and learned the job, which lead me to my promotion to Senior in a significantly short period of time. A tipical CE at Qubit is reponsible for building and delivering bespoke A/B tests and scalable integrations, written in JS. The position also involved implementing the Qubit product on client sites, training clients and partners in Qubit usage and best practices, and becoming an expert in the product.
`

const qubitSeniorText = `
<img class="icon" src="${qubitImage}" alt="drawing" width="100"/>

### Senior Client Engineer

Stepped up a notch and became senior in my CE position. I happily took more ownership and responsibilities and lead a few complex integrations for some big logos like Louis Vuitton, TJX group and G-Star to name a few. Also as a senior I improved my mentoring skills and became one of the "go to" persons in the business.
`

const coveoText = `
<img class="icon" src="${coveoImage}" alt="drawing" width="200"/>

### Senior Client Engineer - Solution Architect (Hybrid)

Every cloud has a silver lining. After the aquisition, Coveo has put the trust in me to start the transition from CE to Solution Architect role. I'll be one of the first former Qubit engineers to learn the new business technology so one day I can train and support my collegues. It's exciting to look at the future and I am always keen to learn new technologies.
`

const customTheme = createTheme(themes.default, {
  textAtom: {
    textAlign: 'left',
    padding: '0 1rem',
    fontFamily: 'Montserrat',
    fontSize: '1rem'
  },
  date: {
    backgroundColor: '#FF331F'
  },
  marker: {
    borderColor: '#FF331F'
  },
  timelineTrack: {
    backgroundColor: '#FF331F'
  }
})

export default function Experience (props) {
  return (
    <Timeline
      theme={customTheme}
    >
      <Events>
        <TextEvent date="Nov 20' - Present" text={coveoText} />
        <TextEvent date="Nov 20' - Nov 21" text={qubitSeniorText} />
        <TextEvent date="Sep 20' - Nov 20'" text={qubitText} />
        <TextEvent date="Mar 19' - Sep 20'" text={freelanceText} />
      </Events>
    </Timeline>
  )
}

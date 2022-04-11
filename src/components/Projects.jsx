import Project from './Project'
import codeImage from '../images/code.jpg'
import multistepFormImage from '../images/multistep-form.jpg'
import inventoryAppImage from '../images/inventory-app.jpg'
import mazeImage from '../images/maze.jpg'
import dotfilesImage from '../images/dotfiles.jpg'

export default function Projects (props) {
  return (
    <>
      <Project
        name='Portfolio'
        description='Recently I updated my portfolio to give it a brush up and to make it mobile friendly. I used React and a few other libraries and frameworks like Pure CSS and react-timeline. There is also an API developed using express and nodemailer that uses Gmail Google APIs to send me and email in case you wish to contact me 😉 .'
        image={codeImage}
        link='https://github.com/AlbertRF147/my-portfolio'
      />
      <Project
        name='Multistep Form'
        description='A multistep form built using Vue and Vue router. This project was done to participate in a contest at Freelancer.com and got me to second position out of 44 in total. This was one of my first professional projects.'
        image={multistepFormImage}
        link='https://github.com/AlbertRF147/multistep-form-v2'
      />
      <Project
        name='Inventory App'
        description='A web app built using React and Material UI at the front-end, and FeathersJS at the backend. In essence it is a CRUD APP that helps managing inventories for different types of public entities like schools. This is my biggest personal project. It is still under construction and the repo is private. I can give more details upon request.'
        image={inventoryAppImage}
        link='https://github.com/AlbertRF147/inventari-app'
      />
      <Project
        name='A-maze-ing'
        description='A project I built some time ago when experimenting with algorithms. It uses vanilla JS and the backtrack algo to generate a maze of different sizes and to also provide the solution.'
        image={mazeImage}
        link='https://github.com/AlbertRF147/A-maze-ing'
      />
      <Project
        name='Dotfiles'
        description='My dot files repo with all my configurations for the best IDE in the world (VIM).'
        image={dotfilesImage}
        link='https://github.com/AlbertRF147/dotfiles'
      />
    </>
  )
}


import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faC } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a Computer Science major undergraduate from Iowa State University looking to get my first full time post-
            graduation job.
          </p>
          <p align="LEFT">
            I have experience in both front-end, back-end and full-stack development. I'm am naturally curious and loves 
             learning. I am very focused and motivated when working on anything I do.
          </p>
          <p>
            If I need to define myself in one sentence, I am a hardworking, reliable and tech-obsessed.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#E51937" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#FFFFFF" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faC} color="#2CB7F6"/>
            </div>
            <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
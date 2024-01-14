import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-t.png'
import Loader from 'react-loaders'
import './index.scss'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    const nameArray = ['z', 'e', ' ', 'Y', 'i', 'k', '(', 'E', 'l', 's', 'o', 'n' ,')']
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ','S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'u', 'n', 'd', 'e', 'r', 'g', 'r', 'a', 'd', '.']
  
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover') 
        }, 5500)   
    }, [])
  
    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img
                src={LogoTitle}
                alt="Name"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={28}
              />
            </h1>
            <h2>Java / JavaScript / React / Python / C / C# / MySQL / MongoDB / Neo4j</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo/>
        </div>
        <Loader type="pacman" />
      </>
    )
  }
  
export default Home
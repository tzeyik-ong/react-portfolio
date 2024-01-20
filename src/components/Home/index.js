import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-t.png'
import Loader from 'react-loaders'
import './index.scss'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    const nameArray1 = ['z', 'e', ' ', 'Y', 'i', 'k']
    const nameArray2 = ['(','E', 'l', 's','o','n',')']
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
              <span className={`${letterClass} _13`}> </span>
              <span className={`${letterClass} _14`}>I</span>
              <span className={`${letterClass} _15`}>'m</span>
              <br />
              <img
                src={LogoTitle}
                alt="Name"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray1}
                idx={16}
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray2}
                idx={22}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={29}
              />
            </h1>
            <h2>Java / JavaScript / React / Python / C / C# / MySQL / MongoDB / Neo4j</h2>
            <Link to="/react-portfolio/contact" className="flat-button">
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
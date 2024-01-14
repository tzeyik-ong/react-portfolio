import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoT from '../../../assets/images/logo-t.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoT}
        alt="JavaScript,  Developer"
      />

      <svg
        width="1066pt"
        height="1316pt"
        version="1.1"
        viewBox="0 0 1066 1316"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(-145 -130) scale(3.75 3.75)"
          fill="none"
        >
          <path
            d="M 133.92396,248.75752 V 115.27523 H 86.298955 38.673954 V 87.823692 60.372158 L 51.573394,47.474732 64.472835,34.577307 H 192.33173 320.19063 V 61.894545 89.211783 L 307.1609,102.2435 294.13118,115.27523 H 259.5359 224.94063 v 120.58956 120.58956 l -12.89844,12.89196 -12.89844,12.89197 -32.60989,7.7e-4 -32.6099,7.7e-4 z m 77.45574,120.7172 c 6.87643,-6.87529 12.5026,-12.59029 12.5026,-12.7 0,-0.10972 -14.31774,-0.19948 -31.81718,-0.19948 h -31.81718 l -12.69794,12.7 -12.69793,12.7 h 32.01252 32.01251 z m -19.31253,-13.16407 h 32.34429 V 223.11458 c 0,-73.25784 0.0723,-133.384407 0.1606,-133.61459 0.14562,-0.379478 4.58775,-0.418514 47.625,-0.418514 h 47.4644 V 62.093974 35.106473 H 192.19944 64.737415 L 51.837978,48.003899 38.938538,60.901324 V 87.624221 114.34712 L 51.573415,101.7143 64.208295,89.081476 h 47.674515 c 34.46827,0 47.72447,0.08085 47.85489,0.291863 0.10515,0.170147 -5.12944,5.605862 -12.5521,13.034361 l -12.73247,12.74251 V 248.36325 381.57629 L 147.088,368.94347 159.72288,356.31065 Z M 146.75625,102.04606 159.45419,89.346059 H 112.09377 64.733345 l -12.697932,12.700001 -12.697933,12.7 h 47.360415 47.360425 z m 159.87345,0.19948 c 6.87643,-6.875279 12.5026,-12.590612 12.5026,-12.700728 0,-0.110116 -21.16336,-0.170117 -47.02969,-0.133336 l -47.02969,0.06687 -0.0687,12.633844 -0.0687,12.63386 h 34.5958 34.5958 z"/>
          </g>
      </svg>
    </div>
  )
}

export default Logo
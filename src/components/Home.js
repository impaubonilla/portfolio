import React from 'react'
import WelcomeBanner from './WelcomeBanner'
import styled from 'styled-components'

export const Introduction = styled.div`
  color: #e8e8e8;
  margin: 0 2rem;
  h1 {
      min-width: 100%;
      margin: 0;
      font-family: 'Bungee Shade', cursive;
      line-height: 3.5cm;
      font-size: 120px;
      font-weight: 100;
      transition: 0.2s ease;
      cursor: none;

      &:hover {
          color: #faed27;
          font-size: 122px;
          transition: 0.1s ease;
      }
  }
`

export default function Home() {
    return (
        <div>
            <WelcomeBanner />
            <Introduction>
                <h1>Hello there,</h1>
                <h1>I'm Paulo</h1>
                <h3>I'm a Front End Web Developer. </h3>
                <p>This is my website, please feel welcomed to browse through it and learn more about me &amp; my work. Thank you for your time, enjoy!
                And maybe you can help me improve my skills. If you have any feedback or ways that I can work on, you can always contact me, hit me up! Always open to your guys’ point of views</p>
            </Introduction>
        </div>
    )
}
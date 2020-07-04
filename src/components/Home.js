import React from 'react'
import WelcomeBanner from './WelcomeBanner'
import styled from 'styled-components'

export const Introduction = styled.div`
  color: #e8e8e8;
  margin: 0 2rem;
`

export const Greetings = styled.div`
  min-height: 500px;
  @media (max-width: 768px) {
    min-height: 400px;
  }
  @media (max-width: 480px) {
    min-height: 400px;
  }
  @media (max-width: 380px) {
    min-height: 400px;
  }
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
      height: 122px;
      min-width: 100%;
      margin: 0;
      font-family: 'Bungee Shade', cursive;
      line-height: 1;
      font-size: 120px;
      @media (max-width: 768px) {
        height: 92px;
        font-size: 90px;
      }
      @media (max-width: 480px) {
        height: 90px;
        font-size: 70px;
      }
      @media (max-width: 380px) {
        height: 80px;
        font-size: 60px;
      }
      font-weight: 100;
      transition: 0.3s ease;
      cursor: none;

      &:hover {
          color: #faed27;
          font-size: 122px;
          transition: 0.2s ease;
          @media (max-width: 768px) {
            font-size: 94px;
          }
          @media (max-width: 480px) {
            font-size: 74px;
          }
          @media (max-width: 380px) {
            font-size: 64px;
          }
      }
  }
`

export default function Home() {
  return (
    <div>
      <WelcomeBanner />
      <Introduction>

        <Greetings>
          <h1>Hello</h1>
          <h1>there,</h1>
          <h1>I'm</h1>
          <h1>Paulo</h1>
        </Greetings>

        <h3>I'm a Front End Web Developer. </h3>
        <p>This is my website, please feel welcomed to browse through it and learn more about me &amp; my work. Thank you for your time, enjoy!
                And maybe you can help me improve my skills. If you have any feedback or ways that I can work on, you can always contact me, hit me up! Always open to your guys’ point of views.</p>

      </Introduction >
    </div >
  )
}
import React from 'react'
import WelcomeBanner from './WelcomeBanner'
import styled from 'styled-components'

export const Introduction = styled.div`
  color: #e8e8e8;
  margin: 2rem;
  h1 {
      min-width: 100%;
      margin: 0;
      font-family: 'Luckiest Guy', cursive;
      line-height: 3.5cm;
      font-size: 130px;
      font-weight: 100;
  }
`

export default function Home() {
    return (
        <div>
            <WelcomeBanner />
            <Introduction>
                <h1>Hello there,</h1>
                <h1>I'm Paulo</h1>
                <p>I'm a Front End Web Developer. </p>

                just commiting
            </Introduction>
        </div>
    )
}
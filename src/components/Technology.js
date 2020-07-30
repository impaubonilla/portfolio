import React from 'react'
import styled from 'styled-components'
import macbookPro from '../images/tech/macbook-pro-2019.jpg'
import dell from '../images/tech/dell-ultrasharp-U2718Q.jpg'

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #ffffff;
`

export default function Technology() {
    return (
        <TechWrapper>
            <img src={macbookPro} alt="macbook-pro-2019" />
            <img src={dell} alt="dell-ultrasharp-U2718Q" />
        </TechWrapper>
    )
}


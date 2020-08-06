import React from 'react'
import { TechWrapper, TechImg } from '../Technology/index'
import macbookPro from '../../images/tech/macbook-pro-2019.jpg'
import dell from '../../images/tech/dell-ultrasharp-U2718Q.jpg'

export default function Technology() {
  return (
    <TechWrapper>
      <TechImg src={macbookPro} alt="macbook-pro-2019" />
      <TechImg src={dell} alt="dell-ultrasharp-U2718Q" />
    </TechWrapper>
  )
}


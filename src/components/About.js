import React from 'react'
import { Bio, Tools, Contacts } from './info'
import styled from 'styled-components'
import self from '../images/self.jpg'

export const Section = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  color: #e8e8e8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const DPContainer = styled.div`
  position: relative;
  height: 65vh;
  overflow: hidden;
`

export const DisplayPicture = styled.img`
  width: 100%;
`

export default function About() {
  return (
    <Section>
      <DPContainer>
        <DisplayPicture src={self} alt="me" />
      </DPContainer>
      <Bio />
      <Tools />
      <Contacts />
    </Section>
  )
}

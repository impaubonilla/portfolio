import React from 'react'
import { Bio, Tools, Contacts } from '../../components/Info/Info'
import { AboutContainer, DPContainer, DisplayPicture } from '../About/index'
import self from '../../images/user-profile/self.jpg'

export default function About() {
  return (
    <AboutContainer>
      <DPContainer>
        <DisplayPicture src={self} alt="me" />
      </DPContainer>
      <Bio />
      <Tools />
      <Contacts />
    </AboutContainer>
  )
}

import React from 'react'
import { Instagram, Twitter, Facebook, YouTube, ContactsStyle } from '../styled'
import styled from 'styled-components'

export const Section = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  /* border-top: 1px solid rgba(255, 255, 255, 0.1); */
  h4 {
      font-weight: 400;
  }
`

export const Subheader = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
`

export const Text = styled.p`
  padding: 1rem;
  a {
    text-decoration: none;
  }
`

export const ToolsContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 1rem;
`

export const Lang = styled.ul`
  display: flex;
  align-items: center;
  border-radius: 3px;
  font-size: 12px;
  padding: 8px;
  margin-right: 1rem;
  background-color: #222222;
`

export const ContactsContainer = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Bio = () => {
  return (
    <Section>
      <Subheader>Bio</Subheader>
      <Text>Hello, my name is Paulo Feliciano Bonilla. I have a deep passion for programming and graphic design. I am self taught, it gets really difficult sometimes however I learned that it’s a part of my process and I am learning how to enjoy it. I have mentors by my side showing me all the resources I needed and they have helped me start my foundation. For example, I’ve skillfully acquired the knowledge of Javascript, HTML, CSS</Text>
      <Text>
        I'm currently living in Los Angeles. I love listnening to music and I love to draw.
        If you're interested to know more,
      feel free to go to my <Instagram>Instagram</Instagram> account,
      I have <Twitter>Twitter</Twitter> as well, but I don't tweet frequently and yes,
      I have <Facebook>Facebook</Facebook> and <YouTube>YouTube</YouTube>, too!
      </Text>
    </Section>
  )
}

export const Tools = () => {
  return (
    <Section>
      <Subheader>Tools</Subheader>
      <h4>Languages:</h4>
      <ToolsContainer>
        <Lang>html5</Lang>
        <Lang>javascript</Lang>
        <Lang>css3</Lang>
        <Lang>scss</Lang>
      </ToolsContainer>
      <h4>Frameworks:</h4>
      <ToolsContainer>
        <Lang>react.js</Lang>
        <Lang>node.js</Lang>
      </ToolsContainer>
    </Section>
  )
}

export const Contacts = () => {
  return (
    <Section>
      <Subheader>Contacts</Subheader>
      <ContactsContainer>
        <ContactsStyle><a href="https://www.linkedin.com/in/paulo-bonilla-2375851aa/" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a></ContactsStyle>
        <ContactsStyle><a href="https://github.com/paubonilla" target="_blank" rel="noopener noreferrer" className="github">GitHub</a></ContactsStyle>
        <ContactsStyle><a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer" className="email">Email</a></ContactsStyle>
        <ContactsStyle><a href="https://www.instagram.com/impaubonilla/" target="_blank" rel="noopener noreferrer" className="instagram">Instagram</a></ContactsStyle>
        <ContactsStyle><a href="https://www.twitter.com/pxixcv" target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a></ContactsStyle>
      </ContactsContainer>
    </Section >
  )
}
import React from 'react'
import { Instagram, Twitter, Facebook, YouTube, ContactsStyle } from '../../costomization/Styled'
import { InfoContainer, Subheader, Text, ToolsContainer, Lang, ContactsContainer } from '../Info/index'

export const Bio = () => {
  return (
    <InfoContainer>
      <Subheader>Bio</Subheader>
      <Text>Hello, my name is Paulo Feliciano Bonilla. I have a deep passion for programming and graphic design. I am self taught, it gets really difficult sometimes however I learned that it’s a part of my process and I am learning how to enjoy it. I have mentors by my side showing me all the resources I needed and they have helped me start my foundation. For example, I’ve skillfully acquired the knowledge of Javascript, HTML, CSS</Text>
      <Text>
        I'm currently living in Los Angeles. I love listnening to music and I love to draw.
        If you're interested to know more,
      feel free to go to my <Instagram>Instagram</Instagram> account,
      I have <Twitter>Twitter</Twitter> as well, but I don't tweet frequently and yes,
      I have <Facebook>Facebook</Facebook> and <YouTube>YouTube</YouTube>, too!
      </Text>
    </InfoContainer>
  )
}

export const Tools = () => {
  return (
    <InfoContainer>
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
    </InfoContainer>
  )
}

export const Contacts = () => {
  return (
    <InfoContainer>
      <Subheader>Contacts</Subheader>
      <ContactsContainer>
        <ContactsStyle><a href="https://www.linkedin.com/in/paulo-bonilla-2375851aa/" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a></ContactsStyle>
        <ContactsStyle><a href="https://github.com/paubonilla" target="_blank" rel="noopener noreferrer" className="github">GitHub</a></ContactsStyle>
        <ContactsStyle><a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer" className="email">Email</a></ContactsStyle>
        <ContactsStyle><a href="https://www.instagram.com/impaubonilla/" target="_blank" rel="noopener noreferrer" className="instagram">Instagram</a></ContactsStyle>
        <ContactsStyle><a href="https://www.twitter.com/pxixcv" target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a></ContactsStyle>
      </ContactsContainer>
    </InfoContainer >
  )
}
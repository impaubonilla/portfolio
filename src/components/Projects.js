import React from 'react'
import ttt from '../images/projects/tic-tac-toe.png'
import styled from 'styled-components'

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;

  ul {
      list-style: none;
      li {
          margin: 2rem;
      }
  }
`

export const ProjcetsImage = styled.img`
  width: 100%;
`

export default function Projects() {
    return (
        <div>
            Proyekto
            <ProjectsContent>
                <ProjcetsImage src={ttt} alt="tic tac toe" />
                <div>
                    <p>A The Office theme tic tac toe game. This game is built with React, HTML5, CSS3, SASS, Styled Components, and Javascript. </p>
                </div>
                <ul>
                    <li><a href="https://paubonilla.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">Play Game</a></li>
                    <li><a href="https://github.com/paubonilla/tic-tac-toe" target="_blank" rel="noopener noreferrer">View code</a></li>
                </ul>
            </ProjectsContent>
        </div>
    )
}

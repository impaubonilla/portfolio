import React from 'react'
import ttt from '../images/projects/tic-tac-toe.png'
import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  margin: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .desc {
    margin: 1rem 0;
    padding: 1rem;
    color: #e8e8e8;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .ul {
    list-style: none;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    .li {
      display: flex;
      align-items: center;
      margin: 2px 0;
      a {
        display: flex;
        justify-content: center;
        background-color: #e8e8e8;
        width: 120px;
        padding: 1rem;
        text-transform: uppercase;
        color: #333436;
      }
    }
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const ProjcetsImageStyle = styled.img`
  width: 100%;
`

export const TicTacToe = () => {
  return (
    <ProjectsWrapper>
      <ProjectsContent>
        <ProjcetsImageStyle src={ttt} alt="tic tac toe" />
        <div className="desc">
          <p>A The Office theme tic tac toe game. This game is built with React, HTML5, CSS3, SASS, Styled Components, and Javascript. </p>
        </div>
        <ul className="ul">
          <li className="li"><a href="https://paubonilla.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">Play Game</a></li>
          <li className="li"><a href="https://github.com/paubonilla/tic-tac-toe" target="_blank" rel="noopener noreferrer">View code</a></li>
        </ul>
      </ProjectsContent>
    </ProjectsWrapper>
  )
}
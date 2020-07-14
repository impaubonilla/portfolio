import React from 'react'
import ttt from '../images/projects/tic-tac-toe.png'
import styled from 'styled-components'

export const ProjectWrapper = styled.div`
  background-color: #e8e8e8;
  color: #333436;

  .desc {
    margin: 1rem 0;
    padding: 1rem;
  }
  .buttons {
    list-style: none;
    display: flex;
    align-items: center;
    .li {
      display: flex;
      align-items: center;
      margin: 2px 0;
    }
  }
`

export const ALink = styled.a`
  color: ${({ primary }) => (primary ? '#e8e8e8' : '#333436')};
  display: flex;
  justify-content: center;
  font-size: 12px;
  background-color: ${({ primary }) => (primary ? '#333436' : 'transparent')};
  border: ${({ primary }) => (primary ? '1px solid #333436' : '0')};
  margin-right: ${({ primary }) => (primary ? '10px' : '0')};
  border-radius: ${({ primary }) => (primary ? '5px' : '0')};
  padding: ${({ primary }) => (primary ? '8px' : '0')};
  text-transform: ${({ primary }) => (primary ? 'uppercase' : 'normal')};

  p {
    border-bottom: 1px solid #333436;
  }
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
`

export const ProjcetImageStyle = styled.img`
  width: 100%;
`

export const TicTacToe = () => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjcetImageStyle src={ttt} alt="tic tac toe" />
        <div className="desc">
          <h2>Tic Tac Toe</h2>
          <p>A The Office theme tic tac toe game. This game is built with React, HTML5, CSS3, SASS, Styled Components, and Javascript. </p>
          <ul className="buttons">
            <li><ALink primary href="https://paubonilla.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">Play Game</ALink></li>
            <li><ALink href="https://github.com/paubonilla/tic-tac-toe" target="_blank" rel="noopener noreferrer"><p>View code</p></ALink></li>
          </ul>
        </div>
      </ProjectContent>
    </ProjectWrapper>
  )
}
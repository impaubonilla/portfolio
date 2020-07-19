import React from 'react'
import { ProjectWrapper, ALink, ProjectContent, ProjcetImageStyle } from '../styled'
import ttt from '../images/projects/tic-tac-toe.png'

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

export const DMVTest = () => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjcetImageStyle src={ttt} alt="tic tac toe" />
        <div className="desc">
          <h2>DMV Permit Practice Test</h2>
          <p>A The Office theme tic tac toe game. This game is built with React, HTML5, CSS3, SASS, Styled Components, and Javascript. </p>
          <ul className="buttons">
            <li><ALink primary href="https://paubonilla.github.io/dmv-permit-test/" target="_blank" rel="noopener noreferrer">Take Test</ALink></li>
            <li><ALink href="https://github.com/paubonilla/dmv-permit-test" target="_blank" rel="noopener noreferrer"><p>View code</p></ALink></li>
          </ul>
        </div>
      </ProjectContent>
    </ProjectWrapper>
  )
}
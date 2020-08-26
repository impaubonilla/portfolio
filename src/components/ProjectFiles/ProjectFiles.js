import React from 'react'
import { ProjectWrapper, ALink, ProjectContent, ProjcetImageStyle } from '../ProjectFiles/index'
import ttt from '../../media/images/projects/the-office-tic-tac-toe.png'
import dmv from '../../media/images/projects/dmv-test.png'
import weather from '../../media/images/projects/simple-weather.png'
import hangman from '../../media/images/projects/hangman.png'
import moviewatchlist from '../../media/images/projects/movie-watchlist.png'

export const TicTacToe = () => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjcetImageStyle src={ttt} alt="tic tac toe" />
        <div className="desc">
          <h2 className="header">Tic Tac Toe</h2>
          <p>A The Office theme tic tac toe game. This game is built with React, HTML5, CSS3, SASS, Styled Components, and Javascript.
           <br />
            <p className="subdesc">&#47;&#47; it is responsive</p>
          </p>
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
        <ProjcetImageStyle src={dmv} alt="dmv permit practice test" />
        <div className="desc">
          <h2 className="header">DMV Permit Practice Test</h2>
          <p>This test is built with React, HTML5, CSS3, Styled Components, and Javascript.
          <br />
            <p className="subdesc">&#47;&#47; this is a work in progess project</p>
          </p>
          <ul className="buttons">
            <li><ALink primary href="https://paubonilla.github.io/dmv-permit-practice-test/" target="_blank" rel="noopener noreferrer">Take Test</ALink></li>
            <li><ALink href="https://github.com/paubonilla/dmv-permit-practice-test" target="_blank" rel="noopener noreferrer"><p>View code</p></ALink></li>
          </ul>
        </div>
      </ProjectContent>
    </ProjectWrapper>
  )
}

export const SimpleWeather = () => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjcetImageStyle src={weather} alt="a simple weather app" />
        <div className="desc">
          <h2 className="header">Simple Weather App</h2>
          <p>This weather app is create with an Weather API and built with React, HTML5, CSS3, Styled Components, and Javascript.
          <br />
            <p className="subdesc">&#47;&#47; just need to redesign the ui</p>
          </p>
          <ul className="buttons">
            <li><ALink primary href="https://paubonilla.github.io/simple-weather-app/" target="_blank" rel="noopener noreferrer">Check weather</ALink></li>
            <li><ALink href="https://github.com/paubonilla/simple-weather-app" target="_blank" rel="noopener noreferrer"><p>View code</p></ALink></li>
          </ul>
        </div>
      </ProjectContent>
    </ProjectWrapper>
  )
}

export const Hangman = () => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjcetImageStyle src={hangman} alt="hangman game" />
        <div className="desc">
          <h2 className="header">Hangman</h2>
          <p>This hangman game is built with React with a simple structure of HTML, Styled Components, and Javascript.
          <br />
            <p className="subdesc">&#47;&#47; temporary works on desktop only</p>
          </p>
          <ul className="buttons">
            <li><ALink primary href="https://paubonilla.github.io/hangman-react/" target="_blank" rel="noopener noreferrer">Play Game</ALink></li>
            <li><ALink href="https://github.com/paubonilla/hangman-react" target="_blank" rel="noopener noreferrer"><p>View code</p></ALink></li>
          </ul>
        </div>
      </ProjectContent>
    </ProjectWrapper>
  )
}

export const MovieWatchlist = () => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjcetImageStyle src={moviewatchlist} alt="movie wathclist" />
        <div className="desc">
          <h2 className="header">Movie Watchlist</h2>
          <p>This movie watchlist library is built with React Hooks with Styled Components, and Javascript.
          <br />
            <p className="subdesc">&#47;&#47; the mobile view is ugly</p>
          </p>
          <ul className="buttons">
            <li><ALink primary href="https://paubonilla.github.io/movie-watchlist/" target="_blank" rel="noopener noreferrer">Search Movies</ALink></li>
            <li><ALink href="https://github.com/paubonilla/movie-watchlist" target="_blank" rel="noopener noreferrer"><p>View code</p></ALink></li>
          </ul>
        </div>
      </ProjectContent>
    </ProjectWrapper>
  )
}
import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  color: #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubHeader = styled.div`
  margin: 1rem 0;
  width: 100%;
  padding: 0 1rem 1rem;
  color: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const ProgressBar = styled.div`
  margin: 50px auto 0;
  padding: 20px;

  .header {
    font-size: 30px;
    @media (max-width: 480px) {
      font-size: 25px;
    }
    @media (max-width: 320px) {
      font-size: 20px;
    }
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
  }
  ul {
  list-style: none;
  li {
    position: relative;
    margin: 50px 0;
    font-weight: 500;
    text-transform: lowercase;
     p {
      color: rgb(0, 118, 0);
       font-family: "Source Code Pro", monospace;
     }

    &:before {
      content: "";
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #242425;
      border-radius: 1000px;
    }
    &:after {
      content: "";
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 0;
      height: 10px;
      background-color: #faed27;
      border-radius: 1000px;
      animation-duration: 0.7s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
  }
  li.html:after {
    animation-name: html;
    @keyframes html {
      to {
        width: 85%;
      }
    }
  }
  li.js:after {
    animation-name: js;
    @keyframes js {
      to {
        width: 80%;
      }
    }
  }
  li.css:after {
    animation-name: css;
    @keyframes css {
      to {
        width: 90%;
      }
    }
  }
  li.scss:after {
    animation-name: scss;
    @keyframes scss {
      to {
        width: 90%;
      }
    }
  }
  li.react:after {
    animation-name: react;
    @keyframes react {
      to {
        width: 80%;
      }
    }
  }
  li.photoshop:after {
    animation-name: photoshop;
    @keyframes photoshop {
      to {
        width: 75%;
      }
    }
  }
  li.illustrator:after {
    animation-name: illustrator;
    @keyframes illustrator {
      to {
        width: 75%;
      }
    }
  }
  li.premiere-pro:after {
    animation-name: premiere-pro;
    @keyframes premiere-pro {
      to {
        width: 87%;
      }
    }
  }
}
`

/*                    Video Styles                    */

export const Video = styled.video`
  width: 100%;
  pointer-events: none;
`

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  position: relative;
`

export const VideoHeader = styled.ul`
  list-style: none;
  color: #e8e8e8;
  display: flex;
  position: absolute;
  padding: 25px;
  li {
      font-size: 32px;
      @media (max-width: 320px) {
        font-size: 28px;
      }
      font-weight: 600;
      font-family: 'Libre Barcode 39 Extended Text', cursive;                   
      letter-spacing: 3px;
      text-transform: uppercase;
  }
`
import styled, { css } from 'styled-components'

/*                    App.js Styles                    */

export const NameLogo = styled.div`
  padding: 2rem;
  a { 
    color: #e8e8e8;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
    @media ${({ theme }) => theme.mediaQueries.bellow768} {
    display: none;
    }
  }
`

export const Section = styled.div`
  color: #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Nav = styled.div`
  position: fixed;
  /* width: 400px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    width: 60px;
  }
`

export const Icons = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  .nav-link {
    text-decoration: none;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    padding: 1rem;
  }
`

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #333436;
  transition: opacity 1 ease-in;
`

export const PageInner = styled.div`
  display: flex;
  max-width: 850px;
  width: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 254px;
  @media (max-width: 768px) {
    margin-left: 60px;
  }
  overflow: auto;
  animation: transitionIn 3s;

  @keyframes transitionIn {
    from {
      opacity: 0;
      background: #333436;
      z-index: 10000;
      /* transform: translateY('-10deg'); */
    }
    to {
      opacity: 1;
      z-index: -1;
      /* transform: translateY(0); */
    }
  }
`

/*                    Icons.js Styles                    */

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  a {
    color: #e8e8e8;
  }
`

export const IconNameStyle = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 8px;

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    display: none;
  }
`

export const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 80px;
`

export const ProjectsCardContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    color: #e8e8e8;
    .card {
        margin-top: 5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        .face {
          width: 100%;
          height: 300px;
          transition: 0.5s;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #38618c;
        }
    }
`

export const BlogCardContainer = styled(ProjectsCardContainer)`
  .card {
    .face {background: #f9ebe0;}
  }
`

export const GalleryCardContainer = styled(ProjectsCardContainer)`
  .card {
    .face {
      background: #c4e0f9;}
  }
`

/*                    Home.js Styles                    */

export const Introduction = styled.div`
  color: #e8e8e8;
  margin: 0 2rem;

  div {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
  }

  a {
    padding: 10px;
    border: 1px solid #e8e8e8;
    color: #e8e8e8;
  }
`

export const Greetings = styled.div`
  min-height: 500px;
  /* @media (max-width: 768px) {
    min-height: 400px;
  }
  @media (max-width: 480px) {
    min-height: 400px;
  }
  @media (max-width: 380px) {
    min-height: 400px;
  } */
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
      height: 122px;
      min-width: 100%;
      margin: 0;
      font-family: 'Bungee Shade', cursive;
      line-height: 1;
      font-size: 120px;
      @media (max-width: 768px) {
        height: 132px;
        font-size: 130px;
      }
      @media (max-width: 480px) {
        height: 90px;
        font-size: 70px;
      }
      @media (max-width: 380px) {
        height: 80px;
        font-size: 60px;
      }
      @media (max-width: 320px) {
        height: 70px;
        font-size: 48px;
      }
      font-weight: 100;
      transition: 0.3s ease;
      cursor: none;

      &:hover {
          color: #faed27;
          font-size: 122px;
          transition: 0.1s ease;
          @media (max-width: 768px) {
            font-size: 132px;
          }
          @media (max-width: 480px) {
            font-size: 72px;
          }
          @media (max-width: 380px) {
            font-size: 62px;
          }
          @media (max-width: 320px) {
            font-size: 50px;
          }
      }
  }
`

/*                    Portfolio.js Styles                    */

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
        width: 70%;
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

/*                    ProjectFiles.js Styles                    */

export const ProjectWrapper = styled.div`
  background: #e8e8e8;
  color: #333436;
  /* margin: 5rem 0; */
  margin-bottom: 5rem;

  .desc {
    margin: 1rem 0;
    padding: 1rem;
    .subdesc {
      color: rgb(0, 118, 0);
      font-family: "Source Code Pro", monospace;
    }
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

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ALink = styled.a`
  display: flex;
  justify-content: center;
  font-size: 12px;
  ${({ primary }) => primary ?
    css`
      color: #e8e8e8;
      background-color: #333436;
      border: 1px solid #333436;
      margin-right: 10px;
      border-radius: 5px;
      padding: 8px;
      text-transform: uppercase;

      &:hover {
        color: #333436;
        background-color: #e8e8e8;
      }
    ` :
    css`
      color: #333436;
    `
  }
  p {
    border-bottom: 1px solid #333436;
  }
`

export const ProjcetImageStyle = styled.img`
  width: 100%;
`


/*                    Footer.js Styles                    */

export const FooterStyle = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  color: #e8e8e8;
  height: 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const FooterContainer = styled.div`
  padding: 1rem;
`

export const FooterContacts = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  li {
    margin-right: 10px;
  }
`

/*                    Video Styles                    */

export const Video = styled.video`
  width: 100%;
`

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: center; */
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
      font-weight: 600;
      font-family: 'Libre Barcode 39 Extended Text', cursive;                   
      letter-spacing: 3px;
      text-transform: uppercase;
  }
`


/*                    Social Media Styles                    */

export const Instagram = styled.a.attrs(props => ({
  href: "https://www.instagram.com/impaubonilla/", target: "_blank", rel: "noopener noreferrer"
}))`
  /* text-decoration: none;  */
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #e1306c;
  }
`

export const Twitter = styled.a.attrs(props => ({
  href: "https://www.twitter.com/pxixcv", target: "_blank", rel: "noopener noreferrer"
}))`
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #00acee;
  }
`

export const Facebook = styled.a.attrs(props => ({
  href: "https://www.facebook.com/pxixcv", target: "_blank", rel: "noopener noreferrer"
}))`
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #3b5998;
  }
`

export const YouTube = styled.a.attrs(props => ({
  href: "https://www.youtube.com/channel/UCOzqf6znGEBswEYLu0exL-A", target: "_blank", rel: "noopener noreferrer"
}))`
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #c4302b;
  }
`

/*                    Contacts Styles                    */

export const ContactsStyle = styled.li`
  a {
    color: #e8e8e8;
    margin-right: 1rem;
    text-decoration: none;
    border-bottom: 1px solid #e8e8e8;
    transition: 0.9s ease-out;
    &:hover {
        color: #faed27;
        border-bottom: 1px solid #faed27;
        transition: 0.3s ease;
    }
  }
`
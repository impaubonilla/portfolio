import React from 'react'
import { Section, SubHeader } from '../styled'
import { ProjectsCard, BlogCard, GalerryCard } from './Cards'
import styled from 'styled-components'
import baybayin from '../videos/baybayintagalog.mp4'

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
        width: 90%;
      }
    }
  }
  li.js:after {
    animation-name: js;
    @keyframes js {
      to {
        width: 55%;
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
        width: 85%;
      }
    }
  }
}
`

export default function Portfolio() {
    return (
        <Section>

            <VideoWrapper>
                <Video playsInline autoPlay loop muted>
                    <source src={baybayin} />
                </Video>
                <VideoHeader>
                    <li>my workspace</li>
                </VideoHeader>
            </VideoWrapper>

            <SubHeader>This is my workspace or my personal station where I brainstorm and create my ideas. This is also my productive area whenever I code or draw or edit photos and videos. Sometimes this is where I just relax and play games.</SubHeader>
            <ProjectsCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <BlogCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <GalerryCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <ProgressBar>
                <div className="header">Technology</div>
                <ul>
                    <li className="html">Html5 | Css3 | Sass</li>
                    <li className="js">Javascript</li>
                    {/* <li className="css">Css3</li>
                    <li className="scss">Scss</li> */}
                    <li className="react">React</li>
                </ul>
            </ProgressBar>
        </Section>
    )
}
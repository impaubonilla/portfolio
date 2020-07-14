import React from 'react'
import { Section, SubHeader, Video, VideoWrapper, VideoHeader, ProgressBar } from '../styled'
import { ProjectsCard, BlogCard, GalerryCard } from './Cards'
import baybayin from '../videos/baybayintagalog.mp4'

export default function Portfolio() {
    return (
        <Section>

            <VideoWrapper>
                <Video playsInline autoPlay loop muted preload="none">
                    <source src={baybayin} />
                </Video>
                <VideoHeader>
                    <li>my workspace</li>
                </VideoHeader>
            </VideoWrapper>

            <SubHeader>This is my workspace and my personal station where I brainstorm and create my ideas. It’s also my productive area whenever I code or draw/edit photos and videos, in addition I can relax and play games.</SubHeader>
            <ProjectsCard />
            <BlogCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <GalerryCard />
            <ProgressBar>
                <SubHeader></SubHeader>
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
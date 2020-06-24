import React from 'react'
import { Section, SubHeader } from '../styled'
import { DesignCard, BlogCard, GalerryCard } from './Cards'
import styled from 'styled-components'
import baybayin from '../videos/baybayintagalog.mp4'

export const Video = styled.video`
  width: 100%;
`

export default function Portfolio() {
    return (
        <Section>

            <Video playsInline autoPlay loop>
                <source src={baybayin} />
            </Video>

            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <DesignCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <BlogCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <GalerryCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
        </Section>
    )
}
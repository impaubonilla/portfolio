import React from 'react'
import { Bio, Tools, Contacts } from './Info'
import styled from 'styled-components'

export const Section = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  color: #e8e8e8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export default function About() {
    return (
        <Section>
            <Bio />
            <Tools />
            <Contacts />
        </Section>
    )
}

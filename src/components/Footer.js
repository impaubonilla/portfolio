import React from 'react'
import { FooterStyle, FooterContainer, FooterContacts } from '../styled'
import styled from 'styled-components'
import { LinkedInIcon, GitHubIcon, EmailIcon, InstagramIcon, TwitterIcon } from './Icons'

export const Copyright = styled.p`
  width: 130px;
  font-weight: 600;
  letter-spacing: 3px;
`

export default function Footer() {
    return (
        <FooterStyle>
            <FooterContainer>
                <Copyright>&copy; 2020, PFB.</Copyright>
            </FooterContainer>
            <FooterContainer>
                <FooterContacts>
                    <LinkedInIcon />
                    <GitHubIcon />
                    <EmailIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </FooterContacts>
                <div>
                    <p>"Seek his will in all you do,
                 and he will show you which path to take."</p>
                    <p>Proverbs 3:6 NLT</p>
                </div>
            </FooterContainer>
        </FooterStyle>
    )
}
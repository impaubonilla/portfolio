import React from 'react'
import { FooterStyle, FooterContainer, FooterContacts } from '../styled'
import styled from 'styled-components'
import { LinkedInIcon, GitHubIcon, EmailIcon, InstagramIcon, TwitterIcon } from '../icons/Icons'

export const Copyright = styled.p`
  width: 130px;
  font-weight: 600;
  letter-spacing: 3px;
`

export const Baybayin = styled.div`
  color: #e8e8e8;
  margin: 0 1rem 1rem;
  letter-spacing: 3px;
`

export default function Footer() {
    return (
        <>
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
                </FooterContainer>
            </FooterStyle>
            <Baybayin>&#5897;&#5890;&#5902;&#5907; &#5898;&#5907;&#5896;&#5906;&#5902;&#5902;&#5888;</Baybayin>
        </>
    )
}
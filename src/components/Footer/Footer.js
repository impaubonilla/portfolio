import React from 'react'
import { FooterStyle, FooterContainer, FooterContacts, Copyright, Baybayin } from '../Footer/index'
import { LinkedInIcon, GitHubIcon, EmailIcon, InstagramIcon, TwitterIcon } from '../../Icons/Icons'


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
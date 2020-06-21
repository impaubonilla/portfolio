import React from 'react'
import { FooterStyle, FooterContainer, FooterContacts } from '../styled'
import styled from 'styled-components'

export const Copyright = styled.p`
  width: 100px;
`

export default function Footer() {
    return (
        <FooterStyle>
            <FooterContainer>
                <Copyright>&copy; 2020, PFB</Copyright>
            </FooterContainer>
            <FooterContainer>
                <FooterContacts>
                    <li>LinkIn</li>
                    <li>GitHub</li>
                    <li>Email</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
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
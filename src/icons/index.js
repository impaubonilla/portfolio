import React from './node_modules/react'
import { IconWrapper, IconStyle, IconNameStyle } from '../styled'
import { Icon } from './node_modules/semantic-ui-react'
import { NavLink } from './node_modules/react-router-dom'
import styled from './node_modules/styled-components'

const Margin2rem = styled.div`
  margin: 2rem;
`

export const HomeIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/">
            <IconWrapper>
                <IconStyle>
                    <Icon name="home" />
                </IconStyle>
                <IconNameStyle>Home</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const PortfolioIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/portfolio">
            <IconWrapper>
                <IconStyle>
                    <Icon name="folder open outline" />
                </IconStyle>
                <IconNameStyle>Portfolio</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const ProjectsIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/projects">
            <IconWrapper>
                <IconStyle>
                    <Icon name="file outline" />
                </IconStyle>
                <IconNameStyle>Projects</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const TechnologyIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/tech">
            <IconWrapper>
                <IconStyle>
                    <Icon name="file code outline" />
                </IconStyle>
                <IconNameStyle>Tech</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const BlogIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/blog">
            <IconWrapper>
                <IconStyle>
                    <Icon name="file alternate outline" />
                </IconStyle>
                <IconNameStyle>Blog</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const Height = () => {
    return (
        <Margin2rem />
    )
}

export const AboutIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <IconStyle>
                    <Icon name="user secret" />
                </IconStyle>
                <IconNameStyle>About</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const LinkedInIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.linkedin.com/in/paulo-bonilla-2375851aa/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin square' /></a>
            </IconWrapper>
        </>
    )
}

export const GitHubIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://github.com/paubonilla" target="_blank" rel="noopener noreferrer"><Icon name='github' /></a>
            </IconWrapper>
        </>
    )
}

export const EmailIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer"><Icon name='mail outline' /></a>
            </IconWrapper>
        </>
    )
}

export const InstagramIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.instagram.com/impaubonilla/" target="_blank" rel="noopener noreferrer"><Icon name='instagram' /></a>
            </IconWrapper>
        </>
    )
}

export const TwitterIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.twitter.com/pxixcv" target="_blank" rel="noopener noreferrer"><Icon name='twitter' /></a>
            </IconWrapper>
        </>
    )
}

export const FacebookIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.facebook.com/pxixcv" target="_blank" rel="noopener noreferrer"><Icon name='facebook' /></a>
            </IconWrapper>
        </>
    )
}

export const YouTubeIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.youtube.com/channel/UCOzqf6znGEBswEYLu0exL-A" target="_blank" rel="noopener noreferrer"><Icon name='youtube' /></a>
            </IconWrapper>
        </>
    )
}
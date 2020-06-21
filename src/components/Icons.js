import React from 'react'
import { IconWrapper, IconNameStyle } from '../styled'
import { Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Height20px = styled.div`
  height: 20px;
`

export const HomeIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/">
            <IconWrapper>
                <IconNameStyle>Home</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const PortfolioIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/portfolio">
            <IconWrapper>
                <IconNameStyle>Portfolio</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const DesignIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/designs">
            <IconWrapper>
                <IconNameStyle>Designs</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const BlogIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/blog">
            <IconWrapper>
                <IconNameStyle>Blog</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const Height = () => {
    return (
        <Height20px />
    )
}

export const AboutIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <IconNameStyle>About</IconNameStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const LinkedInIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <Icon name='linkedin square' />
            </IconWrapper>
        </NavLink>
    )
}

export const GitHubIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <Icon name='github' />
            </IconWrapper>
        </NavLink>
    )
}

export const EmailIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <Icon name='mail outline' />
            </IconWrapper>
        </NavLink>
    )
}

export const InstagramIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <Icon name='instagram' />
            </IconWrapper>
        </NavLink>
    )
}

export const TwitterIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <Icon name='twitter' />
            </IconWrapper>
        </NavLink>
    )
}

export const FacebookIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <Icon name='facebook' />
            </IconWrapper>
        </NavLink>
    )
}

export const YouTubeIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <IconWrapper>
                <Icon name='youtube' />
            </IconWrapper>
        </NavLink>
    )
}
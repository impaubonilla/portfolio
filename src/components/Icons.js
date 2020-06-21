import React from 'react'
import { IconWrapper, IconStyle } from '../styled'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Height20px = styled.div`
  height: 20px;
`

export const HomeIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/">
            <IconWrapper>
                <IconStyle>Home</IconStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const PortfolioIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/portfolio">
            <IconWrapper>
                <IconStyle>Portfolio</IconStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const DesignIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/designs">
            <IconWrapper>
                <IconStyle>Designs</IconStyle>
            </IconWrapper>
        </NavLink>
    )
}

export const BlogIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/blog">
            <IconWrapper>
                <IconStyle>Blog</IconStyle>
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
                <IconStyle>About</IconStyle>
            </IconWrapper>
        </NavLink>
    )
}
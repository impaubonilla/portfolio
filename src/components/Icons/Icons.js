import React from 'react'
import { IconWrapper, IconStyle, IconNameStyle } from '../Icons/index'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { BsFolder, BsFileCode, BsFileText } from 'react-icons/bs'
import { RiHome2Line, RiComputerLine } from 'react-icons/ri'
import { IoMdFingerPrint } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Margin2rem = styled.div`
  margin: 2rem;
`

export const HomeIcon = () => {
    return (
        <NavLink exact className="nav-link" activeClassName="active" to="/">
            <IconWrapper>
                <IconStyle>
                    <RiHome2Line />
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
                    <BsFolder />
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
                    <BsFileCode />
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
                    <RiComputerLine />
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
                    <BsFileText />
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
                    <IoMdFingerPrint />
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
                <a href="https://www.linkedin.com/in/paulo-bonilla-2375851aa/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            </IconWrapper>
        </>
    )
}

export const GitHubIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://github.com/paubonilla" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </IconWrapper>
        </>
    )
}

export const EmailIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a>
            </IconWrapper>
        </>
    )
}

export const InstagramIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.instagram.com/impaubonilla/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
            </IconWrapper>
        </>
    )
}

export const TwitterIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.twitter.com/pxixcv" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a>
            </IconWrapper>
        </>
    )
}

export const FacebookIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.facebook.com/pxixcv" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
            </IconWrapper>
        </>
    )
}

export const YouTubeIcon = () => {
    return (
        <>
            <IconWrapper>
                <a href="https://www.youtube.com/channel/UCOzqf6znGEBswEYLu0exL-A" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
            </IconWrapper>
        </>
    )
}
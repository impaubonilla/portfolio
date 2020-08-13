import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, PortfolioIcon, ProjectsIcon, BlogIcon, Height, AboutIcon } from '../Icons/Icons'
import { NameLogo, NavContainer } from '../Nav/index'
import { Icons } from '../../styled'

export default function Nav() {
  return (
    <NavContainer>
      <Icons>
        <NameLogo>
          <Link to="/">
            Paulo Bonilla
          </Link>
        </NameLogo>
        <HomeIcon />
        <PortfolioIcon />
        <ProjectsIcon />
        {/* <TechnologyIcon /> */}
        <BlogIcon />
        <Height />
        <AboutIcon />
      </Icons>
    </NavContainer>
  )
}

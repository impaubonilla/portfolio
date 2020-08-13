import styled from 'styled-components'

export const NameLogo = styled.div`
  padding: 2rem;
  a { 
    color: #e8e8e8;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
    @media ${({ theme }) => theme.mediaQueries.bellow768} {
    display: none;
    }
  }
`

export const NavContainer = styled.div`
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    width: 60px;
  }
`
import styled from 'styled-components'

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  a {
    color: #e8e8e8;
  }
`

export const IconNameStyle = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 8px;

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    display: none;
  }
`

export const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 80px;
`
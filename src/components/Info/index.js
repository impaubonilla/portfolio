import styled from 'styled-components'

export const InfoContainer = styled.div`
  margin: 15px 15px 0 15px;
  h4 {
      font-weight: 400;
  }
`

export const Subheader = styled.h2`
  display: inline;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #333436;
  background: #B3AD52;
`

export const Text = styled.p`
  padding: 1rem;
  a {
    text-decoration: none;
  }
`

export const ToolsContainer = styled.ul`
  list-style: none;
  display: flex;
  @media (max-width: 320px) {
    /* flex-direction: column; */
    align-items: center;
    flex-wrap: wrap;
    display: inline-flex;
  }
  margin: 1rem;
`

export const Lang = styled.li`
  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
  align-items: center;
  border-radius: 3px;
  font-size: 12px;
  padding: 8px;
  margin-right: 1rem;
  background-color: #222222;
`

export const ContactsContainer = styled.ul`
  list-style: none;
  display: flex;
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
  @media (max-width: 320px) {
    flex-wrap: wrap;
  }
  margin-top: 1rem;
  margin-bottom: 1rem;
`
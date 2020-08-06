import styled from 'styled-components'

export const FooterStyle = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  color: #e8e8e8;
  height: 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const FooterContainer = styled.div`
  padding: 1rem;
  @media (max-width: 320px) {
    padding: 0;
  }
`

export const FooterContacts = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  li {
    margin-right: 10px;
  }
`

export const Copyright = styled.p`
  width: 130px;
  font-weight: 600;
  letter-spacing: 3px;
`

export const Baybayin = styled.div`
  color: #e8e8e8;
  margin: 0 1rem 1rem;
  letter-spacing: 3px;
`
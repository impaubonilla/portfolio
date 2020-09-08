import styled from 'styled-components'

export const FooterStyle = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  align-items: center;
  color: #e8e8e8;
  height: 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const FooterContainer = styled.div`
  padding: 10px;
`

export const FooterContacts = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px;
  @media (max-width: 480px) {
    padding: 0;
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
  @media (max-width: 480px) {
    text-align: center;
  }
`
import styled from 'styled-components'

export const AboutContainer = styled.div`
  margin-bottom: 15px;
  color: #e8e8e8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const DPContainer = styled.div`
  position: relative;
  height: 100%;
  max-height: 625px;
  @media (max-width: 768px) {
    max-height: 725px;
  }
  @media (max-width: 480px) {
    max-height: 425px;
  }
  @media (max-width: 320px) {
    max-height: 300px;
  }
  overflow: hidden;
  transition: 0.4s ease;
`

export const DisplayPicture = styled.img`
  width: 100%;
  pointer-events: none;
`
import styled, { css } from 'styled-components'

export const ProjectWrapper = styled.div`
  background: #ececec;
  color: #333436;
  margin-bottom: 5rem;

  .desc {
    border-top: 2px dashed #242424;
    margin-bottom: 0.5rem;
    padding: 2rem 3rem;
    > p {
      font-size: 14px;
      @media (max-width: 480px) {
        font-size: 12px;
      }
      font-weight: 400;
    }
    .header {
      color: #242424;
      @media (max-width: 480px) {
        text-align: center;
      }
    }
    .subheader {
      color: rgb(0, 118, 0);
      font-size: 12px;
      font-family: "Source Code Pro", monospace;
    }
  }
  .buttons {
    list-style: none;
    display: flex;
    align-items: center;
    @media (max-width: 480px) {
      justify-content: center;
      flex-direction: column;
    }
    .li {
      display: flex;
      align-items: center;
      margin: 2px 0;
    }
  }
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ALink = styled.a`
  display: flex;
  justify-content: center;
  font-size: 12px;
  ${({ primary }) => primary ?
    css`
      color: #e8e8e8;
      background-color: #333436;
      border: 1px solid #333436;
      margin-right: 10px;
      @media (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
      border-radius: 5px;
      padding: 8px 21px;
      text-transform: uppercase;
      &:hover {
        color: #333436;
        background-color: #e8e8e8;
      }
    ` :
    css`
      color: #333436;
    `
  }
  p {
    border-bottom: 1px solid #333436;
  }
`

export const ProjcetImageStyle = styled.img`
  width: 100%;
  pointer-events: none;
`
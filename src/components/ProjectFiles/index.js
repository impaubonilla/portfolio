import styled, { css } from 'styled-components'

export const ProjectWrapper = styled.div`
  background: #e8e8e8;
  color: #333436;
  margin-bottom: 5rem;

  .desc {
    margin: 1rem 0;
    padding: 1rem;
    .header {
      color: #696969;
    }
    .subdesc {
      color: rgb(0, 118, 0);
      font-family: "Source Code Pro", monospace;
    }
  }
  .buttons {
    list-style: none;
    display: flex;
    align-items: center;
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
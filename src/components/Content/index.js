import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 254px;
  @media (max-width: 768px) {
    margin-left: 60px;
  }
  overflow: auto;
  animation: transitionIn 3s;

  @keyframes transitionIn {
    from {
      opacity: 0;
      background: #333436;
      z-index: 10000;
    }
    to {
      opacity: 1;
      z-index: -1;
    }
  }
`
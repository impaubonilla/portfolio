import styled from 'styled-components'

export const Introduction = styled.div`
  color: #e8e8e8;
  margin: 0 2rem;

  div {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
  }

  a {
    padding: 10px;
    border: 1px solid #e8e8e8;
    color: #e8e8e8;
  }
`

export const Greetings = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #dcdcdc;
    height: 122px;
    min-width: 100%;
    margin: 0;
    font-family: 'Bungee Shade', cursive;
    line-height: 1;
    font-size: 114px;
    @media (max-width: 768px) {
      height: 132px;
      font-size: 130px;
    }
    @media (max-width: 480px) {
      height: 90px;
      font-size: 60px;
    }
    @media (max-width: 380px) {
      height: 80px;
      font-size: 55px;
    }
    @media (max-width: 320px) {
      height: 70px;
      font-size: 43px;
    }
    font-weight: 100;
    transition: 0.3s ease;
    cursor: none;
    &:hover {
      color: #faed27;
      font-size: 118px;
      transition: 0.1s ease;
      @media (max-width: 768px) {
        font-size: 132px;
      }
      @media (max-width: 480px) {
        font-size: 65px;
      }
      @media (max-width: 380px) {
        font-size: 58px;
      }
      @media (max-width: 320px) {
        font-size: 45px;
      }
    }
  }
`
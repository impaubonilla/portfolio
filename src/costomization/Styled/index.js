import styled from 'styled-components'

/*                    App.js Styles                    */

export const Section = styled.div`
  color: #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Icons = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  .nav-link {
    text-decoration: none;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    padding: 1rem;
  }
`

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #333436;
  transition: opacity 1 ease-in;
`

export const PageInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 850px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`

/*                    Social Media Styles                    */

export const Instagram = styled.a.attrs(props => ({
  href: "https://www.instagram.com/impaubonilla/", target: "_blank", rel: "noopener noreferrer"
}))`
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #e1306c;
  }
`

export const Twitter = styled.a.attrs(props => ({
  href: "https://www.twitter.com/pxixcv", target: "_blank", rel: "noopener noreferrer"
}))`
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #00acee;
  }
`

export const Facebook = styled.a.attrs(props => ({
  href: "https://www.facebook.com/pxixcv", target: "_blank", rel: "noopener noreferrer"
}))`
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #3b5998;
  }
`

export const YouTube = styled.a.attrs(props => ({
  href: "https://www.youtube.com/channel/UCOzqf6znGEBswEYLu0exL-A", target: "_blank", rel: "noopener noreferrer"
}))`
  color: #e8e8e8;
  &:hover {
    transition: 0.1s;
    color: #c4302b;
  }
`

/*                    Contacts Styles                    */

export const ContactsStyle = styled.li`
  a {
    color: #e8e8e8;
    margin-right: 1rem;
    text-decoration: none;
    border-bottom: 1px solid #e8e8e8;
    transition: 0.9s ease-out;
    &:hover {
        color: #faed27;
        border-bottom: 1px solid #faed27;
        transition: 0.3s ease;
    }
  }
`
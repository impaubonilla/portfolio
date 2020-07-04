import styled from 'styled-components'

/*                    App.js Styles                    */

export const NameLogo = styled.div`
  padding-bottom: 2rem;
  a { 
    color: #e8e8e8;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
    @media ${({ theme }) => theme.mediaQueries.bellow768} {
    display: none;
    }
  }
`

export const Section = styled.div`
  color: #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Nav = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    width: 50px;
  }
`

export const Icons = styled.div`
  padding: 2rem;
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
`

export const PageInner = styled.div`
  display: flex;
  max-width: 850px;
  width: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

/*                    Icons.js Styles                    */

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  a {
    color: #e8e8e8;
  }
`

export const IconNameStyle = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 8px;

  @media ${({ theme }) => theme.mediaQueries.bellow425} {
    display: none;
  }
`

export const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProjectsCardContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    color: #e8e8e8;
    .card {
        margin-top: 5rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        .face {
          width: 100%;
          height: 300px;
          transition: 0.5s;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #38618c;
        }
    }
`

export const BlogCardContainer = styled(ProjectsCardContainer)`
  .card {
    .face {background: #f9ebe0;}
  }
`

export const GalleryCardContainer = styled(ProjectsCardContainer)`
  .card {
    margin-bottom: 10rem;
    .face {
      background: #c4e0f9;}
  }
`

/*                    Portfolio.js Styles                    */

export const SubHeader = styled.div`
  margin: 1rem 0;
  padding: 0 1rem 1rem;
  color: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`


/*                    Footer.js Styles                    */

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
`

export const FooterContainer = styled.div`
  padding: 1rem;
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

/*                    Social Media Styles                    */

export const Instagram = styled.a.attrs(props => ({
  href: "https://www.instagram.com/impaubonilla/", target: "_blank", rel: "noopener noreferrer"
}))`
  /* text-decoration: none;  */
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
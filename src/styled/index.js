import styled from 'styled-components'

/*                    App.js Styles                    */

export const Section = styled.div`
  scroll-behavior: smooth;
`

export const Nav = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`

export const Icons = styled.div`
  height: 30vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  .nav-link {
    text-decoration: none;
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
  max-width: 800px;
  width: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`

/*                    Icons.js Styles                    */

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`

export const IconStyle = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 8px;
`

export const DesignCardContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
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

export const BlogCardContainer = styled(DesignCardContainer)`
  .card {
    .face {background: #f9ebe0;}
  }
`

export const GalleryCardContainer = styled(DesignCardContainer)`
  .card {
    .face {background: #c4e0f9;}
  }
`


/*                    Footer.js Styles                    */

export const FooterStyle = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
  color: #e8e8e8;
  height: 100px;
`

export const FooterContainer = styled.div`
  padding: 1rem;
`

export const FooterContacts = styled.ul`
  list-style: none;
  display: flex;
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
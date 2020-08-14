import styled from 'styled-components'

export const ProjectsCardContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  color: #e8e8e8;
  > img {
    pointer-events: none;
  }
  .card {
    margin-top: 5rem;
    width: 100%;
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
      background: #eeeeee;
    }
  }
`

export const BlogCardContainer = styled(ProjectsCardContainer)`
  .card {
    /* .face {background: #f9ebe0;} */
    .face {background: #9e9e9e;}
  }
`

export const GalleryCardContainer = styled(ProjectsCardContainer)`
  .card {
    .face {
      /* background: #c4e0f9;} */
      background: #424242;}
  }
`
import React from 'react'
import styled from 'styled-components'
import alchemist from '../images/gallery/alchemist.jpg'
import lasubway from '../images/gallery/lasubway.jpg'
import bestfriends from '../images/gallery/bestfriends.jpg'
import ps4ctrl1 from '../images/gallery/ps4controller1.JPG'
import bobatime from '../images/gallery/bobatime.jpeg'
import lakershat from '../images/gallery/lakershat.jpeg'
import converse from '../images/gallery/converse.jpeg'
import SF from '../images/gallery/SF.jpeg'

export const GalleryWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  position: relative;
  /* height: 500px; */
  overflow: hidden;
`

export const GalleryImageStyle = styled.img`
  /* position: absolute; */
  width: 100%;
`

export default function Gallery() {
    return (
        <GalleryWrapper>
            <GalleryImageStyle src={alchemist} alt="caffee" />
            <GalleryImageStyle src={lasubway} alt="subway" />
            <GalleryImageStyle src={bestfriends} alt="paper clip" />
            <GalleryImageStyle src={ps4ctrl1} alt="ps4controller" />
            <GalleryImageStyle src={bobatime} alt="bobatime" />
            <GalleryImageStyle src={lakershat} alt="lakershat" />
            <GalleryImageStyle src={converse} alt="converse" />
            <GalleryImageStyle src={SF} alt="SF" />
        </GalleryWrapper>
    )
}

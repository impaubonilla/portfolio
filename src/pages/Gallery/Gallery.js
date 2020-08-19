import React from 'react'
import { GalleryWrapper, GalleryImageStyle } from '../Gallery/index'
import alchemist from '../../media/images/gallery/alchemist.jpg'
import lasubway from '../../media/images/gallery/lasubway.jpg'
import bestfriends from '../../media/images/gallery/bestfriends.jpg'
import ps4ctrl1 from '../../media/images/gallery/ps4controller1.JPG'
import bobatime from '../../media/images/gallery/bobatime.jpeg'
import lakershat from '../../media/images/gallery/lakershat.jpeg'
import converse from '../../media/images/gallery/converse.jpeg'
import SF from '../../media/images/gallery/SF.jpeg'

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

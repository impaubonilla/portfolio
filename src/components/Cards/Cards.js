import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectsCardContainer, BlogCardContainer, GalleryCardContainer } from '../Cards/index'
import data from '../../media/images/cards/data.png'
import text from '../../media/images/cards/text.png'
import picture from '../../media/images/cards/picture.png'

export const ProjectsCard = () => {
    return (
        <ProjectsCardContainer className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content1">
                        <img src={data} alt="..." />
                        <h3 >Projects</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content2">
                        <p>&#47;&#47; this is my projects component</p>
                        <Link className="alink" to="/projects">
                            View
                        </Link>
                    </div>
                </div>
            </div>
        </ProjectsCardContainer>
    )
}

export const BlogCard = () => {
    return (
        <BlogCardContainer className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content1">
                        <img src={text} alt="..." />
                        <h3 >Blog</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content2">
                        <p>&#47;&#47; this is my blog page</p>
                        <Link className="alink" to="/blog">
                            View
                        </Link>
                    </div>
                </div>
            </div>
        </BlogCardContainer>
    )
}

export const GalerryCard = () => {
    return (
        <GalleryCardContainer className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content1">
                        <img src={picture} alt="..." />
                        <h3 >Gallery</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content2">
                        <p>&#47;&#47; this is my gallery container</p>
                        <Link className="alink" to="/gallery">
                            View
                        </Link>
                    </div>
                </div>
            </div>
        </GalleryCardContainer>
    )
}
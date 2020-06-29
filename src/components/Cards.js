import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectsCardContainer, BlogCardContainer, GalleryCardContainer } from '../styled'
import data from '../images/data.png'
import text from '../images/text.png'
import picture from '../images/picture.png'

export const ProjectsCard = () => {
    return (
        <ProjectsCardContainer className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content1">
                        <img src={data} alt="..." />
                        <h3>Projects</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Commodi impedit laboriosam, beatae unde facere architecto
                        veritatis itaque excepturi iure cum iste.</p>
                        <Link className="alink" to="/projects">
                            Read more
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
                        <h3>Blog</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Commodi impedit laboriosam, beatae unde facere architecto
                        veritatis itaque excepturi iure cum iste.</p>
                        <Link className="alink" to="/blog">
                            Read more
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
                        <h3>Gallery</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Commodi impedit laboriosam, beatae unde facere architecto
                        veritatis itaque excepturi iure cum iste.</p>
                        <Link className="alink" to="/gallery">
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </GalleryCardContainer>
    )
}
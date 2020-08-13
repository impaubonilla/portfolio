import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import Home from '../../pages/Home/Home'
import Portfolio from '../../pages/Portfolio/Portfolio'
import Projects from '../../pages/Projects/Projects'
// import Technology from '../../pages/Technology/Technology'
import Gallery from '../../pages/Gallery/Gallery'
import Blog from '../../pages/Blog/Blog'
import About from '../../pages/About/About'
// Component
import Footer from '../Footer/Footer'

import { ContentContainer } from '../Content/index'

export default function Content() {
  return (
    <ContentContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/tech" component={Technology} /> */}
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </ContentContainer>
  )
}

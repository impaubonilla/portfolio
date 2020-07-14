import React from 'react';
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Gallery from './components/Gallery';
import Blog from './components/Blog'
import About from './components/About'
import { HomeIcon, PortfolioIcon, ProjectsIcon, BlogIcon, Height, AboutIcon } from './components/Icons'
import { NameLogo, Nav, Content, PageWrapper, PageInner, Icons } from './styled'
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <PageWrapper>
        <PageInner>
          <Nav>
            <Icons>
              <NameLogo>
                <Link to="/">
                  Paulo Bonilla
                </Link>
              </NameLogo>
              <HomeIcon />
              <PortfolioIcon />
              <ProjectsIcon />
              <BlogIcon />
              <Height />
              <AboutIcon />
            </Icons>
          </Nav>
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/projects" component={Projects} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={About} />
            </Switch>
            <Footer />
          </Content>
        </PageInner>
      </PageWrapper>
    </Router>
  );
}

export default App;
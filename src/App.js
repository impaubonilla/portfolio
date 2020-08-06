import React from 'react'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Projects from './components/Projects/Projects'
import Technology from './components/Technology/Technology'
import Gallery from './components/Gallery/Gallery'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import { HomeIcon, PortfolioIcon, ProjectsIcon, TechnologyIcon, BlogIcon, Height, AboutIcon } from './components/Icons/Icons'
import { NameLogo, Nav, Content, PageWrapper, PageInner, Icons } from './styled'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <Router>
      {/* <Loader /> */}
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
              <TechnologyIcon />
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
              <Route path="/tech" component={Technology} />
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

// export const Loader = () => {
//   return (
//     <div className="loader">
//       <span></span>
//       <span></span>
//       <span></span>
//     </div>
//   )
// }
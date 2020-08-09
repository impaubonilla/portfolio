import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// Pages
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Projects from './pages/Projects/Projects'
// import Technology from './pages/Technology/Technology'
import Gallery from './pages/Gallery/Gallery'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
// Components
import Footer from './components/Footer/Footer'
import { HomeIcon, PortfolioIcon, ProjectsIcon, BlogIcon, Height, AboutIcon } from './components/Icons/Icons'
// Styles 
import { NameLogo, Nav, Content, PageWrapper, PageInner, Icons } from './styled'
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
              {/* <TechnologyIcon /> */}
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
              {/* <Route path="/tech" component={Technology} /> */}
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
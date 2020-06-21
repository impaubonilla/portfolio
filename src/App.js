import React from 'react';
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Designs from './components/Designs'
import Gallery from './components/Gallery';
import Blog from './components/Blog'
import About from './components/About'
import { HomeIcon, PortfolioIcon, BlogIcon, DesignIcon, Height, AboutIcon } from './components/Icons'
import { Nav, Content, PageWrapper, PageInner, Icons } from './styled'
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <PageWrapper>
        <PageInner>
          <Nav>
            <Icons>
              <HomeIcon />
              <PortfolioIcon />
              <DesignIcon />
              <BlogIcon />
              <Height />
              <AboutIcon />
            </Icons>
          </Nav>
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/designs" component={Designs} />
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
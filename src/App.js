import React from 'react';
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import { Nav, Content, PageWrapper, PageInner } from './styled'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <PageWrapper>
        <PageInner>
          <Nav>
            <span>Logo</span>
            <Link to="/">
              Home
            </Link>
            <Link to="/portfolio">
              Portfolio
            </Link>
          </Nav>
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </Content>
        </PageInner>
      </PageWrapper>
    </Router>
  );
}

export default App;
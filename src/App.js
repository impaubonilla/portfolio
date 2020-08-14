import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// Components
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
// Styles 
import { PageWrapper, PageInner } from './styled'
import './App.scss'

function App() {
  return (
    <Router>
      <PageWrapper>
        <PageInner>
          <Nav />
          <Content />
        </PageInner>
      </PageWrapper>
    </Router>
  );
}

export default App;

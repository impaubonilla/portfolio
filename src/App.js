import React from 'react'
// Components
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
// Styles 
import { PageWrapper, PageInner } from './costomization/Styled'
import './App.scss'

function App() {
  return (
    <PageWrapper>
      <PageInner>
        <Nav />
        <Content />
      </PageInner>
    </PageWrapper>
  );
}

export default App;

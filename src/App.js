import React, { useState, useEffect } from 'react'
// Components
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
// Styles 
import { PageWrapper, PageInner } from './costomization/Styled'
import './App.scss'
import { Cube } from 'styled-loaders-react'

import styled from 'styled-components';

export const Inner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 3000)
  }, [])
  return (
    <>
      {loading ?
        <Inner>
          <Cube />
        </Inner>
        :
        <PageWrapper>
          <PageInner>
            <Nav />
            <Content />
          </PageInner>
        </PageWrapper>}
    </>
  );
}

export default App;

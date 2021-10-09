import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { useResponsive } from 'utils/responsive'

import Home from './Home'
import Services from './Services'
import Member from './Member'

import Menu from '../components/Menu'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const BodyWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  // margin-bottom: 64px;
`

export default function App() {
  // init common data
  const { isMobile } = useResponsive();

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <Menu>
            <BodyWrapper>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/member" component={Member} />
                <Route path="*" component={Home} />
              </Switch>
            </BodyWrapper>
          </Menu>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}

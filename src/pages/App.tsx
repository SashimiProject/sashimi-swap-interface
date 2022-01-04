import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Layout, Modal } from 'antd'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header, { HeaderControls } from '../components/Header'
import Footer from '../components/Footer'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'

const { Header: LayoutHeader } = Layout

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  position: relative;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 16px;
  z-index: 1;
  min-height: calc(100vh - 200px);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding: 16px;
  `};
`

const Marginer = styled.div`
  margin-top: 5rem;
`

const StyledHeader = styled(LayoutHeader)`
  width: 100%;
  background: ${props => props.theme.bg1};
  @media (max-width: 576px) {
    padding: 0;
  }
`

export default function App() {
  Modal.info({
    title: 'Alert !!!!!!',
    content:
      'Due to the technical issues, we are currently suspend functions of adding any liquidity and trading!! This is a protection from financial loss !!!! We are sorry about the inconvenience!!'
  })
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Route component={GoogleAnalyticsReporter} />
        <Route component={DarkModeQueryParamReader} />
        <AppWrapper>
          <StyledHeader>
            <Header />
          </StyledHeader>
          <BodyWrapper>
            <HeaderControls />
            <Popups />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/swap" component={Swap} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
            <Marginer />
          </BodyWrapper>
          <Footer />
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}

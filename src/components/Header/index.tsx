import { ChainId } from '@sashimiswap/sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'

import Logo from '../../assets/svg/logo.svg'
import LogoDark from '../../assets/svg/logo_white.svg'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'
import Nav from './Nav'

import { YellowCard } from '../Card'
import Settings from '../Settings'

import Row, { RowBetween } from '../Row'
import Web3Status from '../Web3Status'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const TitleText = styled(Row)`
  color: ${props => props.theme.text6};
  font-family: 'Reem Kufi', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: 8px;
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: row;
    align-items: center;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const StyledRow = styled(RowBetween)`
  padding: 0 16px;
  @media (max-width: 414px) {
    padding:0 12px;
  }
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: '',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.HECO]: 'Heco',
  [ChainId.THECO]: 'Heco test',
  [ChainId.BSC]: 'BSC',
  [ChainId.TBSC]: 'TBSC'
}

const StyledLogo = styled.img`
  height: 32px;
`

export default function Header() {
  const [isDark] = useDarkModeManager()

  return (
    <HeaderFrame>
      <StyledRow>
        <HeaderElement>
          <Title href=".">
            <UniIcon>
              <StyledLogo src={isDark ? LogoDark : Logo} alt="logo" />
            </UniIcon>
            <TitleText>
              SashimiSwap
            </TitleText>
          </Title>
        </HeaderElement>
        <Nav />
      </StyledRow>
    </HeaderFrame>
  )
}

export function HeaderControls() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  return (
    <Controls>
      <HeaderElement>
        <TestnetWrapper>
          {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
        </TestnetWrapper>
        <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
          {account && userEthBalance ? (
            <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
              {userEthBalance?.toSignificant(4)} {process.env.REACT_APP_CHAIN_NATIVE_TOKEN_SYMBOL}
            </BalanceText>
          ) : null}
          <Web3Status />
        </AccountElement>
      </HeaderElement>
      <HeaderElementWrap>
        <Settings />
      </HeaderElementWrap>
    </Controls>
  );
}

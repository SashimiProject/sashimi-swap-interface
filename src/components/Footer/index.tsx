import React from 'react'
import styled from 'styled-components'
import {
  ExternalLink
} from '../../theme'

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  width: 100%;
  height: 120px;
  padding: 24px 50px;
  color: #ffffff;
  font-size: 14px;
  background: ${props => props.theme.bg6};
  @media (min-width: 576px) {
    min-width: 80%;
  }
  @media (max-width: 576px) {
    flex-flow: row wrap;
  }
`

const StyledFooterItem = styled.div`
  width: 16.66%;
  @media (max-width: 576px) {
    width: 33.33%
  }
`

const StyledLink = styled(ExternalLink)`
  color: #ffffff;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://etherscan.io/address/0xC28E27870558cF22ADD83540d2126da2e4b464c2#code`}
        >
          Sashimi Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://etherscan.io/address/0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D#code`}
        >
          MasterChef Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://discord.com/invite/mSEc2uv">
          Discord
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://t.me/joinchat/KABj-Bz6CVzyi23HK2rjzA">
          Telegram
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://twitter.com/SASHIMISASHIMI5">
          Twitter
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://github.com/SashimiProject/sashimiswap">
          Github
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://sashimi.cool/files/SashimiSwap_protocol.pdf">
          Docs
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://sashimi.cool/files/sashimi_audit_report.pdf">
          Audit Report
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://sashimi.cool/api/farms/getList">
          APY API
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://coinmarketcap.com/currencies/sashimi">
          Coin Market Cap
        </StyledLink>
      </StyledFooterItem>
    </StyledFooter>
  )
}

export default Footer;

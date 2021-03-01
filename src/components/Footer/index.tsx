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
    width: 50%
  }
`;

const StyledLink = styled(ExternalLink)`
  color: #ffffff;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://hecoinfo.com/address/0xc2037c1c13dd589e0c14c699dd2498227d2172cc#code`}
        >
          Sashimi Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://hecoinfo.com/address/0x06c7b472261f788634b62214adbb6d26795d85f9#code`}
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
        <StyledLink target="_blank" href="https://docs.sashimi.cool">
          Docs
        </StyledLink>
      </StyledFooterItem>
    </StyledFooter>
  )
}

export default Footer;

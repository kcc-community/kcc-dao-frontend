import React, { FunctionComponent } from 'react'
import styled, { useTheme } from 'styled-components'
import { RowFixed, RowBetween } from '../Row'
import { Text } from '../../style'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useResponsive } from 'utils/responsive'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundNav};
  z-index: 20;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 15px;
  }
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`


const Inner = styled.div`
  flex-grow: 1;
  margin-top: 80px;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`

const ImgLogo = styled.img`
  height: 16.8px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: auto;
    width: 69.8px;
  }
`

const ImgKccLogo = styled.img`
  height: 33px;
  cursor: pointer;
  margin-top: 3px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 26px;
  }
`

const ImgLines = styled.div`
  background: #596171;
  width: 2px;
  height: 19px;
  margin: 0 12px;
`

interface MenuList {
  title: string
  route: string
}

const Menu: React.FunctionComponent = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const theme = useTheme();
  const { isMobile } = useResponsive();

  const menuList: MenuList[] = [
    {
      title: t('Home'),
      route: '/',
    },
    {
      title: t('Member'),
      route: '/member',
    },
  ]
  
  const renderMenu = (data, index) => {
    return(
      <a onClick={() => { window.scrollTo(0, 0); history.push(data?.route)}} key={index}>
        <Text color={theme.colors.invertedContrast} fontSize="18px" fontWeight="500" ml={isMobile ? "24px" : "40px"}>{data?.title}</Text>
      </a>
    )
  }

  return ( 
    <Wrapper>
      <StyledNav>
        <RowBetween style={{maxWidth: '1200px', margin: '0 auto'}}>
          <RowFixed>
            <a href="https://www.kcc.io/#/" target="_blank">
              <ImgKccLogo src={require('../../assets/images/home/kcc.png').default}/>
            </a>
            <ImgLines />
            <ImgLogo src={require('../../assets/images/home/logo.png').default} onClick={() => history.push('/')}/>
            { menuList.map((item, index) => renderMenu(item, index)) }
          </RowFixed>
          <RowFixed>
            {/* {!!login && !!logout && (
              <Flex>
                <UserBlock account={account as string} chainId={chainId} login={login} logout={logout} />
              </Flex>
            )} */}
          </RowFixed>
        </RowBetween>
      </StyledNav>
      <BodyWrapper>
        <Inner>
          {props.children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Menu

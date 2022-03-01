import Title from 'components/Title'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { FadeInUp } from 'utils/animation'
import { useResponsive } from 'utils/responsive'

const AutonomousPhaseWrap = styled.div`
  margin-top: 230px;
  @media (max-width: 768px) {
    margin-top: 64px;
  }
`

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 1246px;
`

const StyledTitle = styled.div`
  font-family: 'kccfont-bold';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 24px;
  /* identical to box height, or 50% */
  text-align: center;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`
const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  /* or 200% */
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 110px;
  @media (max-width: 768px) {
    margin-top: 48px;
    padding: 0 28px;
    font-size: 14px;
    line-height: 32px;
  }
`

const SubTitle = styled.div`
  font-family: 'kccfont-bold';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  /* or 133% */
  text-align: center;
  color: #ffffff;
  margin-top: 110px;
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 28px;
  }
`

const leftBg = require('../../assets/images/home/bg-left.png').default
const rightBg = require('../../assets/images/home/bg-right.png').default

const CenterBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0px auto;
  padding: 170px 0px;
  background: url(${leftBg}) left bottom no-repeat, url(${rightBg}) 95% 70px no-repeat;
  @media (max-width: 768px) {
    flex-flow: column wrap;
    justify-content: flex-start;
    padding: 170px 0;
    max-width: 100%;
  }
`

const Item = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  width: 330px;
  height: 260px;
  border-radius: 20px;
  background: rgba(38, 44, 58, 0.5);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: linear-gradient(180deg, #29cd97 0%, rgba(44, 255, 190, 0) 100%);
    transform: translateY(-30px);
  }
  & + & {
    margin-left: 24px;
  }
  @media (max-width: 768px) {
    & + & {
      margin-left: 0px;
      margin-top: 24px;
    }
  }
`
const LogoIcon = styled.img`
  width: 72px;
  height: 72px;
`

const LogoText = styled.div`
  font-family: 'kcc-font';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  vertical-align: top;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const FocusListWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0px auto;
  padding: 170px 0px;
  @media (max-width: 768px) {
    flex-flow: column wrap;
    justify-content: flex-start;
    padding: 93px 0 0 0;
    max-width: 100%;
    padding-bottom: 0;
  }
`

const FocusItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;
  &:nth-child(even) {
    margin-left: 180px;
  }
  @media (max-width: 768px) {
    &:nth-child(even) {
      margin-left: 0px;
    }
    margin-bottom: 60px;
  }
`
const PlanIcon = styled.img`
  width: 188px;
  height: 140px;
`

const PlanText = styled.div`
  max-width: 190px;
  font-family: 'kcc-font';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  margin-top: 30px;
  /* or 140% */
  text-align: center;
  color: #ffffff;
`

const LogoList = [
  {
    icon: require('../../assets/images/home/new-kucoin.png').default,
    text: 'Ecosystem of the KuCoin exchange',
  },
  {
    icon: require('../../assets/images/home/payment.png').default,
    text: 'Payment systems',
  },
  {
    icon: require('../../assets/images/home/new-kcc.png').default,
    text: 'KCC ecosystem',
  },
  {
    icon: require('../../assets/images/home/web3.0.png').default,
    text: 'Web 3.0 ecosystem',
  },
]

const focusList = [
  {
    icon: require('../../assets/images/home/analyst.png').default,
    text: 'KCS GoDAO Analyst Program',
  },
  {
    icon: require('../../assets/images/home/listing.png').default,
    text: 'KCS GoDAO Listing Program',
  },
  {
    icon: require('../../assets/images/home/investment.png').default,
    text: 'KCS GoDAO Investment Plan',
  },
  {
    icon: require('../../assets/images/home/sharing.png').default,
    text: 'KCS GoDAO Benefit Sharing Program',
  },
]

const AutonomousPhase: React.FunctionComponent = () => {
  const { isMobile } = useResponsive()
  const { t } = useTranslation()
  return (
    <AutonomousPhaseWrap>
      <FadeInUp delay={200}>
        <Title type="lines" title={t('DAO_33')} isMobile={isMobile} />
        <Desc>{t('DAO_34')}</Desc>
        <SubTitle>{t('DAO_35')}</SubTitle>
      </FadeInUp>
      <FadeInUp delay={200}>
        <CenterBox>
          {LogoList.map((logo, index) => {
            return (
              <Item key={index}>
                <LogoIcon src={logo.icon} />
                <LogoText>{logo.text}</LogoText>
              </Item>
            )
          })}
        </CenterBox>
      </FadeInUp>
      <FadeInUp delay={200}>
        <SubTitle style={{ marginTop: isMobile ? '140px' : '110px' }}>{t('DAO_36')}</SubTitle>
        <FocusListWrap>
          {focusList.map((focus, index) => {
            return (
              <FocusItem key={index}>
                <PlanIcon src={focus.icon} />
                <PlanText>{focus.text}</PlanText>
              </FocusItem>
            )
          })}
        </FocusListWrap>
      </FadeInUp>
    </AutonomousPhaseWrap>
  )
}

export default AutonomousPhase

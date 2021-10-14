import React, { useState } from 'react'
import styled from 'styled-components'

interface TitleProps {
  index: number
  title: string 
  content: string
  mr?: boolean
}

const HomeDaoCard = styled.div`
  width: 440px;
  height: 360px;
  padding: 44px 36px;
  border-radius: 20px;
  background: #262C3A;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 46px;
  top: 0;
  transition: top .3s linear;
  position: relative;
  color: white;
  :hover {
    top: -10px;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 343px;
    height: auto;
    margin-bottom: 16px;
  }
`

const HomeDaoBg = styled.div`
  background: #1ABB97;
  opacity: 0.8;
  filter: blur(90px);
  height: 180px;
  width: 180px;
  position: absolute;
  right: -80px;
  top: -80px;
`

const ImgIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 88px;
    height: 88px;
  }
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 1.2px;
  font-family: 'kccfont-bold'
`

const Content = styled.div`
  color: #E1E8F5;
  font-size: 14px;
  line-height: 28px;
  word-break: keep-all;
  letter-spacing: 1.2px;
`

const iconList = [
  require('../../assets/images/home/dao-4.svg').default,
  require('../../assets/images/home/dao-3.svg').default,
  require('../../assets/images/home/dao-2.svg').default,
  require('../../assets/images/home/dao-1.svg').default,
]

const DaoCard: React.FunctionComponent<TitleProps> = (props) => {

  const [hover, onHover] = useState(false)

  return (
    <HomeDaoCard onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} style={{marginRight: props.mr ? '36px' : '0'}}>
      {hover && <HomeDaoBg />}
      <ImgIcon src={iconList[props.index]}/>
      <Title style={{fontSize: '28px'}}>{props.title}</Title>
      <Content>{props.content}</Content>
    </HomeDaoCard>
  )
}

export default DaoCard

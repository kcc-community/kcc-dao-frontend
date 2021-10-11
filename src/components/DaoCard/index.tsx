import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Container, Text } from '../../style'
import Col from 'components/Column'

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
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 1.2px;
`

const Content = styled.div`
  font-size: 14px;
  line-height: 28px;
  word-break: keep-all;
  letter-spacing: 1.2px;
`

const iconList = [
  require('../../assets/images/home/dao-1.svg').default,
  require('../../assets/images/home/dao-2.svg').default,
  require('../../assets/images/home/dao-3.svg').default,
  require('../../assets/images/home/dao-4.svg').default,
]

const DaoCard: React.FunctionComponent<TitleProps> = (props) => {

  const [hover, onHover] = useState(false)
  const theme = useTheme()

  return (
    <HomeDaoCard onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} style={{marginRight: props.mr ? '36px' : '0'}}>
      {hover && <HomeDaoBg />}
      <ImgIcon src={iconList[props.index]}/>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </HomeDaoCard>
  )
}

export default DaoCard

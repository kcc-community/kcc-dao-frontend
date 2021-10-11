import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../style'

interface TitleProps {
  index: number
  title: string 
}

const HomeCommunityCard = styled.div`
  width: 330px;
  height: 320px;
  border-radius: 20px;
  background: #262C3A;
  overflow: hidden;
  cursor: pointer;
  top: 0;
  margin-right: 24px;
  transition: top .3s linear;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    top: -10px;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const HomeCommunityBg = styled.div`
  background: #1ABB97;
  opacity: 1;
  filter: blur(50px);
  height: 150px;
  width: 200px;
  position: absolute;
  bottom: -100px;
`

const ImgIcon = styled.img`
  width: 188px;
  height: 140px;
  margin-bottom: 16px;
`


const iconList = [
  require('../../assets/images/home/member.svg').default,
  require('../../assets/images/home/system.svg').default,
]

const CommunityCard: React.FunctionComponent<TitleProps> = (props) => {

  const [hover, onHover] = useState(false)

  return (
    <HomeCommunityCard onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      <ImgIcon src={iconList[props.index]}/>
      <Text color={'white'} fontSize="20px" fontWeight="700">{props.title}</Text>
      {hover && <HomeCommunityBg />}
    </HomeCommunityCard>
  )
}

export default CommunityCard

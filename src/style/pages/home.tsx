import styled, { keyframes } from 'styled-components'
import { Text } from '../../style'
import Col from '../../components/Column'
import Row, { RowBetween } from '../../components/Row'
import { background } from '../../constants/imgs'


export const HomeBackground = styled.div`
  background: url(${background});
  height: 900px;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const ImgHomeTitle = styled.img`
  height: 52px;
  width: 487px;
  margin-top: 309px;
`

export const SecondText = styled(Text)`
  color: white;
  font-size: 18px;
  letter-spacing: 1.2px;
`

export const InfoContainer = styled(Row)`
  width: auto;
  position: relative;
  margin: 0 auto;
  top: 284px;
`

export const InfoCol = styled(Col)`
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 20px;
`

export const HomeDao = styled(RowBetween)`
  maxWidth: 916px;
  flex-wrap: wrap;
`

export const HomeFeatureRight = styled.img`
  width: 429px;
  height: 416px;
`

export const HomeFeatureLeft = styled.img`
  width: 407px;
  height: 344px;
`

export const HomeCommunityCard= styled.div`
  width: 100%;
  height: 680px;
  border-radius: 20px;
  margin-top: 143px;
  margin-bottom: 276px;
  background: #1F2431;
  position: relative;
`

export const HomeCommunityCardContainer = styled.div`
  width: 100%;
  height: 680px;
  border-radius: 20px;
  position: absolute;
  top: 0;
  overflow: hidden;
`

export const HomeCommunityCardBg = styled.div`
  background: #1ABB97;
  opacity: 1;
  filter: blur(100px);
  height: 200px;
  width: 1000px;
  position: absolute;
  left: 100px;
  top: -100px;
`

export const HomeCommunityMedia = styled(RowBetween)`
  width: 648px;
  margin: 69px auto 110px auto;
`

export const HomeCommunityMediaLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeImgCommunity = styled.img`
  height: 72px;
  width: 72px;
  margin-bottom: 8px;
`




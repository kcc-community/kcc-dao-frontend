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
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 741px;
    padding: 0 24px;
    border-radius: 0px;
  }
`

export const ImgHomeTitle = styled.img`
  height: 52px;
  margin: 309px auto 0 auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 204px;
  }
`

export const SecondText = styled(Text)`
  color: white;
  font-size: 16px;
  letter-spacing: 1.2px;
  ${({ theme }) => theme.mediaQueries.sm} {
    letter-spacing: 1.1px;
  }
`

export const InfoContainer = styled(Row)`
  width: auto;
  position: relative;
  margin: 0 auto;
  top: 254px;
  ${({ theme }) => theme.mediaQueries.sm} {
    top: 112px;
    display: flex;
    justify-content: center;
  }
`

export const InfoCol = styled(Col)`
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 0 48px 0;
  }
`

export const HomeDao = styled(RowBetween)`
  maxWidth: 916px;
  flex-wrap: wrap;
`

export const HomeFeatureRight = styled.img`
  width: 440px;
  height: 440px;
  margin-right: 50px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 325px;
    height: 325px;
    margin-right: 0;
  }
`

export const HomeFeatureLeft = styled.img`
  width: 440px;
  height: 440px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 325px;
    height: 325px;
    margin-top: 60px;
  }
`

export const HomeCommunityCard= styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  margin-top: 143px;
  margin-bottom: 88px;
  background: #1F2431;
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 341px;
    height: 661px;
    margin: 160px auto 40px auto;
  }
`

export const HomeCommunityCardContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  position: absolute;
  top: 0;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 341px;
    height: 661px;
  }
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
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 200px;
    height: 200px;
    filter: blur(50px);
    top: -100px;
    left: 70px;
  }
`

export const HomeCommunityMedia = styled(RowBetween)`
  width: 648px;
  margin: 45px auto 110px auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 300px;
  }
`

export const HomeCommunityMediaLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 150px;
  border-radius: 12px;
  :hover {
    background: #3B4252;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 46px;
  }
`

export const HomeImgCommunity = styled.img`
  height: 72px;
  width: 72px;
  margin-bottom: 8px;
`




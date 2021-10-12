import styled from 'styled-components'
import { Text } from '../../style'
import Col from '../../components/Column'
import Row from '../../components/Row'


export const ImgMemberTitle = styled.img`
  height: 52px;
  margin: 79px auto 0 auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 33px;
    height: 30px;
  }
`

export const ImgMemberMap = styled.img`
  width: 1200px;
  height: auto;
  margin-top: 53px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 25px;
  }
`

export const MemberContainer = styled.div`
  width: 960px;
  margin: 0 auto 140px auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100vw;
    padding: 0 20px
  }
`

export const MemberBtn = styled.div`
  height: 60px;
  width: 120px;
  border-radius: 12px;
  background: #262C3A;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  margin-top: 73px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 40px;
    width: 100px;
    font-size: 16px;
    line-height: 40px;
    margin-top: 12px;
  }
`

export const MemberBtnSec = styled.div`
  height: 60px;
  width: 120px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  margin-top: 73px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 40px;
    width: 100px;
    font-size: 16px;
    line-height: 40px;
    margin-top: 12px;
  }
`

export const MemberAvatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  margin-bottom: 12px;
`

export const MemberText = styled.div`
  color: #E1E8F599;
  font-size: 14px;
  margin-top: 8px;
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`






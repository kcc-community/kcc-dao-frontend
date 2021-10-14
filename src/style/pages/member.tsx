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

export const ImgMemberLoading = styled.div`
  width: 1200px;
  height: 600px;
  margin-top: 53px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 25px;
  }
`

export const MemberContainer = styled.div`
  max-width: 850px;
  min-width: 750px;
  margin: 0 auto 140px auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100vw;
    min-width: auto;
    max-width: auto;
    padding: 0 25px;
    margin: 0 auto 80px auto;
  }
`

export const MemberBtn = styled.div<{ isCategoryMr?: boolean, width?: string  }>`
  height: 60px;
  width: ${({ width }) => width ?? '120px'};
  border-radius: 12px;
  background: #262C3A;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  margin-top: 73px;
  cursor: pointer;
  :hover {
    background: #3B4253;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 40px;
    width: 100px;
    font-size: 16px;
    line-height: 40px;
    margin-top: 12px;
    margin-right: ${({ isCategoryMr }) => isCategoryMr ? '12px' : '0'};
  }
`

export const MemberBtnSec = styled.div<{ isCategoryMr?: boolean, width?: string }>`
  height: 60px;
  width: ${({ width }) => width ?? '120px'};
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
    margin-right: ${({ isCategoryMr }) => isCategoryMr ? '12px' : '0'};
  }
`

export const MemberAvatarContainer = styled(Row)`
  height: 120px;
  width: 120px;
  background: #2E3340;
  border-radius: 60px;
  margin-bottom: 12px;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 80px;
    width: 80px;
  }
`

export const MemberAvatar = styled.img`
  height: 72px;
  width: 72px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 48px;
    width: 48px;
  }
`

export const MemberText = styled.div`
  color: #E1E8F599;
  font-size: 14px;
  margin-top: 8px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 80px;
  }
`






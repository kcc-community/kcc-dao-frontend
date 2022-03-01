import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Text } from '../../style'
import Row, { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'
import { media } from '../../constants/home'
import $ from 'jquery'

const FooterWrap = styled.div<{ transparent?: boolean }>`
  width: 100%;
  height: 120px;
  background: ${({ theme, transparent }) => `${transparent ? theme.colors.backgroundAlt : theme.colors.backgroundNav}`};
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 180px;
    background: #262c3a;
    padding: 0 44px;
  }
`

const MediaItem = styled.a`
  height: 42px;
  width: 42px;
  border-radius: 20px;
  background: #ffffff33;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  :hover {
    background: #b8c6d8;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    background: none;
    margin: 32px 0 0 0;
  }
`

interface FooterProps {
  transparent?: boolean
  isMobile?: boolean
}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const footer = `© ${new Date().getFullYear()} GoDao All rights reserved`

  useEffect(() => {
    for (let index in media) {
      $('.' + media[index].app).hover(
        function () {
          $('.' + media[index].app + 'Logo').attr('src', media[index].hover)
        },
        function () {
          $('.' + media[index].app + 'Logo').attr('src', media[index].icon)
        }
      )
    }
  }, [])

  const renderMedia = (data, index) => {
    return (
      <MediaItem href={data?.route} target="_blank" key={index} className={data?.app}>
        <img
          src={props.isMobile ? data?.h5 : data?.icon}
          style={{ width: props.isMobile ? '44px' : '20px' }}
          alt={data?.app}
          className={data?.app + 'Logo'}
        />
      </MediaItem>
    )
  }

  return (
    <FooterWrap transparent={props?.transparent}>
      <Container>
        {props.isMobile ? (
          <AutoColumn justify="center">
            <Text color={'#FFFFFFCC'}>{footer}</Text>
            <RowBetween>{media.map((item, index) => renderMedia(item, index))}</RowBetween>
          </AutoColumn>
        ) : (
          <RowBetween>
            <Text color={'#FFFFFFCC'}>{footer}</Text>
            <Row style={{ width: 'auto' }}>{media.map((item, index) => renderMedia(item, index))}</Row>
          </RowBetween>
        )}
      </Container>
    </FooterWrap>
  )
}

export default Footer

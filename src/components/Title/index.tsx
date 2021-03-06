import React from 'react'
import styled from 'styled-components'
import { Text } from '../../style'
import Col from 'components/Column'

interface TitleProps {
  type: string
  title: string
  number?: number
  mb?: string
  isMobile?: boolean
}

const Lines = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 9px;
  width: 100%;
  margin-top: -25px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 6px;
    margin-top: -20px;
  }
`

const LinesContainer = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 120px;
  }
`

const NumberContainer = styled.div`
  position: relative;
  min-width: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 0;
    padding: 0 24px;
  }
`

const Number = styled.div`
  color: #b8c6d833;
  font-size: 120px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 90px;
  }
`

const NumberText = styled(Text)`
  color: white;
  font-size: 48px;
  font-weight: 700;
  font-family: 'kccfont-bold';
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
  }
`

const Title: React.FunctionComponent<TitleProps> = (props) => {
  if (props.type === 'number') {
    return (
      <NumberContainer>
        <Number>{props.number}</Number>
        <NumberText>{props.title}</NumberText>
      </NumberContainer>
    )
  }

  return (
    <LinesContainer>
      <Col>
        {props.title === 'Join Our Community' && props.isMobile ? (
          <Text
            color="white"
            fontSize={'32px'}
            fontWeight="700"
            style={{
              position: 'relative',
              zIndex: 1,
              marginBottom: '5px',
              marginTop: '-60px',
              fontFamily: 'kccfont-bold',
            }}
          >
            {props.title}
          </Text>
        ) : (
          <Text
            color="white"
            fontSize={props.isMobile ? '32px' : '52px'}
            fontWeight="700"
            style={{ position: 'relative', zIndex: 1, fontFamily: 'kccfont-bold' }}
          >
            {props.title}
          </Text>
        )}
        <Lines />
      </Col>
    </LinesContainer>
  )
}

export default Title

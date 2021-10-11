import React from 'react'
import styled from 'styled-components'
import { Container, Text } from '../../style'
import Col from 'components/Column'

interface TitleProps {
  type: string 
  title: string
  number?: number
  mb?: string
}

const Lines = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 9px;
  width: 100%;
  margin-top: -25px;
  position: relative;
`

const LinesContainer = styled.div`
  display: flex;
  justify-content: center;
`

const NumberContainer = styled.div`
  position: relative;
  min-width: 400px;
`

const Number = styled.div`
  color: #B8C6D833;
  font-size: 120px;
  font-weight: bold;
`

const NumberText = styled(Text)`
  color: white;
  font-size: 48px;
  font-weight: 700;  
  position: absolute;
  bottom: 0;
`

const Title: React.FunctionComponent<TitleProps> = (props) => {

  if(props.type === "number"){
    return(
      <NumberContainer>
        <Number>{props.number}</Number>
        <NumberText>{props.title}</NumberText>
      </NumberContainer>
    )
  }

  return (
    <LinesContainer>
      <Col>
        <Text color="white" fontSize="52px" fontWeight="700" style={{position: 'relative', zIndex: 1}}>{props.title}</Text>
        <Lines />
      </Col>
    </LinesContainer>
  )
}

export default Title

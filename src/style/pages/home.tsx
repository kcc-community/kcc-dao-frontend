import styled, { keyframes } from 'styled-components'
import { Text } from '../../style'
import Col from '../../components/Column'
import { RowBetween } from '../../components/Row'
import { background } from '../../constants/imgs'


export const HomeBackground = styled.div`
  background: url(${background});
  height: 900px;
  width: 1200px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`

export const ImgHomeTitle = styled.img`
  height: 52px;
  margin-top: 309px;
`

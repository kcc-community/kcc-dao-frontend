import React, { FunctionComponent, useState, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { Container, Text } from '../../style'
import * as LocalStyle from '../../style/pages'
import Row, { RowBetween, AutoRow } from 'components/Row'
import Col from '../../components/Column'
import { titleHome } from '../../constants/imgs'
import Footer from '../../components/Footer'
import CountUp from 'react-countup'
import { FadeInUp } from 'utils/animation'
import { useResponsive } from 'utils/responsive'
import { ApiService, useLoading } from '../../api'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'


const HomePage: React.FunctionComponent = (props) => {
  const history = useHistory();
  const { isTablet } = useResponsive();

  return (
      <>
        <Container width={isTablet ? '768px' : '1200px'}>
          <LocalStyle.HomeBackground>
            <LocalStyle.ImgHomeTitle src={titleHome}/>
          </LocalStyle.HomeBackground>
        </Container>
        <Footer transparent={true}/>
      </>
  )
}

export default HomePage

import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Container, Text } from '../../style'
import Row, { RowBetween } from 'components/Row'
import Col from 'components/Column'
import BN from 'bignumber.js'
import * as LocalStyle from '../../style/pages'
import { useHistory } from 'react-router-dom'
import { useResponsive } from 'utils/responsive'
import Footer from '../../components/Footer'


const MemberPage: React.FunctionComponent = (props) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const { isTablet } = useResponsive()

  return (
    <>
      <Container style={{ minHeight: '80vh' }} width={isTablet ? '768px' : '1200px'}>
        
      </Container>
      <Footer />
    </>
  )
}

export default MemberPage

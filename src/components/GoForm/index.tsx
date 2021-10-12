import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Text } from '../../style'
import { useTranslation } from 'react-i18next'

interface GoFormProps {
  isMobile?: boolean
}

const imgs = {
  banner: require('../../assets/images/home/member-banner.png').default,
  send: require('../../assets/images/Icons/send.svg').default,
}

const FormBg = styled.div`
  background: url(${imgs['banner']});
  height:  360px;
  max-width: 1920px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 360px;
  width: 100%;
`

const FormBtn = styled.div`
  width: 345px;
  height: 48px;
  background: #FFFFFF;
  border-radius: 24px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const FormImgSend = styled.img`
  width: 12.5px;
  height: 12px;
  margin-left: 12px;
`

const GoForm: React.FunctionComponent<GoFormProps> = (props) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <FormContainer>
      <FormBg>
        <Text fontSize={props.isMobile ? "30px" : "40px"} color={"white"} fontWeight={"700"} style={{textAlign: 'center'}}>{t('DAO_26')}</Text>
        <FormBtn>
          <Text color={theme.colors.primary} fontSize={"16px"} fontWeight={"700"}>{t('DAO_27')}</Text>
          <FormImgSend src={imgs['send']} />
        </FormBtn>
      </FormBg>
    </FormContainer>
  )
}

export default GoForm

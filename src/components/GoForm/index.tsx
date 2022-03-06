import React, { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { Text } from '../../style'
import { useTranslation } from 'react-i18next'
import $ from 'jquery'

interface GoFormProps {
  isMobile?: boolean
}

const imgs = {
  banner: require('../../assets/images/home/member-banner.png').default,
  send: require('../../assets/images/Icons/send.svg').default,
  sendHover: require('../../assets/images/Icons/send-hover.svg').default,
}

const FormBg = styled.div`
  background: url(${imgs['banner']});
  height: 360px;
  max-width: 1920px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 360px;
  width: 100%;
`

const FormBtn = styled.a`
  width: 345px;
  height: 48px;
  background: #ffffff;
  border-radius: 24px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  :hover {
    background: #29cd97;
    color: white !important;
  }
`

const FormImgSend = styled.img`
  width: 12.5px;
  height: 12px;
  margin-left: 12px;
`

const GoForm: React.FunctionComponent<GoFormProps> = (props) => {
  const { t } = useTranslation()

  useEffect(() => {
    $('.formBtn').hover(
      function () {
        $('.formBtnLogo').attr('src', imgs['sendHover'])
      },
      function () {
        $('.formBtnLogo').attr('src', imgs['send'])
      }
    )
  }, [])

  return (
    <FormContainer>
      <FormBg>
        <Text
          fontSize={props.isMobile ? '30px' : '40px'}
          color={'white'}
          fontWeight={'700'}
          style={{ textAlign: 'center' }}
        >
          {t('DAO_26')}
        </Text>
        <FormBtn className={'formBtn'} href="https://forms.office.com/r/WjXJNCwqz3" target="_blank">
          <div>{t('DAO_27')}</div>
          <FormImgSend src={imgs['send']} className={'formBtnLogo'} />
        </FormBtn>
      </FormBg>
    </FormContainer>
  )
}

export default GoForm

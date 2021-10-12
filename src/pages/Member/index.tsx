import React, { FunctionComponent, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Container, Text } from '../../style'
import { titleMember, memberMap } from '../../constants/imgs'
import { ambassadorList } from '../../constants/ambassador'
import Row, { RowBetween } from 'components/Row'
import Col, { AutoColumn } from 'components/Column'
import GoForm from 'components/GoForm'
import * as LocalStyle from '../../style/pages'
import { useResponsive } from 'utils/responsive'
import Footer from '../../components/Footer'
import { FadeInUp } from 'utils/animation'

const MemberPage: React.FunctionComponent = (props) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const { isTablet, isMobile } = useResponsive()
  const [tab, setTab] = useState(0)
  const pageWidth = isMobile ? '100vw' : (isTablet ? '768px' : '1200px');
  const category = [t('DAO_28'), t('DAO_29'), t('DAO_30'), t('DAO_31'), t('DAO_32')]

  const renderIcon = (data: any, index: number) => {
    const isMr = index + 1 % 4 === 0 ? false : true;
    return(
      <AutoColumn justify="center" key={index} style={{marginRight: isMr ? '120px' : '0', marginBottom: '36px'}}>
        <LocalStyle.MemberAvatar src={data?.avatar}/>
        <Text color={"white"} fontWeight={"700"} fontSize={"20px"}>{data.name}</Text>
        <LocalStyle.MemberText>{data.address.substr(0, 4) + '...' + data.address.substr(-4)}</LocalStyle.MemberText>
      </AutoColumn>
    )
  }
  
  const renderList = (title: string, data: Object[]) => {
    return(
      <Col>
        <Text color={"white"} fontWeight={"700"} fontSize={"24px"} mt="62px" mb="32px">{title}</Text>
        <Row>
          {data.map((item, index) => {
            return renderIcon(item, index)
          })}
        </Row>
      </Col>
    )
  }


  return (
    <>
      <Container style={{ minHeight: '80vh' }} width={pageWidth}>
        <FadeInUp>
          <AutoColumn justify="center">
            <LocalStyle.ImgMemberTitle src={titleMember}/>
            <LocalStyle.SecondText mt={isMobile ? "20px" : "17px"} style={{width: isMobile ? '210px' : 'auto', textAlign: 'center'}}>{t('DAO_25')}</LocalStyle.SecondText>
          </AutoColumn>
        </FadeInUp>
        <FadeInUp>
          <LocalStyle.ImgMemberMap src={memberMap} />
        </FadeInUp>
        <LocalStyle.MemberContainer> 
          <FadeInUp>
            <RowBetween style={{flexWrap: 'wrap'}}>
              {
                category.map((item, index) => {
                  if(tab === index) return <LocalStyle.MemberBtnSec onClick={() => setTab(index)}>{item}</LocalStyle.MemberBtnSec>
                  return <LocalStyle.MemberBtn onClick={() => setTab(index)}>{item}</LocalStyle.MemberBtn>
                })
              }
            </RowBetween>
          </FadeInUp>
          {(tab === 0 || tab === 1) && renderList(t('DAO_29'), ambassadorList['Engineer'])}
          {(tab === 0 || tab === 2) && renderList(t('DAO_30'), ambassadorList['Marketing'])}
          {(tab === 0 || tab === 3) && renderList(t('DAO_31'), ambassadorList['Adviser'])}
        {(tab === 0 || tab === 4) && renderList(t('DAO_32'), ambassadorList['Ambassador'])}
        </LocalStyle.MemberContainer>
      </Container>
      <GoForm isMobile={isMobile}/>
      <Footer isMobile={isMobile}/>
    </>
  )
}

export default MemberPage

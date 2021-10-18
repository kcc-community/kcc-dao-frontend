import React, { FunctionComponent, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Popover } from 'antd'
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
import { Img } from 'react-image'

const MemberPage: React.FunctionComponent = (props) => {
  const { t } = useTranslation();
  const { isTablet, isMobile } = useResponsive();
  const [tab, setTab] = useState(0);
  const pageWidth = isMobile ? '100vw' : (isTablet ? '768px' : '1200px');
  const category = [t('DAO_28'), t('DAO_29'), t('DAO_30'), t('DAO_32')];

  const renderIcon = (data: any, index: number) => {
    const isWebMr = (index + 1) % 4 === 0 ? false : true;
    const isMobileMr = (index + 1) % 3 === 0 ? false : true;
    const mrNumber = isMobile ? "35px" : "120px";
    const isMr = isMobile ? isMobileMr : (isTablet ? isMobileMr : isWebMr);
    return(
      <Popover content={data.desc} arrowPointAtCenter>
        <AutoColumn justify="center" key={index} style={{marginRight: isMr ? mrNumber : '0', marginBottom: '36px'}}>
          <LocalStyle.MemberAvatarContainer>
            <LocalStyle.MemberAvatar src={data?.avatar}/>
          </LocalStyle.MemberAvatarContainer>
          <Text color={"white"} fontWeight={"700"} fontSize={isMobile ? "16px" : "20px"}>{data.name}</Text>
            <LocalStyle.MemberText>{data.desc.substr(0, 32) + '...'}</LocalStyle.MemberText>
        </AutoColumn>
      </Popover>
    )
  }
  
  const renderList = (title: string, data: Object[]) => {
    return(
      <Col>
        <Text color={"white"} fontWeight={"700"} fontSize={"24px"} mt={isMobile ? "40px" : "62px"} mb="32px">{title}</Text>
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
        <FadeInUp isH5>
          <AutoColumn justify="center">
            <LocalStyle.ImgMemberTitle src={titleMember}/>
            <LocalStyle.SecondText mt={isMobile ? "20px" : "17px"} style={{width: isMobile ? '210px' : 'auto', textAlign: 'center'}}>{t('DAO_25')}</LocalStyle.SecondText>
          </AutoColumn>
        </FadeInUp>
        <Img 
          decode={true}
          style={{width: '1200px', height: 'auto', marginTop: '53px'}}
          loader={<LocalStyle.ImgMemberMap src={memberMap} />}
          unloader={<LocalStyle.ImgMemberLoading />}
          src={[memberMap as string]}/>

        <LocalStyle.MemberContainer> 
          {/* <FadeInUp> */}
            <RowBetween style={{flexWrap: 'wrap', justifyContent: isMobile ? 'flex-start' : 'space-between'}}>
              {
                category.map((item, index) => {
                  const isCategoryMr = isMobile ? (index + 1) % 3 === 0 ? false : true : false;
                  if(tab === index) return <LocalStyle.MemberBtnSec onClick={() => setTab(index)} isCategoryMr={isCategoryMr} width={index === 4 ? '140px' : '120px'}>{item}</LocalStyle.MemberBtnSec>
                  return <LocalStyle.MemberBtn onClick={() => setTab(index)} isCategoryMr={isCategoryMr}  width={index === 4 ? '140px' : '120px'}>{item}</LocalStyle.MemberBtn>
                })
              }
            </RowBetween>
          {/* </FadeInUp> */}
          {(tab === 0 || tab === 1) && renderList(t('DAO_29'), ambassadorList['Engineer'])}
          {(tab === 0 || tab === 2) && renderList(t('DAO_30'), ambassadorList['Operation'])}
          {/* {(tab === 0 || tab === 3) && renderList(t('DAO_31'), ambassadorList['Advisor'])} */}
        {(tab === 0 || tab === 3) && renderList(t('DAO_32'), ambassadorList['Ambassador'])}
        </LocalStyle.MemberContainer>
      </Container>
      <GoForm isMobile={isMobile}/>
      <Footer isMobile={isMobile}/>
    </>
  )
}

export default MemberPage

import React, { FunctionComponent, useState, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { Container, Text } from '../../style'
import * as LocalStyle from '../../style/pages'
import Row, { RowBetween, AutoRow } from 'components/Row'
import Col from '../../components/Column'
import Title from '../../components/Title'
import { titleHome, featureRight, featureLeft } from '../../constants/imgs'
import { media } from '../../constants/home'
import Footer from '../../components/Footer'
import DaoCard from '../../components/DaoCard'
import CommunityCard from '../../components/CommunityCard'
import CountUp from 'react-countup'
import { FadeInUp } from 'utils/animation'
import { useResponsive } from 'utils/responsive'
import { ApiService, useLoading } from '../../api'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'


const HomePage: React.FunctionComponent = (props) => {
  const history = useHistory();
  const { isTablet } = useResponsive();
  const { t } = useTranslation();
  const theme = useTheme();

  const InfoData = (title: string, num: number, key: number) => {
    return (
      <FadeInUp delay={key * 100}>
        <LocalStyle.InfoCol style={{width: isTablet ? '200px' : '300px'}}>
          <Text color={theme.colors.primary} fontWeight={'700'} fontSize="32px">
            <CountUp 
              start={0} 
              end={num} 
              decimals={0}
              duration={1.5} 
              separator=","/>
          </Text>
          <LocalStyle.SecondText style={{fontSize: '16px'}}>{title}</LocalStyle.SecondText>
        </LocalStyle.InfoCol>
      </FadeInUp>
    )
  }

  const renderDAO = () => {
    return(
      <Col style={{alignItems: 'center'}}>
        <FadeInUp>
          <Col style={{alignItems: 'center'}}>
            <Title type="lines" title={t('DAO_4')}/>
            <LocalStyle.SecondText mt="36px" mb="92px" style={{maxWidth: '850px', textAlign: 'center'}}>{t('DAO_5')}</LocalStyle.SecondText>
          </Col>
        </FadeInUp>
        <FadeInUp>
          <LocalStyle.HomeDao style={{justifyContent: isTablet ? 'center' : 'space-between'}}>
            <DaoCard index={0} title={t('DAO_6')} content={t('DAO_7')} mr={!isTablet}/>
            <DaoCard index={1} title={t('DAO_8')} content={t('DAO_9')} />
          </LocalStyle.HomeDao>
        </FadeInUp>
        <FadeInUp>
          <LocalStyle.HomeDao style={{justifyContent: isTablet ? 'center' : 'space-between'}}>
            <DaoCard index={2} title={t('DAO_10')} content={t('DAO_11')} mr={!isTablet}/>
            <DaoCard index={3} title={t('DAO_12')} content={t('DAO_13')}/>
          </LocalStyle.HomeDao>
        </FadeInUp>
      </Col>
    )
  }

  const renderFeatures = () => {
    return(
      <Col style={{alignItems: 'center', marginTop: '200px'}}>
        <FadeInUp>
          <Col style={{alignItems: 'center'}}>
            <Title type="lines" title={t('DAO_14')}/>
            <LocalStyle.SecondText mt="36px" mb="92px" style={{width: '460px', textAlign: 'center'}}>{t('DAO_15')}</LocalStyle.SecondText>
          </Col>
        </FadeInUp>
        <FadeInUp>
          <RowBetween style={{maxWidth: '1100px', justifyContent: isTablet ? 'center' : 'space-between'}}>
            <Col>
              <Title type="number" number={1} title={t('DAO_16')}/>
              <LocalStyle.SecondText mt="40px" style={{width: '550px'}}>{t('DAO_17')}</LocalStyle.SecondText>
            </Col>
            <LocalStyle.HomeFeatureRight src={featureRight}/>
          </RowBetween>
        </FadeInUp>
        <FadeInUp>
          <RowBetween style={{maxWidth: '1100px', marginTop: '95px', justifyContent: isTablet ? 'center' : 'space-between'}}>
            {!isTablet && <LocalStyle.HomeFeatureLeft src={featureLeft}/>}
            <Col>
              <Title type="number" number={2} title={t('DAO_18')}/>
              <LocalStyle.SecondText mt="40px" style={{width: '500px'}}>{t('DAO_19')}</LocalStyle.SecondText>
            </Col>
            {isTablet && <LocalStyle.HomeFeatureLeft src={featureLeft}/>}
          </RowBetween>
        </FadeInUp>
      </Col>
    )
  }

  const renderMedia = (index: number) => {
    return(
      <LocalStyle.HomeCommunityMediaLink href={media[index].route} target="_blank">
        <LocalStyle.HomeImgCommunity src={media[index].svg}/>
        <Text color={'white'} fontSize="16px" mt="8px">{media[index].app}</Text>
      </LocalStyle.HomeCommunityMediaLink>
    )
  }

  const renderCommunity = () => {
    return(
      <FadeInUp>
        <LocalStyle.HomeCommunityCard>
          <LocalStyle.HomeCommunityCardContainer>
            <LocalStyle.HomeCommunityCardBg />
          </LocalStyle.HomeCommunityCardContainer>
          <FadeInUp>
            <Col style={{alignItems: 'center', paddingTop: '90px'}}>
              <Title type="lines" title={t('DAO_20')}/>
              <LocalStyle.SecondText mt="30px" style={{textAlign: 'center'}}>{t('DAO_21')}</LocalStyle.SecondText>
              <LocalStyle.SecondText mt="5px" style={{textAlign: 'center'}}>{t('DAO_22')}</LocalStyle.SecondText>
            </Col>
          </FadeInUp>
          <FadeInUp>
            <LocalStyle.HomeCommunityMedia>
              {media.map((item, index) => renderMedia(index))}
            </LocalStyle.HomeCommunityMedia>
          </FadeInUp>
          <FadeInUp>
            <AutoRow justify="center">
              <CommunityCard index={0} title={t('DAO_23')}/>
              <CommunityCard index={1} title={t('DAO_24')}/>
            </AutoRow>
          </FadeInUp>
        </LocalStyle.HomeCommunityCard>
      </FadeInUp>
    )
  }

  return (
      <>
        <Container width={isTablet ? '768px' : '1200px'}>
          <LocalStyle.HomeBackground>
            <FadeInUp>
              <LocalStyle.ImgHomeTitle src={titleHome}/>
              <LocalStyle.SecondText mt="17px">{t('DAO_0')}</LocalStyle.SecondText>
            </FadeInUp>
            <LocalStyle.InfoContainer>
              {InfoData(t('DAO_1'), 12211000, 0)}
              {InfoData(t('DAO_2'), 7255554, 1)}
              {InfoData(t('DAO_3'), 520000, 2)}
            </LocalStyle.InfoContainer>
          </LocalStyle.HomeBackground>
          {renderDAO()}
          {renderFeatures()}
          {renderCommunity()}
        </Container>
        <Footer transparent={true}/>
      </>
  )
}

export default HomePage

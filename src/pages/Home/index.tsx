import React, { FunctionComponent } from 'react'
import styled, { useTheme } from 'styled-components'
import { Container, Text } from '../../style'
import * as LocalStyle from '../../style/pages'
import { RowBetween } from 'components/Row'
import Col, { AutoColumn } from '../../components/Column'
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
  const { isTablet, isMobile } = useResponsive();
  const { t } = useTranslation();
  const theme = useTheme();
  const pageWidth = isMobile ? '100vw' : (isTablet ? '768px' : '1200px');

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
            <Title type="lines" title={t('DAO_4')} isMobile={isMobile}/>
            <LocalStyle.SecondText mt={isMobile ? "20px" : "36px"} mb={isMobile ? "32px" : "92px"} style={{maxWidth: isMobile ? '330px' : '850px', textAlign: 'center'}}>{t('DAO_5')}</LocalStyle.SecondText>
          </Col>
        </FadeInUp>
        <FadeInUp>
          <LocalStyle.HomeDao style={{justifyContent: isTablet || isMobile ? 'center' : 'space-between'}}>
            <DaoCard index={0} title={t('DAO_6')} content={t('DAO_7')} mr={!isTablet && !isMobile}/>
            <DaoCard index={1} title={t('DAO_8')} content={t('DAO_9')} />
          </LocalStyle.HomeDao>
        </FadeInUp>
        <FadeInUp>
          <LocalStyle.HomeDao style={{justifyContent: isTablet || isMobile  ? 'center' : 'space-between'}}>
            <DaoCard index={2} title={t('DAO_10')} content={t('DAO_11')} mr={!isTablet && !isMobile}/>
            <DaoCard index={3} title={t('DAO_12')} content={t('DAO_13')}/>
          </LocalStyle.HomeDao>
        </FadeInUp>
      </Col>
    )
  }

  const renderFeatures = () => {
    return(
      <Col style={{alignItems: isMobile ? 'flex-start' : 'center', marginTop: isMobile ? '0' : '200px', width: '100%'}}>
        <FadeInUp>
          <Col style={{alignItems: 'center', width: isMobile ? '100vw' : 'auto'}}>
            <Title type="lines" title={t('DAO_14')} isMobile={isMobile}/>
            <LocalStyle.SecondText mt={isMobile ? "26px" : "36px"} mb={isMobile ? "50px" : "92px"} style={{width: isMobile ? '330px' : '460px', textAlign: 'center'}}>{t('DAO_15')}</LocalStyle.SecondText>
          </Col>
        </FadeInUp>
        {
          isMobile ?
          <div style={{width: '100vw'}}>
            <FadeInUp>
              <AutoColumn justify="center">
                <LocalStyle.HomeFeatureRight src={featureRight}/>
              </AutoColumn>
            </FadeInUp>
            <FadeInUp>
              <Col style={{marginLeft: '30px'}}>
                <Title type="number" number={1} title={t('DAO_16')}/>
                <LocalStyle.SecondText mt="30px" style={{width: '300px'}}>{t('DAO_17')}</LocalStyle.SecondText>
              </Col>
            </FadeInUp>
            <FadeInUp>
              <AutoColumn justify="center">
                <LocalStyle.HomeFeatureLeft src={featureLeft}/>
              </AutoColumn>
            </FadeInUp>
            <FadeInUp>
              <Col style={{marginLeft: '30px'}}>
                <Title type="number" number={2} title={t('DAO_18')}/>
                <LocalStyle.SecondText mt="25px" style={{width: '300px'}}>{t('DAO_19')}</LocalStyle.SecondText>
              </Col>
            </FadeInUp>
          </div>
          :
          <>
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
          </>
        }
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
            <Col style={{alignItems: 'center', paddingTop: isMobile ? '0' : '70px'}}>
              <Title type="lines" title={t('DAO_20')} isMobile={isMobile}/>
              <LocalStyle.SecondText mt={isMobile ? "15px" : "30px"} style={{textAlign: 'center'}}>{t('DAO_21')}</LocalStyle.SecondText>
              <LocalStyle.SecondText mt="5px" style={{textAlign: 'center'}}>{t('DAO_22')}</LocalStyle.SecondText>
            </Col>
          </FadeInUp>
          <FadeInUp>
            <LocalStyle.HomeCommunityMedia>
              {media.map((item, index) => renderMedia(index))}
            </LocalStyle.HomeCommunityMedia>
          </FadeInUp>
          {/* <FadeInUp>
            <AutoRow justify="center">
              <CommunityCard index={0} title={t('DAO_23')}/>
              <CommunityCard index={1} title={t('DAO_24')}/>
            </AutoRow>
          </FadeInUp> */}
        </LocalStyle.HomeCommunityCard>
      </FadeInUp>
    )
  }

  return (
      <>
        <Container width={pageWidth}>
          {/* <img src={require('../../assets/images/home/member.gif').default} style={{width: '1200px', height: '600px'}}/> */}
          <LocalStyle.HomeBackground>
            <FadeInUp>
              <AutoColumn justify="center">
                <LocalStyle.ImgHomeTitle src={titleHome}/>
                <LocalStyle.SecondText mt={isMobile ? "20px" : "17px"} style={{width: isMobile ? '250px' : 'auto'}}>{t('DAO_0')}</LocalStyle.SecondText>
              </AutoColumn>
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
        <Footer transparent={true} isMobile={isMobile}/>
      </>
  )
}

export default HomePage

import React, { FunctionComponent, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Container, Text } from '../../style'
import * as LocalStyle from '../../style/pages'
import { RowBetween } from 'components/Row'
import Col, { AutoColumn } from '../../components/Column'
import Title from '../../components/Title'
import { titleHome, featureRight, featureLeft } from '../../constants/imgs'
import { media, infoLink } from '../../constants/home'
import Footer from '../../components/Footer'
import DaoCard from '../../components/DaoCard'
import CommunityCard from '../../components/CommunityCard'
import CountUp from 'react-countup'
import { FadeInUp } from 'utils/animation'
import { useResponsive } from 'utils/responsive'
import { ApiService, useLoading } from '../../api'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import Helmet from 'react-helmet'
import AutonomousPhase from './AutonomousPhase'

const FeatureText = styled.div`
  font-family: 'kccfont-bold';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  /* or 133% */
  text-align: center;
  color: #ffffff;
  margin: 250px auto;
  max-width: 1200px;
  @media (max-width: 768px) {
    margin: 110px auto;
    padding: 0 20px;
    margin-bottom: 0px;
  }
`

const HomePage: React.FunctionComponent = (props) => {
  const { isTablet, isMobile } = useResponsive()
  const { t } = useTranslation()
  const [snapLoading, getSnapShot] = useLoading(ApiService.postSnapShot)
  const [addressLoading, getAddress] = useLoading(ApiService.getHomePriceInfo)
  const [info, setInfo] = useState({ address: 0, member: 0, proposal: 0 })
  const theme = useTheme()
  const pageWidth = isMobile ? '100vw' : isTablet ? '768px' : '1200px'

  useEffect(() => {
    Promise.all([
      getAddress(),
      getSnapShot({
        operationName: 'Proposals',
        variables: {
          first: 30,
          skip: 0,
          space: 'kcc.eth',
          state: 'all',
          author_in: [],
        },
        query:
          'query Proposals($first: Int!, $skip: Int!, $state: String!, $space: String, $space_in: [String], $author_in: [String]) {\n  proposals(\n    first: $first\n    skip: $skip\n    where: {space: $space, state: $state, space_in: $space_in, author_in: $author_in}\n  ) {\n    id\n    title\n    body\n    start\n    end\n    state\n    author\n    created\n    space {\n      id\n      name\n      members\n      avatar\n    }\n  }\n}\n',
      }),
    ]).then((res: any) => {
      let info = {
        address: res[0].addressCount,
        proposal: res[1].proposals.length,
        member: 10,
      }
      setInfo(info)
    })
  }, [])

  const InfoData = (title: string, num: number, key: number) => {
    return (
      <FadeInUp delay={key * 100} isH5={isMobile}>
        <a href={infoLink[key]} target={key === 1 ? '_self' : '_blank'}>
          <LocalStyle.InfoCol style={{ width: isTablet ? '200px' : '300px' }}>
            <Text color={theme.colors.primary} fontWeight={'700'} fontSize="32px">
              <CountUp start={0} end={num} decimals={0} duration={key === 0 ? 1.5 : 0.5} separator="," />
            </Text>
            <LocalStyle.SecondText style={{ fontSize: '16px' }}>{title}</LocalStyle.SecondText>
          </LocalStyle.InfoCol>
        </a>
      </FadeInUp>
    )
  }

  const renderDAO = () => {
    return (
      <Col style={{ alignItems: 'center' }}>
        <FadeInUp isH5={isMobile}>
          <Col style={{ alignItems: 'center' }}>
            <Title type="lines" title={t('DAO_4')} isMobile={isMobile} />
            <LocalStyle.SecondText
              mt={isMobile ? '53px' : '68px'}
              mb={isMobile ? '53px' : '146px'}
              style={{
                maxWidth: isMobile ? '100%' : '1136px',
                textAlign: 'center',
                whiteSpace: 'pre-line',
                lineHeight: isMobile ? '32px' : 1.5,
              }}
            >
              {t('DAO_5')}
            </LocalStyle.SecondText>
          </Col>
        </FadeInUp>
        <FadeInUp isH5={isMobile}>
          <LocalStyle.HomeDao style={{ justifyContent: 'center' }}>
            <DaoCard index={0} title={t('DAO_6')} content={t('DAO_7')} mr={!isTablet && !isMobile} />
            <DaoCard index={1} title={t('DAO_8')} content={t('DAO_9')} />
          </LocalStyle.HomeDao>
        </FadeInUp>
        <FadeInUp isH5={isMobile}>
          <LocalStyle.HomeDao style={{ justifyContent: 'center' }}>
            <DaoCard index={2} title={t('DAO_10')} content={t('DAO_11')} mr={!isTablet && !isMobile} />
            <DaoCard index={3} title={t('DAO_12')} content={t('DAO_13')} />
          </LocalStyle.HomeDao>
        </FadeInUp>
      </Col>
    )
  }

  const renderFeatures = () => {
    return (
      <Col
        style={{
          alignItems: isMobile ? 'flex-start' : 'center',
          marginTop: isMobile ? '0' : '100px',
          width: '100%',
        }}
      >
        {/* <FadeInUp>
          <Col style={{alignItems: 'center', width: isMobile ? '100vw' : 'auto'}}>
            <Title type="lines" title={t('DAO_14')} isMobile={isMobile}/>
            <LocalStyle.SecondText mt={isMobile ? "26px" : "36px"} mb={isMobile ? "50px" : "92px"} style={{width: isMobile ? '330px' : '460px', textAlign: 'center'}}>{t('DAO_15')}</LocalStyle.SecondText>
          </Col>
        </FadeInUp> */}
        {isMobile ? (
          <div style={{ width: '100vw', marginTop: '120px' }}>
            <FadeInUp isH5>
              <Col style={{ alignItems: 'flex-start' }}>
                <Title type="number" number={1} title={t('DAO_16')} />
                <LocalStyle.SecondText mt="30px" style={{ width: '100%', whiteSpace: 'pre-line', marginLeft: '0px' }}>
                  {t('DAO_17')}
                </LocalStyle.SecondText>
              </Col>
            </FadeInUp>
            <FadeInUp isH5>
              <AutoColumn justify="center">
                <LocalStyle.HomeFeatureRight src={featureRight} />
              </AutoColumn>
            </FadeInUp>

            <FadeInUp isH5>
              <Col style={{ alignItems: 'flex-start', marginTop: '100px' }}>
                <Title type="number" number={2} title={t('DAO_18')} />
                <LocalStyle.SecondText mt="25px" style={{ width: '100%', marginLeft: '0px' }}>
                  {t('DAO_19')}
                </LocalStyle.SecondText>
              </Col>
            </FadeInUp>
            <FadeInUp isH5>
              <AutoColumn justify="center">
                <LocalStyle.HomeFeatureLeft src={featureLeft} />
              </AutoColumn>
            </FadeInUp>

            <FeatureText>
              We divide the development of the entire KCS ecosystem team, management organization and governance methods
              into two phases:
            </FeatureText>
          </div>
        ) : (
          <>
            <FadeInUp>
              <RowBetween style={{ width: '1000px', justifyContent: isTablet ? 'center' : 'space-between' }}>
                <Col>
                  <Title type="number" number={1} title={t('DAO_16')} />
                  <LocalStyle.SecondText mt="40px" style={{ width: '450px', whiteSpace: 'pre-line' }}>
                    {t('DAO_17')}
                  </LocalStyle.SecondText>
                </Col>
                <LocalStyle.HomeFeatureRight src={featureRight} />
              </RowBetween>
            </FadeInUp>
            <FadeInUp>
              <RowBetween
                style={{ width: '1100px', marginTop: '95px', justifyContent: isTablet ? 'center' : 'space-between' }}
              >
                {!isTablet && <LocalStyle.HomeFeatureLeft src={featureLeft} />}
                <Col>
                  <Title type="number" number={2} title={t('DAO_18')} />
                  <LocalStyle.SecondText mt="40px" style={{ width: '500px' }}>
                    {t('DAO_19')}
                  </LocalStyle.SecondText>
                </Col>
                {isTablet && <LocalStyle.HomeFeatureLeft src={featureLeft} />}
              </RowBetween>
              <FeatureText>
                We divide the development of the entire KCS ecosystem team, management organization and governance
                methods into two phases:
              </FeatureText>
            </FadeInUp>
          </>
        )}
      </Col>
    )
  }

  const renderMedia = (index: number) => {
    return (
      <LocalStyle.HomeCommunityMediaLink href={media[index].route} target="_blank">
        <LocalStyle.HomeImgCommunity src={media[index].svg} />
        <Text color={'white'} fontSize="16px" mt="8px">
          {media[index].app}
        </Text>
      </LocalStyle.HomeCommunityMediaLink>
    )
  }

  const renderCommunity = () => {
    return (
      <FadeInUp isH5={isMobile}>
        <LocalStyle.HomeCommunityCard>
          <LocalStyle.HomeCommunityCardContainer>
            <LocalStyle.HomeCommunityCardBg />
          </LocalStyle.HomeCommunityCardContainer>
          <FadeInUp isH5={isMobile}>
            <Col style={{ alignItems: 'center', paddingTop: isMobile ? '0' : '70px' }}>
              <Title type="lines" title={t('DAO_20')} isMobile={isMobile} />
              <LocalStyle.SecondText mt={isMobile ? '15px' : '30px'} style={{ textAlign: 'center' }}>
                {t('DAO_21')}
              </LocalStyle.SecondText>
              <LocalStyle.SecondText mt="5px" style={{ textAlign: 'center' }}>
                {t('DAO_22')}
              </LocalStyle.SecondText>
            </Col>
          </FadeInUp>
          <FadeInUp isH5={isMobile}>
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
      <Helmet>
        <title>GoDao - Let Every Member of the KCS Community can Participate in KCC Decision-making</title>
        <meta
          name="description"
          content="GoDAO is a DAO built by KCC community and KCS token holders. It is the main way for community users to directly participate in the development and management of KCC."
        />
      </Helmet>
      <Container width={pageWidth}>
        <LocalStyle.HomeBackground>
          <FadeInUp isH5={isMobile}>
            <AutoColumn justify="center">
              <LocalStyle.ImgHomeTitle src={titleHome} />
              <LocalStyle.SecondText
                mt={isMobile ? '20px' : '17px'}
                style={{ width: isMobile ? '250px' : 'auto' }}
                fontSize="18px"
              >
                {t('DAO_0')}
              </LocalStyle.SecondText>
            </AutoColumn>
          </FadeInUp>
          <LocalStyle.InfoContainer>
            {InfoData(t('DAO_1'), info.address, 0)}
            {InfoData(t('DAO_2'), info.member, 1)}
            {InfoData(t('DAO_3'), info.proposal, 2)}
          </LocalStyle.InfoContainer>
        </LocalStyle.HomeBackground>
        {renderFeatures()}
        {renderDAO()}
        <AutonomousPhase />
        {renderCommunity()}
      </Container>
      <Footer transparent={true} isMobile={isMobile} />
    </>
  )
}

export default HomePage

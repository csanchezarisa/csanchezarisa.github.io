import {
  Box, 
  Flex, 
  Heading, 
  Text, 
  VStack 
} from '@chakra-ui/react';
import Title from 'components/Title/Title';
import { t } from 'i18next';
import React from 'react';
import { Badge, Card, Tab, Tabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './AboutMe.css';
import developerImage from 'assets/media/bitmoji9.png';
import personImage from 'assets/media/cristobal.jpeg';
import { BsPerson } from 'react-icons/bs';

const generateTitle = title => {
  return (
    <Heading
      as='h3' 
      fontSize={{ base: '1xl', sm: '2xl', md: '3xl', lg: '4xl' }}
    >
      {title}
    </Heading>
  )
}

const AboutMeSections = [
  {
    id: 'person',
    title: generateTitle('Cristóbal'),
    content: AboutMePersonSection(),
    image: personImage
  },
  {
    id: 'dev',
    title: generateTitle('Csanchezarisa'),
    content: AboutMeDeveloperSection(),
    image: developerImage
  }
];

function AboutMePersonSection() {
  return (
    <Card 
      border='secondary'
      bg='dark'
      text='white'
      style={{ width: '90%', height: '90%' }}
    >
      {/* <Card.Img 
        src={personImage} 
        alt="Card image"
      /> */}
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>
          <Heading
            as='h3'
            alignItems='center'
          >
            Cristóbal
            &emsp;
            <Badge bg='light' text='dark'>
              <BsPerson />
            </Badge>
          </Heading>
        </Card.Title>
        <Card.Subtitle>
          Real Person
        </Card.Subtitle>
        <Card.Body>
          Hola
        </Card.Body>
      </Card.Body>
    </Card>
  )
}

function AboutMeDeveloperSection() {
  return (
    <Text>
      Skere
    </Text>
  )
}

function AboutMe() {
  const { t } = useTranslation();

  return (
    <Flex
      bgColor={'282c34'}
      align="center"
      justify="center"
    >
      <Box
        borderRadius="lg"
        m={{ base: 2, md: 8, lg: 5 }}
        p={{ base: 2, lg: 5 }}>
          <VStack width="95vw">
            <Title 
              title={t('about_me')}
              padding={{ base: 4, md: 8, lg: 20 }}
            />
            <Tabs
              defaultActiveKey={AboutMeSections[0].id}
              justify
              style={{
                width: '90vw'
              }}
            >
              {AboutMeSections.map(section => {
                return (
                  <Tab 
                    key={section.id}
                    eventKey={section.id}
                    title={section.title}
                  >
                    <Box
                      position={'relative'}
                      height={'full'}
                      roundedBottom={'2xl'}
                      boxShadow={'2xl'}
                      width={'full'}
                      overflow={'hidden'}
                      className="gradient-background"
                    >
                      <Flex
                        backgroundImage={section.image}
                        backgroundRepeat='no-repeat'
                        backgroundPosition='right'
                        backgroundSize='contain'
                        align="center"
                        justify="center"
                        width='90vw'
                        height='60vh'
                      >
                        {section.content}
                      </Flex>
                    </Box>
                  </Tab>
                )
              })}
            </Tabs>
          </VStack>
      </Box>
    </Flex>
  )
}

export default AboutMe;
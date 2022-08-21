import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Code,
} from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from "react-bootstrap";

import './MainSection.css';
import bitmoji1 from 'assets/media/bitmoji1.png';
import bitmoji2 from 'assets/media/bitmoji2.png';
import bitmoji3 from 'assets/media/bitmoji3.png';
import bitmoji4 from 'assets/media/bitmoji4.png';
import bitmoji5 from 'assets/media/bitmoji5.png';
import bitmoji6 from 'assets/media/bitmoji6.png';
import bitmoji7 from 'assets/media/bitmoji7.png';
import bitmoji8 from 'assets/media/bitmoji8.png';
import Title from "components/Title/Title";

const bitmojis = [
  bitmoji1,
  bitmoji2,
  bitmoji3,
  bitmoji4,
  bitmoji5,
  bitmoji6,
  bitmoji7,
  bitmoji8
].sort(() => 0.5 - Math.random());

const typeAnimationSequence = [
  '<Csanchezarisa />', 800,
  '<Software_Engineer />', 1000,
  '<Developer />', 800,
  '<Coffee_Addict />', 1000,
  '<Student />', 800,
  '<Full_Stack />', 1000,
  '<Junior />', 800,
];

function TypeAnimationSubtitle() {
  return (
    <Code 
      colorScheme={'red'}
      fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
      rounded={'2xl'}
    >
      <TypeAnimation 
        sequence={typeAnimationSequence}
        cursor={true}
        repeat={Infinity}
        wrapper="div"
        speed={25}
      />
    </Code>
  );
}

function MainSection({ 
  state = null, 
  fullpageApi,
  contactSectionPosition = 1,
  workSectionPosition = 1
}) {
  const { t } = useTranslation();

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, sm: 10, md: 20, lg: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Title 
            title="Cristóbal,"
            subtitle={TypeAnimationSubtitle()}
            textAlign="start"
          />
          <Text color={'gray.300'}>
            {t('presentation')}
          </Text>
          <Stack
            spacing={{ base: 4, md: 6 }}
            direction={{ base: 'column', md: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
              onClick={() => fullpageApi.moveTo(workSectionPosition)}
            >
              {t('my_stack')}
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              px={6}
              onClick={() => fullpageApi.moveTo(contactSectionPosition)}
            >
              {t('contact_me')}
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'full'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
            className="gradient-background"
          >
            <Carousel
              pause={false}
              wrap={true}
              touch={false}
              keyboard={false}
              indicators={false}
              controls={false}
            >
              {bitmojis.map((img, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Image
                      alt={'Hero Image'}
                      align={'right'}
                      w={'100%'}
                      h={'100%'}
                      src={img}
                      loading="eager"
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default MainSection;

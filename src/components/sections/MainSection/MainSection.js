import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

import './MainSection.css';

/**
 * 
 * @returns 
 */
function getRandomBitmoji() {
  const bitmojis = [
    'https://sdk.bitmoji.com/render/panel/20020855-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2',
    'https://sdk.bitmoji.com/render/panel/20087902-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2',
    'https://sdk.bitmoji.com/render/panel/20079939-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2',
    'https://sdk.bitmoji.com/render/panel/20084663-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2',
    'https://sdk.bitmoji.com/render/panel/10221182-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2',
    'https://sdk.bitmoji.com/render/panel/20088153-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2',
    'https://sdk.bitmoji.com/render/panel/10236265-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2',
    'https://sdk.bitmoji.com/render/panel/20060362-99004936482_5-s5-v1.png?transparent=1&palette=1&scale=2'
  ]

  const randomPosition = Math.floor(
    Math.random() * (bitmojis.length)
  );

  return bitmojis[randomPosition];
}

function MainSection({ 
  state = null, 
  fullpageApi,
  contactSectionPosition = 1,
  workSectionPosition = 1
}) {
  const { t } = useTranslation();
  const typeAnimationSequence = [
    '<Csanchezarisa />', 800,
    '<Software_Engineer />', 1000,
    '<Developer />', 800,
    '<Coffee_Addict />', 1000,
    '<Student />', 800,
    '<Full_Stack />', 1000,
    '<Junior />', 800,
  ]

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            as="h1"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              color={'white'}
              position={'relative'}
              zIndex={1}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Cristóbal,
            </Text>
            <br />
            <Text 
              as={'code'} 
              color={'red.400'} 
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
            >
              <TypeAnimation 
                sequence={typeAnimationSequence}
                cursor={true}
                repeat={Infinity}
                wrapper="div"
                speed={25}
              />
              </Text>
          </Heading>
          <Text color={'gray.300'}>
            {t('presentation')}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
              onClick={() => fullpageApi.moveTo(workSectionPosition)}
            >
              {t('work')}
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
            <Image
              alt={'Hero Image'}
              align={'right'}
              w={'100%'}
              h={'100%'}
              src={getRandomBitmoji()}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default MainSection;

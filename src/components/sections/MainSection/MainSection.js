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

function MainSection({ 
  state = null, 
  fullpageApi,
  contactSectionPosition = 1
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
              _hover={{ bg: 'red.500' }}>
              Get started
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
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default MainSection;

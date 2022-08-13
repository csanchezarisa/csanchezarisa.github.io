import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

import './Footer.css';

function Footer({ sections = [], state = null, fullpageApi }) {
  return (
    <Box
      bg={useColorModeValue('#212529', '#212529')}
      color={useColorModeValue('white', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Stack direction={'row'} verticalAlign="center">
          <Image 
            src="https://www.gravatar.com/avatar/9fe92a893b3879a72ea0c451d504a3fb?s=30"
            className="logo d-inline-block align-top"
            alt="csanchezarisa logo"
          />
          <Text
            as="strong"
            className="logo"
          >
            CSANCHEZARISA
          </Text>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          {sections.map(({ id, name }, index) => {
            return (
              <Link onClick={() => fullpageApi.moveTo(index + 2)} key={id}>{name}</Link>
            )
          })}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'7xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'left', md: 'space-between' }}
          align={{ base: 'left', md: 'left' }}>
          <Text>&nbsp;</Text>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;

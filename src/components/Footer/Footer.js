import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Image,
  color,
} from '@chakra-ui/react';
import { Navbar, Nav } from 'react-bootstrap';

import './Footer.css';

function Footer({ sections = [], state = null, fullpageApi, activeSection = '' }) {
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
        <Stack 
          direction={'row'} 
          verticalAlign="center" 
          onClick={() => fullpageApi.moveTo(1)}
          cursor="pointer"
        >
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
        <Navbar 
          collapseOnSelect 
          bg="dark" 
          variant="dark" 
          id="footer-menu"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" id="main-menu">
                {sections.map(({ id, name }, index) => {
                  return (
                    <Nav.Link 
                      onClick={() => fullpageApi.moveTo(index + 2)} 
                      key={id}
                      className={activeSection === id ? 'active' : ''}
                    >
                      {name}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
          <Text>
            Cristóbal Sánchez Arisa
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;

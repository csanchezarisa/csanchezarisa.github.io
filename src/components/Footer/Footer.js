import {
  Box,
  Container,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import cookies from 'js-cookie';
import { useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import './Footer.css';
import languages from '../../config/languages';

function Footer({ 
  sections = [], 
  state = null, 
  fullpageApi, 
  activeSection = '' 
}) {
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'es';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);

  useEffect(() => { }, [currentLanguage])

  return (
    <Box
      bg={'#212529'}
      color={'white'}>
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
            verticalAlign="center"
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

            {/* NAV ITEMS */}
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

              {/* CHANGE LANG */}
              <Nav>
                <NavDropdown
                  title={t('language')}
                  id="collasible-nav-dropdown"
                  align="end"
                  drop="up"
                  menuVariant="dark"
                >
                  <NavDropdown.Header>{t('language')}</NavDropdown.Header>
                  
                  {languages.map(({ code, name, country_code }) => (
                    <NavDropdown.Item
                      key={code}
                      onClick={() => changeLanguage(code)}
                      disabled={code === currentLanguageCode}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                      >
                      </span>
                      {name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}>
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

import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { changeLanguage } from 'i18next';
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';

import './MainNavBar.css'

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es'
  }
]

function MainNavBar() {
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'es';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);

  useEffect(() => { }, [currentLanguage])

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      bg="dark" 
      variant="dark" 
      sticky="top"
      style={{ opacity: 0.8 }}
      id="main-menu"
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="/">
          <img
            src="https://www.gravatar.com/avatar/9fe92a893b3879a72ea0c451d504a3fb?s=30"
            className="logo d-inline-block align-top"
            alt="csanchezarisa logo"
          />
          <strong id="logo-username" className="logo">CSANCHEZARISA</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* NAV ITEMS */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#item1">Item 1</Nav.Link>
            <Nav.Link href="#item2">Item 2</Nav.Link>
          </Nav>

          {/* CHANGE LANG */}
          <Nav>
            <NavDropdown
              title={t('language')}
              id="collasible-nav-dropdown"
              align="end"
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
  )
}

export default MainNavBar

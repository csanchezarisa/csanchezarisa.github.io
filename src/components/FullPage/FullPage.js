import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useTranslation } from "react-i18next";

import './FullPage.css';
import MainNavBar from '../MainNavBar/MainNavBar';
import MainSection from '../sections/MainSection/MainSection';
import ContactSection from '../sections/ContactSection/ContactSection';
// import MyStack from '../sections/MyStack/MyStack';
import Footer from '../Footer/Footer';
import { SlideFade } from '@chakra-ui/react';


function FullPage() {
  const { t } = useTranslation();

  const [isLoaded, changeIsLoaded] = useState(false);
  if(isLoaded) {
    setTimeout(() => changeIsLoaded(true), 100)
  }

  const [activeSection, changeActiveSection] = useState('main')

  const Sections = [
    { Section: MainSection, id: 'main', name: 'Hero' },
    // { Section: MyStack, id: 'stack', name: 'My Stack' },
    { Section: ContactSection, id: 'contact', name: t('contact_me') },
  ]

  return (
    <SlideFade
      in={!isLoaded}
      unmountOnExit={true}
    >
      <ReactFullpage
        licenseKey="gplv3-license"
        scrollingSpeed={300}
        sectionsColor={'#282c34,'.repeat(Sections.length + 2).split(',')}
        normalScrollElements='.footer'
        fixedElements='.footer'
        afterLoad={(_origin, destination) => changeActiveSection(destination.item.id)}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* Navbar */}
              <nav id="menu" className='section fp-auto-height'>
                <MainNavBar 
                  sections={Sections} 
                  fullpageApi={fullpageApi} 
                  activeSection={activeSection} 
                />
              </nav>

              {/* Sections */}
              {Sections.map(({Section, id}) => {
                return (
                  <div className="section" key={id} id={id}>
                    <Section state={state} fullpageApi={fullpageApi} />
                  </div>
                )
              })}

              {/* Footer */}
              <footer id="footer" className="section fp-auto-height">
                <Footer 
                  sections={Sections} 
                  fullpageApi={fullpageApi} 
                  activeSection={activeSection} 
                />
              </footer>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </SlideFade>
  )
};

export default FullPage;

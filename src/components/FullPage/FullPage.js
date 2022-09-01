import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useTranslation } from "react-i18next";
import { SlideFade } from '@chakra-ui/react';

import './FullPage.css';
import MainNavBar from 'components/MainNavBar/MainNavBar';
import MainSection from 'components/sections/MainSection/MainSection';
import Work from 'components/sections/Work/Work';
import MyStack from 'components/sections/MyStack/MyStack';
import ContactSection from 'components/sections/ContactSection/ContactSection';
import Footer from 'components/Footer/Footer';
import { fullpageApiLicense } from 'config/licenses';
import FAB from 'components/FAB/FAB';


function FullPage() {
  const { t } = useTranslation();

  const [fullpageApiConst, changeFullpageApiConst] = useState();

  const [isLoaded, changeIsLoaded] = useState(false);
  if(isLoaded) {
    setTimeout(() => changeIsLoaded(true), 100)
  }

  const [activeSection, changeActiveSection] = useState('main')

  const Sections = [
    { Section: MainSection, id: 'main', name: 'Hero' },
    { Section: Work, id: 'work', name: t('work') },
    { Section: MyStack, id: 'stack', name: t('my_stack') },
    { Section: ContactSection, id: 'contact', name: t('contact_me') },
  ]

  return (
    <SlideFade
      in={!isLoaded}
      unmountOnExit={true}
    >

      {/* FAB button to go to top */}
      <FAB 
        fullpageApi={fullpageApiConst} 
        activeSection={activeSection} 
      />

      {/* Fullpage application, with all sections and menus */}
      <ReactFullpage
        licenseKey={fullpageApiLicense}
        scrollingSpeed={300}
        sectionsColor={'#282c34,'.repeat(Sections.length + 2).split(',')}
        normalScrollElements={window.innerWidth <= 640 ? '.overflow-auto' : ''}
        afterLoad={(_origin, destination) => changeActiveSection(destination.item.id)}

        render={({ state, fullpageApi }) => {
          changeFullpageApiConst(fullpageApi);

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
                    <Section 
                      state={state} 
                      fullpageApi={fullpageApi} 
                      contactSectionPosition={Sections.findIndex(s => s.id === 'contact') + 2} 
                      workSectionPosition={Sections.findIndex(s => s.id === 'stack') + 2} 
                    />
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

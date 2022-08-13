import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import './FullPage.css';
import MainSection from '../sections/MainSection';
import ContactSection from '../sections/ContactSection';
import { SlideFade } from '@chakra-ui/react';


function FullPage() {
  const [isLoaded, changeIsLoaded] = useState(false);
  if(isLoaded) {
    setTimeout(() => changeIsLoaded(true), 100)
  }

  const Sections = [
    { Section: MainSection, id: 'main' },
    { Section: ContactSection, id: 'contact' }
  ]

  return (
    <SlideFade
      in={!isLoaded}
      unmountOnExit={true}
    >
      <ReactFullpage
        licenseKey="gplv3-license"
        scrollingSpeed={500}
        sectionsColor={['#282c34']}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {Sections.map(({Section, id}) => {
                return (
                  <div className="section" key={id}>
                    <Section state={state} fullpageApi={fullpageApi} />
                  </div>
                )
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </SlideFade>
  )
};

export default FullPage;

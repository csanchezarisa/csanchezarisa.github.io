import React, { Suspense, useState } from 'react';
import { ChakraProvider, Fade } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import CursorImage from 'assets/media/cursor.png';
import PointerImage from 'assets/media/pointer.png';
import TextImage from 'assets/media/text.png';

import './App.css';
import Loading from 'components/Loading/Loading';
import CustomCursor from 'components/CustomCursor/CustomCursor';
const FullPage = React.lazy(() => import('components/FullPage/FullPage'));

function App() {
  const [isLoaded, changeIsLoaded] = useState(false);
  if(isLoaded) {
    setTimeout(() => changeIsLoaded(true), 100);
  }

  return (
    <Fade
      in={!isLoaded}
      unmountOnExit={true}
    >
      <ChakraProvider >
        {
          !isMobile && 
          <CustomCursor 
            defaultImg={CursorImage} 
            pointerImg={PointerImage} 
            textImg={TextImage} 
          />
        }
        <div className="App">
          <Suspense fallback={<Loading />}>
            <FullPage />
          </Suspense>
        </div>
      </ChakraProvider>
    </Fade>
  );
}

export default App;

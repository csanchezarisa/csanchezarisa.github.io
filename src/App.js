import React, { Suspense, useState } from 'react';
import { ChakraProvider, Fade } from '@chakra-ui/react';

import './App.css';
import Loading from 'components/Loading/Loading';
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

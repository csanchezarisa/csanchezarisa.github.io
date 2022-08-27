import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-bootstrap';
import { FiChevronUp } from 'react-icons/fi';

import './FAB.css';

/**
 * 
 * @param {{
 *  fullpageApi: import('@fullpage/react-fullpage').fullpageApi,
 *  activeSection: string
 * }} param0 
 * @returns 
 */
function FAB({ fullpageApi, activeSection }) {
  const isActiveSectionMenu = ['menu', 'footer'].includes(activeSection);

  return (
    <Fade 
      in={!isActiveSectionMenu}
      unmountOnExit={true}
    >
      <IconButton 
        className='fab-btn'
        onClick={() => fullpageApi.moveTo(1)}
        aria-label='move to top'
        colorScheme={'red'}
        bg='red.400'
        _hover={{ bg: 'red.500' }}
        icon={<FiChevronUp />}
        isRound={true}
        size='lg'
      />
    </Fade>
  )
}

export default FAB;
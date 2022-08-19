import { 
  Heading, 
  Text, 
  useBreakpointValue 
} from '@chakra-ui/react';
import React from 'react';

function Title({ 
  title = 'Title component', 
  subtitle = null,
  padding = null
}) {
  const breakpointValue = useBreakpointValue({ base: '20%', md: '30%' });

  return (
    <Heading
    as="h1"
    lineHeight={1.1}
    fontWeight={600}
    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
    color={'white'}
    pb={padding}
  >
    {title && (
      <Text
      as={'span'}
      color={'white'}
      position={'relative'}
      zIndex={1}
      _after={{
        content: "''",
        width: 'full',
        height: breakpointValue,
        position: 'absolute',
        bottom: 1,
        left: 0,
        bg: 'red.400',
        zIndex: -1,
      }}
      >
      {title}
      </Text>
    )}
    <br />
    {subtitle && (
      <Text 
        as={'code'} 
        color={'red.400'} 
        fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
      >
        {subtitle}
      </Text>
    )}
  </Heading>
  )
}

export default Title;
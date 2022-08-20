import { 
  Box, 
  Button, 
  Collapse, 
  Container, 
  HStack, 
  Stack, 
  StackDivider, 
  Text,
  Tooltip,
  VStack,  
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { 
  FiChevronRight, 
  FiCloud, 
  FiDatabase, 
  FiMonitor, 
  FiServer 
} from 'react-icons/fi';

import './MyStack.css';
import Title from "components/Title/Title";

const stacks = [
  {
    id: 'backend',
    title: 'backend',
    icon: (<FiServer />)
  },
  {
    id: 'frontend',
    title: 'frontend',
    icon: (<FiMonitor />)
  },
  {
    id: 'database',
    title: 'database',
    icon: (<FiDatabase />)
  },
  {
    id: 'devops',
    title: 'devops_and_cloud',
    icon: (<FiCloud />)
  }
];

function CollapsedStack(openStack) {
  return (
    <Collapse in={openStack.open} animateOpacity>
      <Box
        p='40px'
        color='white'
        mt='4'
        bg='teal.500'
        rounded='md'
        shadow='md'
      >
        Hola que tal
      </Box>
    </Collapse>
  );
}

function MyStack() {
  const { t } = useTranslation();

  const [openStack, changeOpenStack] = useState({ open: false, stack: null })

  return (
    <Container maxW={'full'} textAlign="center">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Title title={t('my_stack')} />
          <Text color={'gray.300'}>
            {t('presentation')}
          </Text>
          <Box
            bg={'#343a40'}
            borderRadius="lg"
            p={8}
            color={'gray.700'}
            shadow="base"
            opacity={0.8}
          >
            <HStack
              flex={1} 
              spacing={{ base: 5, md: 10 }}
            >
              <VStack 
                flex={1} 
                spacing={{ base: 5, md: 10 }}
                divider={<StackDivider />}
              >
                {stacks.map(stack => {
                  return (
                    <>
                      <Tooltip
                        label={t('click_stack_btn').replace('{key}', t(stack.title))}
                        closeOnClick={true}
                        hasArrow='true'
                        placement='auto'
                        bg='gray.200'
                        color='#1A202C'
                      >
                        <Button
                          colorScheme='red'
                          size={{ base: 'sm', md: 'lg' }}
                          bg={'red.400'}
                          _hover={{ bg: 'red.500' }}
                          width='100%'
                          leftIcon={stack.icon}
                          rightIcon={<FiChevronRight />}
                          onClick={() => changeOpenStack({ 
                            open: openStack.stack !== stack || !openStack.open, 
                            stack: stack 
                          })}
                        >
                          {t(stack.title)}
                        </Button>
                      </Tooltip>
                    </>
                  );
                })}
              </VStack>
              {openStack.open && CollapsedStack(openStack)}
            </HStack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default MyStack;
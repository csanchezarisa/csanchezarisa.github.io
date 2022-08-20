import { 
  Box, 
  Button, 
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
import { Card, Col, Collapse, Row } from "react-bootstrap";

import './MyStack.css';
import Title from "components/Title/Title";
import { 
  AngularButton,
  BootstrapButton,
  DjangoButton, 
  ElasticsearchButton, 
  ExpressButton, 
  FlaskButton, 
  GraphDbButton, 
  KibanaButton, 
  LaravelButton, 
  MicrosoftSqlButton, 
  MongoDbButton, 
  MySqlButton, 
  PostgreSqlButton, 
  PugButton, 
  ReactButton, 
  SpringButton 
} from "./TechButton/TechButton";

const stacks = [
  {
    id: 'backend',
    title: 'backend',
    icon: (<FiServer />),
    items: [
      <SpringButton />,
      <FlaskButton />,
      <DjangoButton />,
      <ExpressButton />,
      <LaravelButton />,
    ]
  },
  {
    id: 'frontend',
    title: 'frontend',
    icon: (<FiMonitor />),
    items: [
      <AngularButton />,
      <ReactButton />,
      <BootstrapButton />,
      <PugButton />,
    ]
  },
  {
    id: 'database',
    title: 'database',
    icon: (<FiDatabase />),
    items: [
      <MySqlButton />,
      <MicrosoftSqlButton />,
      <PostgreSqlButton />,
      <MongoDbButton />,
      <GraphDbButton />,
      <ElasticsearchButton />,
      <KibanaButton />,
    ]
  },
  {
    id: 'devops',
    title: 'devops_and_cloud',
    icon: (<FiCloud />),
    items: []
  }
];

function StackInfo(stack, t) {
  return (
      <Box
        position={'relative'}
        height={'full'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'full'}
        overflow={'hidden'}
        key={stack.id}
        id={`stack-${stack.id}-info`}
      >
        <Card className="stack-gradient-background">
          <Card.Body>
            <Card.Title>
              {`${t(stack.title)} stack`} 
            </Card.Title>
            <Row>
              {stack.items.map((item, index) => {
                return (
                  <Col key={index}>
                    {item}
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      </Box>
  );
}

function MyStack() {
  const { t } = useTranslation();

  const [openStack, changeOpenStack] = useState({ open: false, stack: stacks[0] });

  return (
    <Container maxW={'full'} textAlign="center">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>

          {/* TITLE */}
          <Title title={t('my_stack')} />

          {/* PRESENTATION */}
          <Text color={'gray.300'}>
            {t('my_stack_presentation')}
          </Text>

          {/* TECH STACK BOX */}
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
              height='full'
            >
              {/* TECH STACK CATEGORIES */}
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

              {/* TECH STACK INFO */}
              <Collapse 
                in={openStack.open} 
                dimension='width'
                mountOnEnter='true'
                unmountOnExit='true'
                style={{
                  height: '100%'
                }}
              >
                {StackInfo(openStack.stack, t)}
              </Collapse>
            </HStack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default MyStack;

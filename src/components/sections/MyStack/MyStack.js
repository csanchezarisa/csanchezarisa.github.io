import { 
  Box, 
  Button, 
  Container, 
  Heading, 
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
  AWSButton,
  AzureButton,
  BootstrapButton,
  DjangoButton, 
  DockerButton, 
  ElasticsearchButton, 
  ExpressButton, 
  FlaskButton, 
  GithubactionsButton, 
  GraphDbButton, 
  JenkinsButton, 
  KibanaButton, 
  KubernetesButton, 
  LaravelButton, 
  MicrosoftSqlButton, 
  MongoDbButton, 
  MySqlButton, 
  PostgreSqlButton, 
  PugButton, 
  ReactButton, 
  SonarqubeButton, 
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
    items: [
      <AWSButton />,
      <AzureButton />,
      <DockerButton />,
      <KubernetesButton />,
      <GithubactionsButton />,
      <JenkinsButton />,
      <SonarqubeButton />
    ]
  }
];

/**
 * Right column that displays stack
 * info
 * @param {*} stack Stack to display
 * @param {*} t translator
 * @returns Box component
 */
function StackInfo(stack, t) {
  return (
      <Box
        position={'relative'}
        maxH={{ base: '60vh', sm: '40vh'}}
        height={'full'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'full'}
        overflow={'hidden'}
        key={stack.id}
        id={`stack-${stack.id}-info`}
      >
        <Card className="stack-gradient-background overflow-auto">
          <Card.Body>

            {/* CARD TITLE */}
            <Card.Title>
              <Heading
                as='h3'
                fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
              >
                {`${t(stack.title)} stack`} 
              </Heading>
            </Card.Title>

            {/* CARD BODY */}
            {/* TECH BUTTONS */}
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
    <Container maxW={'7xl'} textAlign="center">
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
                {stacks.map((stack, index) => {
                  return (
                    <Tooltip
                      key={index}
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
                  );
                })}
              </VStack>

              {/* TECH STACK INFO */}
              <Collapse 
                in={openStack.open} 
                dimension='width'
                mountOnEnter={true}
                unmountOnExit={true}
                style={{
                  height: '100%',
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

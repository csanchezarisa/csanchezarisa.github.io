import { 
  Button,
  Heading,
  Icon,
  IconButton, 
  Link, 
  Popover, 
  PopoverArrow, 
  PopoverBody, 
  PopoverCloseButton, 
  PopoverContent, 
  PopoverFooter, 
  PopoverHeader, 
  PopoverTrigger, 
  Text, 
  Tooltip 
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { 
  SiAmazonaws,
  SiAngular, 
  SiBootstrap, 
  SiDjango, 
  SiDocker, 
  SiElasticsearch, 
  SiExpress, 
  SiFlask, 
  SiGithubactions, 
  SiJava, 
  SiJavascript, 
  SiJenkins, 
  SiKibana, 
  SiKubernetes, 
  SiLaravel, 
  SiMicrosoftazure, 
  SiMicrosoftsqlserver, 
  SiMongodb, 
  SiMysql, 
  SiNodedotjs, 
  SiPhp, 
  SiPostgresql, 
  SiPug, 
  SiPython, 
  SiReact, 
  SiSpring, 
  SiTypescript
} from 'react-icons/si';

const GraphDbSvg = ({ height = '18px', width = '18px' }) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 103.000000 103.000000"
    preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
        <path d="M434 1016 c-107 -47 -98 -203 14 -237 79 -23 162 39 162 120 0 48 -33 99 -75 117 -42 17 -61 17 -101 0z"/>
        <path d="M627 739 c-48 -28 -40 -107 12 -129 76 -31 139 69 75 119 -29 23 -59 26 -87 10z"/>
        <path d="M780 562 c-40 -21 -80 -89 -80 -136 0 -49 36 -110 79 -134 75 -42 161 -22 215 51 28 38 28 126 0 164 -53 71 -141 93 -214 55z"/>
        <path d="M545 338 c-49 -26 -58 -69 -24 -112 22 -27 56 -34 89 -16 50 27 49 100 0 125 -34 18 -39 18 -65 3z"/>
        <path d="M360 215 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16 -54 -2z"/>
        <path d="M100 167 c-52 -26 -62 -104 -19 -143 33 -30 96 -25 125 9 33 39 31 81 -5 118 -32 31 -61 36 -101 16z"/>
      </g>
    </svg>
  );
};

const openUrlInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function TechButton({
  label,
  colorScheme = 'whiteAlpha',
  footerColorScheme = 'blackAlpha',
  color = 'black',
  bgHover = 'whiteAlpha.600',
  bgActive = 'whiteAlpha.700',
  footerBgHover = bgHover,
  footerBgActive = bgActive,
  icon,
  size = { base: 'lg' },
  description = ' ',
  t,
  infoUrl = 'https://www.google.com/'
}) {
  return (
    <>
      <Tooltip
        label={label}
        closeOnClick={true}
        hasArrow='true'
        placement='top'
        bg='gray.200'
        color='#1A202C'
      >
        <div>
          <Popover
            computePositionOnMount={true}
            flip={true}
            preventOverflow={true}
            strategy={'fixed'}
            trigger={'click'}
            isLazy={true}
          >
            <PopoverTrigger>

              {/* ICON BUTTON */}
              <IconButton
                color={color}
                size={size}
                aria-label={label}
                icon={icon}
                colorScheme={colorScheme}
                _hover={{ bg: bgHover }}
                _active={{ bg: bgActive }}
                m={1}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />

              {/* POPOVER HEADER */}
              <PopoverHeader color={'#1A202C'}>
                <Heading 
                  as={'h4'}
                  fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
                >
                  {label}
                </Heading>
              </PopoverHeader>

              {/* POPOVER BODY */}
              <PopoverBody color={'#1A202C'}>
                {description}
              </PopoverBody>

              {/* POPOVER FOOTER */}
              <PopoverFooter 
                display='flex' 
                justifyContent='flex-end'
              >
                <Button
                  color={color}
                  size={size}
                  aria-label={label}
                  leftIcon={icon}
                  colorScheme={footerColorScheme}
                  _hover={{ bg: footerBgHover }}
                  _active={{ bg: footerBgActive }}
                  m={1}
                  onClick={() => openUrlInNewTab(infoUrl)}
                >
                  {t('info')}
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </div>
      </Tooltip>
    </>
  );
};

export const SpringButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Spring'
      icon={<SiSpring />}
      bg='rgb(109, 179, 63)'
      bgHover='rgba(109, 179, 63, 0.48)'
      bgActive='rgba(109, 179, 63, 0.64)'
      infoUrl='https://spring.io/'
    />
  )
};

export const LaravelButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('laravel_description').replace('PHP', '')}
      <Button
        leftIcon={<SiPhp />}
        bg='rgba(119, 123, 179, 0.36)'
        _hover={{ bg: 'rgba(119, 123, 179, 0.48)' }}
        _active={{ bg: 'rgba(119, 123, 179, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.php.net/')}
      >
        PHP
      </Button>
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Laravel' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Laravel'
      icon={<SiLaravel />}
      bgHover='rgba(255, 45, 32, 0.48)'
      bgActive='rgba(255, 45, 32, 0.64)'
      infoUrl='https://laravel.com/'
    />
  );
};

export const DjangoButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('django_description').split('Python')[0]}
      <Button
        leftIcon={<SiPython />}
        bg='rgba(48, 105, 152, 0.36)'
        _hover={{ bg: 'rgba(48, 105, 152, 0.48)' }}
        _active={{ bg: 'rgba(48, 105, 152, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.python.org/')}
      >
        Python
      </Button>
      {t('django_description').split('Python')[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Django_(web_framework)' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Django'
      icon={<SiDjango />}
      bgHover='rgba(9, 46, 32, 0.48)'
      bgActive='rgba(9, 46, 32, 0.64)'
      infoUrl='https://www.djangoproject.com/'
    />
  );
};

export const FlaskButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('flask_description').split('Python')[0]}
      <Button
        leftIcon={<SiPython />}
        bg='rgba(48, 105, 152, 0.36)'
        _hover={{ bg: 'rgba(48, 105, 152, 0.48)' }}
        _active={{ bg: 'rgba(48, 105, 152, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.python.org/')}
      >
        Python
      </Button>
      {t('flask_description').split('Python')[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Flask_(web_framework)' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Flask'
      icon={<SiFlask />}
      bgHover='rgba(0, 0, 0, 0.48)'
      bgActive='rgba(0, 0, 0, 0.64)'
      infoUrl='https://flask.palletsprojects.com/'
    />
  );
};

export const ExpressButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('expressjs_description').split('Node.js')[0]}
      <Button
        leftIcon={<SiNodedotjs />}
        bg='rgba(104, 160, 99, 0.36)'
        _hover={{ bg: 'rgba(104, 160, 99, 0.48)' }}
        _active={{ bg: 'rgba(104, 160, 99, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://nodejs.org/')}
      >
        Node.js
      </Button>
      {t('expressjs_description').split('Node.js')[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Express.js' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Express.js'
      icon={<SiExpress />}
      bgHover='rgba(64, 77, 89, 0.48)'
      bgActive='rgba(64, 77, 89, 0.64)'
      infoUrl='https://expressjs.com/'
    />
  );
};

export const AngularButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('angular_description').split('TypeScript')[0]}
      <Button
        leftIcon={<SiTypescript />}
        bg='rgba(0, 122, 204, 0.36)'
        _hover={{ bg: 'rgba(0, 122, 204, 0.48)' }}
        _active={{ bg: 'rgba(0, 122, 204, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.typescriptlang.org/')}
      >
        TypeScript
      </Button>
      {t('angular_description').split('TypeScript')[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Angular_(web_framework)' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Angular'
      icon={<SiAngular />}
      bgHover='rgba(221, 0, 49, 0.48)'
      bgActive='rgba(221, 0, 49, 0.64)'
      infoUrl='https://angular.io/'
    />
  );
};

export const ReactButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('react_description').split('JavaScript')[0]}
      <Button
        leftIcon={<SiJavascript />}
        bg='rgba(240, 219, 79, 0.36)'
        _hover={{ bg: 'rgba(240, 219, 79, 0.48)' }}
        _active={{ bg: 'rgba(240, 219, 79, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://developer.mozilla.org/docs/Web/JavaScript')}
      >
        JavaScript
      </Button>
      {t('react_description').split('JavaScript')[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='React'
      icon={<SiReact />}
      bgHover='rgba(97, 219, 251, 0.48)'
      bgActive='rgba(97, 219, 251, 0.64)'
      infoUrl='https://reactjs.org/'
    />
  );
};

export const BootstrapButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('bootstrap_description')}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Bootstrap'
      icon={<SiBootstrap />}
      bgHover='rgba(86, 61, 124, 0.48)'
      bgActive='rgba(86, 61, 124, 0.64)'
      infoUrl='https://getbootstrap.com/'
    />
  );
};

export const PugButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>

      {/* DESCRIPTION */}
      {t('pug_description').split('express.js')[0]}
      &nbsp;
      <Button
        leftIcon={<SiExpress />}
        bg='rgba(64, 77, 89, 0.36)'
        _hover={{ bg: 'rgba(64, 77, 89, 0.48)' }}
        _active={{ bg: 'rgba(64, 77, 89, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://expressjs.com/')}
      >
        Express.js
      </Button>
      {t('pug_description').split('express.js')[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href='https://expressjs.com/en/resources/template-engines.html' isExternal>
          expressjs.com <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Pug'
      icon={<SiPug />}
      bgHover='rgba(255, 255, 255, 0.48)'
      bgActive='rgba(255, 255, 255, 0.64)'
      infoUrl='https://pugjs.org/'
    />
  );
};

export const MySqlButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='MySQL'
      icon={<SiMysql />}
      bgHover='rgba(0, 117, 143, 0.48)'
      bgActive='rgba(0, 117, 143, 0.64)'
    />
  );
};

export const MicrosoftSqlButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Microsoft SQL Server'
      icon={<SiMicrosoftsqlserver />}
      bgHover='rgba(0, 164, 239, 0.48)'
      bgActive='rgba(0, 164, 239, 0.64)'
    />
  );
};

export const PostgreSqlButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='PostgreSQL'
      icon={<SiPostgresql />}
      bgHover='rgba(51, 103, 145, 0.48)'
      bgActive='rgba(51, 103, 145, 0.64)'
    />
  );
};

export const MongoDbButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='MongoDB'
      icon={<SiMongodb />}
      bgHover='rgba(77, 179, 61, 0.48)'
      bgActive='rgba(77, 179, 61, 0.64)'
    />
  );
};

export const GraphDbButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='GraphDB'
      icon={<GraphDbSvg />}
      bgHover='rgba(240, 78, 35, 0.48)'
      bgActive='rgba(240, 78, 35, 0.64)'
    />
  );
};

export const ElasticsearchButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Elasticsearch'
      icon={<SiElasticsearch />}
      bgHover='rgba(64, 118, 158, 0.48)'
      bgActive='rgba(64, 118, 158, 0.64)'
    />
  );
};

export const KibanaButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Kibana'
      icon={<SiKibana />}
      bgHover='rgba(0, 85, 113, 0.48)'
      bgActive='rgba(0, 85, 113, 0.64)'
    />
  );
};

export const AWSButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Amazon Web Services'
      icon={<SiAmazonaws />}
      bgHover='rgba(255, 153, 0, 0.48)'
      bgActive='rgba(255, 153, 0, 0.64)'
    />
  );
};

export const AzureButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Microsoft Azure'
      icon={<SiMicrosoftazure />}
      bgHover='rgba(0, 127, 255, 0.48)'
      bgActive='rgba(0, 127, 255, 0.64)'
    />
  );
};

export const DockerButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Docker'
      icon={<SiDocker />}
      bgHover='rgba(13, 183, 237, 0.48)'
      bgActive='rgba(13, 183, 237, 0.64)'
    />
  );
};

export const KubernetesButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Kubernetes'
      icon={<SiKubernetes />}
      bgHover='rgba(50, 108, 229, 0.48)'
      bgActive='rgba(50, 108, 229, 0.64)'
    />
  );
};


export const GithubactionsButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Github Actions'
      icon={<SiGithubactions />}
      bgHover='rgba(26, 137, 255, 0.48)'
      bgActive='rgba(26, 137, 255, 0.64)'
    />
  );
};

export const JenkinsButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {t('spring_description')}
      &nbsp;
      <Button
        leftIcon={<SiJava />}
        bg='rgba(248, 152, 32, 0.36)'
        _hover={{ bg: 'rgba(248, 152, 32, 0.48)' }}
        _active={{ bg: 'rgba(248, 152, 32, 0.64)' }}
        m={1}
        onClick={() => openUrlInNewTab('https://www.java.com/')}
      >
        {t('java_platform')}
      </Button>
      <br />
      <cite>
        <Link href='https://en.wikipedia.org/wiki/Spring_Framework' isExternal>
          Wikipedia <Icon as={FiExternalLink} mx='2px' />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label='Jenkins'
      icon={<SiJenkins />}
      bgHover='rgba(211, 56, 52, 0.48)'
      bgActive='rgba(211, 56, 52, 0.64)'
    />
  );
};

import { 
  IconButton, 
  Tooltip 
} from '@chakra-ui/react';
import React from 'react';
import { 
  SiAngular, 
  SiBootstrap, 
  SiDjango, 
  SiElasticsearch, 
  SiExpress, 
  SiFlask, 
  SiKibana, 
  SiLaravel, 
  SiMicrosoftsqlserver, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiPug, 
  SiReact, 
  SiSpring 
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
}

function TechButton({ 
  label,
  colorScheme = 'whiteAlpha',
  color = 'black',
  bgHover = 'whiteAlpha.600',
  bgActive = 'whiteAlpha.700',
  icon,
  size = { base: 'lg' }
}) {
  return (
    <Tooltip
      label={label}
      closeOnClick={true}
      hasArrow='true'
      placement='auto'
      bg='gray.200'
      color='#1A202C'
    >
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
    </Tooltip>
  )
}

export const SpringButton = () => (
  <TechButton
    label='Spring'
    icon={<SiSpring />}
    bgHover='rgba(109, 179, 63, 0.48)'
    bgActive='rgba(109, 179, 63, 0.64)'
  />
);

export const LaravelButton = () => (
  <TechButton
    label='Laravel'
    icon={<SiLaravel />}
    bgHover='rgba(255, 45, 32, 0.48)'
    bgActive='rgba(255, 45, 32, 0.64)'
  />
);

export const DjangoButton = () => (
  <TechButton
    label='Django'
    icon={<SiDjango />}
    bgHover='rgba(9, 46, 32, 0.48)'
    bgActive='rgba(9, 46, 32, 0.64)'
  />
);

export const FlaskButton = () => (
  <TechButton
    label='Flask'
    icon={<SiFlask />}
    bgHover='rgba(0, 0, 0, 0.48)'
    bgActive='rgba(0, 0, 0, 0.64)'
  />
);

export const ExpressButton = () => (
  <TechButton
    label='Express.js'
    icon={<SiExpress />}
    bgHover='rgba(64, 77, 89, 0.48)'
    bgActive='rgba(64, 77, 89, 0.64)'
  />
);

export const AngularButton = () => (
  <TechButton
    label='Angular'
    icon={<SiAngular />}
    bgHover='rgba(221, 0, 49, 0.48)'
    bgActive='rgba(221, 0, 49, 0.64)'
  />
);

export const ReactButton = () => (
  <TechButton
    label='React'
    icon={<SiReact />}
    bgHover='rgba(97, 219, 251, 0.48)'
    bgActive='rgba(97, 219, 251, 0.64)'
  />
);

export const BootstrapButton = () => (
  <TechButton
    label='Bootstrap'
    icon={<SiBootstrap />}
    bgHover='rgba(86, 61, 124, 0.48)'
    bgActive='rgba(86, 61, 124, 0.64)'
  />
);

export const PugButton = () => (
  <TechButton
    label='Pug'
    icon={<SiPug />}
    bgHover='rgba(255, 255, 255, 0.48)'
    bgActive='rgba(255, 255, 255, 0.64)'
  />
);

export const MySqlButton = () => (
  <TechButton
    label='MySQL'
    icon={<SiMysql />}
    bgHover='rgba(0, 117, 143, 0.48)'
    bgActive='rgba(0, 117, 143, 0.64)'
  />
);

export const MicrosoftSqlButton = () => (
  <TechButton
    label='Microsoft SQL Server'
    icon={<SiMicrosoftsqlserver />}
    bgHover='rgba(0, 164, 239, 0.48)'
    bgActive='rgba(0, 164, 239, 0.64)'
  />
);

export const PostgreSqlButton = () => (
  <TechButton
    label='PostgreSQL'
    icon={<SiPostgresql />}
    bgHover='rgba(51, 103, 145, 0.48)'
    bgActive='rgba(51, 103, 145, 0.64)'
  />
);

export const MongoDbButton = () => (
  <TechButton
    label='MongoDB'
    icon={<SiMongodb />}
    bgHover='rgba(77, 179, 61, 0.48)'
    bgActive='rgba(77, 179, 61, 0.64)'
  />
);

export const GraphDbButton = () => (
  <TechButton
    label='GraphDB'
    icon={<GraphDbSvg />}
    bgHover='rgba(240, 78, 35, 0.48)'
    bgActive='rgba(240, 78, 35, 0.64)'
  />
);

export const ElasticsearchButton = () => (
  <TechButton
    label='Elasticsearch'
    icon={<SiElasticsearch />}
    bgHover='rgba(64, 118, 158, 0.48)'
    bgActive='rgba(64, 118, 158, 0.64)'
  />
);

export const KibanaButton = () => (
  <TechButton
    label='Kibana'
    icon={<SiKibana />}
    bgHover='rgba(0, 85, 113, 0.48)'
    bgActive='rgba(0, 85, 113, 0.64)'
  />
);

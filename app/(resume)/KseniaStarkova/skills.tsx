import { Box, Grid, GridCol } from '@mantine/core';
import { IconBrandReact, IconBrush, IconBug, IconChartBar, IconCode, IconContainer, IconDeviceTabletCode, IconDots, IconForms, IconGitBranch, IconPackage, IconShield, IconTimeline } from '@tabler/icons-react';
import { TechnologiesGroupCardV2, Title } from 'components';
import { ReactElement } from 'react';

const skills = [
  {
    name: 'Языки и технологии',
    items: ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Фреймворки и библиотеки',
    items: ['React', 'React-query', 'React-Redux', 'Express.js', 'Node.js'],
  },
  {
    name: 'UI-компоненты и стилизация',
    items: ['MaterialUI', 'Mantine', 'Styled Components', 'CSS'],
  },
  {
    name: 'Графика и карты',
    items: ['amcharts', 'Recharts', 'Deck', 'Mapbox'],
  },
  {
    name: 'Работа с формами и валидацией',
    items: ['yup', 'react-hook-form'],
  },
  {
    name: 'Документация и дизайн системы',
    items: ['Storybook', 'Figma'],
  },
  {
    name: 'API и безопасность',
    items: ['REST', 'Swagger', 'Keycloak', 'ldapjs'],
  },
  {
    name: 'Тестирование',
    items: ['Jest', 'Playwright'],
  },
  {
    name: 'Системы контроля версий',
    items: ['Git'],
  },
  {
    name: 'Сборка и управление зависимостями',
    items: ['Webpack', 'Vite', 'NPM'],
  },
  {
    name: 'Инструменты автоматизации',
    items: ['Docker', 'Docker compose', 'Gitlab CI/CD'],
  },
  {
    name: 'Методологии разработки',
    items: ['Agile/Scrum'],
  },
  {
    name: 'Прочие технологии',
    items: ['Java', 'Spring', 'Maven', 'Python', 'Angular', 'Angular Material', 'ng-lightning'],
  }
];

const iconsMap: Record<string, ReactElement> = {
  'Языки и технологии': (
    <IconCode
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Фреймворки и библиотеки': (
    <IconBrandReact
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'UI-компоненты и стилизация': (
    <IconBrush
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Графика и карты': (
    <IconChartBar
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Работа с формами и валидацией': (
    <IconForms
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Документация и дизайн системы': (
    <IconDeviceTabletCode
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'API и безопасность': (
    <IconShield
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Тестирование': (
    <IconBug
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Системы контроля версий': (
    <IconGitBranch
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Сборка и управление зависимостями': (
    <IconPackage
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Инструменты автоматизации': (
    <IconContainer
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Методологии разработки': (
    <IconTimeline
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Прочие технологии': (
    <IconDots
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
};

export const Skills = () => {
  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      id='skills'
    >
      <Title label='Ключевые навыки' color='orange.5' />
      <Grid
        mt={{ base: 'md', sm: 'xl' }}
        gutter={28}
      >
        {skills.map(({ name, items }) => (
          <GridCol
            key={name}
            span={{ base: 12, xs: 6, md: 4, lg: 4, xl: 3, xxl: 2 }}
          >
            <TechnologiesGroupCardV2
              icon={iconsMap[name]}
              name={name}
              technologies={items}
            />
          </GridCol>
        ))}
      </Grid>
      {/* <Stack
        gap='md'
        mt={{ base: 'md', sm: 'xl' }}
      >
        <TechnologiesGroup
          name='Языки и технологии:'
          technologies={['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']}
        />
        <TechnologiesGroup
          name='Фреймворки и библиотеки:'
          technologies={['React', 'React-query', 'React-Redux', 'Express.js', 'Node.js']}
        />
        <TechnologiesGroup
          name='UI-компоненты и стилизация:'
          technologies={['MaterialUI', 'Mantine', 'Styled Components', 'CSS']}
        />
        <TechnologiesGroup
          name='Графика и карты:'
          technologies={['amcharts', 'Recharts', 'Deck', 'Mapbox']}
        />
        <TechnologiesGroup
          name='Работа с формами и валидацией:'
          technologies={['yup', 'react-hook-form']}
        />
        <TechnologiesGroup
          name='Документация и дизайн системы:'
          technologies={['Storybook', 'Figma']}
        />
        <TechnologiesGroup
          name='API и безопасность:'
          technologies={['REST', 'Swagger', 'Keycloak', 'ldapjs']}
        />
        <TechnologiesGroup
          name='Тестирование:'
          technologies={['Jest', 'Playwright']}
        />
        <TechnologiesGroup
          name='Системы контроля версий:'
          technologies={['Git']}
        />
        <TechnologiesGroup
          name='Сборка и управление зависимостями:'
          technologies={['Webpack', 'Vite', 'NPM', 'Maven']}
        />
        <TechnologiesGroup
          name='Инструменты автоматизации:'
          technologies={['Docker', 'Docker compose', 'Gitlab CI/CD']}
        />
        <TechnologiesGroup
          name='Методологии разработки:'
          technologies={['Agile/Scrum']}
        />

        <Box mt='xl'>
          <TechnologiesGroup
            name='Имеется опыт работы со следующими технологиями:'
            technologies={['Java', 'Spring', 'Python', 'Angular', 'Angular Material', 'ng-lightning']}
          />
        </Box>
      </Stack> */}
    </Box>
  );
};

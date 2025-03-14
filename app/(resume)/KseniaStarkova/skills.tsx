import { TechnologiesGroup } from '@/components/technologiesGroup';
import { Title } from '@/components/title';
import { Box, Stack } from '@mantine/core';

export const Skills = () => {
  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      bg='white'
      id='skills'
    >
      <Title label='Ключевые навыки' />
      <Stack
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
      </Stack>
    </Box>
  );
};

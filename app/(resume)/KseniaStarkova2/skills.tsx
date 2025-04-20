import { TechnologiesGroup } from '@/components/technologiesGroup';
import { TechnologiesGroupCard } from '@/components/technologiesGroupCard';
import { Title } from '@/components/title';
import { Box, Grid, GridCol } from '@mantine/core';

export const Skills = () => {
  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      id='skills'
    >
      <Title label='Ключевые навыки' color='indigo' underlined={false} />
      <Grid
        mt={{ base: 'md', sm: 'xl' }}
        gutter={28}
      >
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Языки и технологии'
            technologies={['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']}
          />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Фреймворки и библиотеки'
            technologies={['React', 'React-query', 'React-Redux', 'Express.js', 'Node.js', 'Next.js']}
          />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='UI-компоненты и стилизация'
            technologies={['MaterialUI', 'Mantine', 'Styled Components', 'CSS']}
          />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Графика и карты'
            technologies={['amcharts', 'Recharts', 'Deck', 'Mapbox']}
          />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Работа с формами и валидацией'
            technologies={['react-hook-form', 'yup']}
          />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Документация и дизайн системы'
            technologies={['Storybook', 'Figma']}
          />          </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='API и безопасность'
            technologies={['REST', 'Swagger', 'Keycloak', 'ldapjs']}
          />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Тестирование'
            technologies={['Playwright', 'Jest' ]}
          />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Системы контроля версий'
            technologies={['Git']}
          />
        </GridCol>

        <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Инструменты автоматизации'
            technologies={['Docker', 'Docker compose', 'Gitlab CI/CD']}
          />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <TechnologiesGroupCard
            name='Методологии разработки'
            technologies={['Agile/Scrum']}
          />
        </GridCol>
      </Grid>
      <Box mt='xl'>
        <TechnologiesGroup
          name='Имеется опыт работы со следующими технологиями:'
          technologies={['Java', 'Spring', 'Python', 'Angular', 'Angular Material', 'ng-lightning']}
        />
      </Box>
    </Box>
  );
};

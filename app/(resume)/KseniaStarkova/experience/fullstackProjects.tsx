import { List, ListItem, Stack, Text } from '@mantine/core';
import { Project } from 'components';

export const FullstackProjects = () => (
  <Stack gap='xl'>
    <Project
      name='Сервис учёта рабочего времени сотрудников'
      subtitle='Внутренний сервис компании'
      goal='Разработать сервис оценки уровня вовлеченности сотрудников в проектную деятельность'
      technologies={[
        'React',
        'TypeScript',
        'React-Query',
        'Styled Components',
        'amcharts',
        'MaterialUI',
        'vite',
        'express',
        'Keyklock',
        'SQL',
        'ldapjs',
        'Docker',
        'Gitlab CI',
      ]}
      description={
        <Stack gap='xs'>
          <Text fw={300}>
            Разработала, внедрила и сопровождала внутренний сервис для анализа вовлеченности сотрудников в проектную
            деятельность на основе тайм-репортов. Система позволяет оценивать участие сотрудников в коммерческих
            проектах, используя данные из Redmine.
          </Text>
          <Text>Основные задачи:</Text>
          <List>
            <ListItem>
              Разработка интерактивного интерфейса, включая:
              <List>
                <ListItem>
                  Сводную таблицу, где поля - это проекты, а записи - сотрудники компании, с возможностью фильтрации
                  периода запрашиваемых данных и группировки по отделам
                </ListItem>
                <ListItem>
                  Графики, отображающие уровень вовлеченности сотрудников в коммерческую деятельность, распределение по
                  проектам, помесячное количество отпусков
                </ListItem>
                <ListItem>
                  Детализацию по отделам: численность, распределение по проектам, доля коммерческой разработки
                </ListItem>
              </List>
            </ListItem>
            <ListItem>Интеграция с Redmine для автоматизированного сбора данных о трудозатратах </ListItem>
            <ListItem>Разработка backend-части на Express.js с аутентификацией через Keycloak и LDAP</ListItem>
            <ListItem>
              Развертывание и публикация сервиса на внутренних серверах компании с использованием Docker и GitLab CI
            </ListItem>
          </List>
        </Stack>
      }
    />
  </Stack>
);

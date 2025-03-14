import { Project } from '@/components/project';
import { Stack } from '@mantine/core';


export const FullstackProjects = () => (
  <Stack
    gap='xl'
  // style={isMobile ? { paddingTop: '2vh' } : {}}
  >
    <Project
      name='Сервис учёта рабочего времени сотрудников'
      link=''
      subtitle=''
      goal=''
      technologies={{
        languages: [],
        uiLibraries: [],
        frameworks: []
      }}
      description={(
        <Stack gap='xs'>
          Создание и сопровождение внутреннего сервиса оценки уровня вовлеченности сотрудников в проектную деятельность на основании тайм-репортов:
          - frontend: react, typescript, styled-components, mui
          - backend: typescript, expres.js, интеграция с keycloak, ldap и БД mysql (БД сервиса redmine)
          - публикация на внутренних серверах компании с использованием Docker и CI/CD
        </Stack>
      )}
    />
    <Project
      name='Сервис отпусков'
      link=''
      subtitle=''
      goal=''
      technologies={{
        languages: [],
        uiLibraries: [],
        frameworks: []
      }}
      description={(
        <Stack gap='xs'>
        </Stack>
      )}
    />
  </Stack>
);

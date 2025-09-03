'use client';

import { Divider, Flex, List, ListItem, Stack, Text, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CompanyCard, ResumeSection } from 'components';

export const ExperienceBeforeIT = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
  return (
    <ResumeSection
      id='experience-before-IT'
      title='Опыт работы до IT'
      color='deepBlue2.3'
      variant='colored'
      pt={0}
    >
      <Flex
        mt={{ base: 'md', sm: 'xl' }}
        wrap='nowrap'
        align='flex-start'
        gap={0}
        direction={{ base: 'column', sm: 'row' }}
      >
        <CompanyCard
          fromTo='01/2013 - 03/2018'
          period='5 лет и 3 месяца'
          name='МТС'
          position='Специалист по прямым продажам услуг фиксированного бизнеса'
          city='Иркутск'
          link='https://mts.ru/personal'
        />
        <Divider
          mx={{ sm: 'lg', lg: 'xl' }}
          orientation='vertical'
          color='dark.0'
          visibleFrom='sm'
        />
        <Stack
          fw={300}
          style={isMobile ? { paddingTop: '2px' } : {}}
        >
          <Divider
            orientation='horizontal'
            color='dark.0'
            hiddenFrom='sm'
            label='Обязанности'
            w='-webkit-fill-available'
          />
          <Text
            fw={600}
            visibleFrom='sm'
          >
            Обязанности:
          </Text>
          <List>
            <ListItem>
              Поиск клиентов и проведение переговоров для подключения к услугам домашнего интернета и телевидения.
            </ListItem>
            <ListItem>
              Проведение тренингов: “Холодные продажи”, “Клиентоориентированность”, “Методология DISC”, “SPIN-продажи”,
              "Работа с возражениями".
            </ListItem>
            <ListItem>Управление агентской сетью (4 человека) для выполнения ежемесячного плана продаж.</ListItem>
            <ListItem>Участие в управленческих поединках.</ListItem>
          </List>
          <Divider
            orientation='horizontal'
            color='dark.0'
            hiddenFrom='sm'
            label='Достижения'
            w='-webkit-fill-available'
          />
          Победитель чемпионата по продажам в макрорегионе Дальний Восток в 2015 году (Иркутск, Улан-Удэ, Чита,
          Благовещенск, Хабаровск, Владивосток).
        </Stack>
      </Flex>
    </ResumeSection>
  );
};

'use client';

import { ActionIcon, Box, Burger, Flex, Group, Modal, NavLink, Stack, Text, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandApple, IconBrandTelegram, IconDownload, IconMail, IconPhone } from '@tabler/icons-react';
import useActiveSection from 'hooks/useActiveSection';
import { Fragment, useEffect, useState } from 'react';
import classes from './navigation.module.css';

type SectionProp = {
  href: string;
  label: string;
};

const sections: SectionProp[] = [
  {
    href: '#introduce',
    label: 'Главная',
  },
  {
    href: '#skills',
    label: 'Навыки',
  },
  {
    href: '#experience',
    label: 'Опыт работы',
  },
  {
    href: '#experience-before-IT',
    label: 'Опыт до IT',
  },
  {
    href: '#education',
    label: 'Образование',
  },
  {
    href: '#certificates',
    label: 'Сертификаты',
  },
  {
    href: '#feedback',
    label: 'Рекомендации',
  },
];

const sectionIds = sections.map((section) => section.href.replace('#', ''));

export const Navigation = () => {
  const [opened, { close, toggle }] = useDisclosure();
  const activeId = useActiveSection(sectionIds);
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    setActive(activeId)
  }, [activeId]);

  return (
    <Fragment>
      <Flex
        direction='row'
        justify='space-between'
        align='center'
        pos='fixed'
        top={0}
        bg='deepBlue2.6'
        w='100%'
        h='80px'
        c='white'
        pl={{ base: '6vw', md: '2vw' }}
        pr={{ base: '6vw', md: 60, lg: 88, xl: 128 }}
        style={{ zIndex: 10000 }}
        gap={0}
      >
        <Group wrap='nowrap' gap={8} align='center'>
          <Box
            w={{ base: 24, xl: 32 }}
            h={{ base: 24, xl: 32 }}
          >
            <IconBrandApple
              size='100%'
              color='white'
            />
          </Box>
          <Text
            fz={{ base: 'sm', lg: 'md', xl: 'xl' }}
            c='white'
            fw={700}
            style={{ whiteSpace: 'nowrap' }}
          >
            iOS Developer
          </Text>
        </Group>

        <Group
          gap={0}
          style={{ flexWrap: 'nowrap' }}
          visibleFrom='md'
          h='100%'
        >
          {sections.map((section) => {
            const sectionId = section.href.replace('#', '');
            return (
              <NavLink
                color='deepBlue2.6'
                variant='filled'
                autoFocus={false}
                key={section.href}
                href={section.href}
                active={sectionId === active}
                label={(
                  <Text
                    fz={{ md: 'xs', lg: 'md' }}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {section.label}
                  </Text>
                )}
                classNames={{ root: classes.root }}
                onClick={() => setActive(sectionId)}
              />
            )
          })}
        </Group>
        <Tooltip label="Скачать резюме">
          <ActionIcon
            color='deepBlue2.4'
            type='button'
            component='a'
            href='/GregorStarkov/Резюме_Старков_Г.А.pdf'
            download
            target='_blank'
            pos='fixed'
            right={{ md: 20, lg: '2vw' }}
            top={26}
            radius='md'
            size='lg'
            visibleFrom='md'
          >
            <IconDownload size={24} />
          </ActionIcon>
        </Tooltip>

        <Burger
          opened={opened}
          onClick={toggle}
          aria-label='Toggle navigation'
          color='white'
          hiddenFrom='md'
        />
      </Flex>

      <Modal
        opened={opened}
        onClose={() => close()}
        fullScreen
        withCloseButton={false}
        c='white'
        bg='deepBlue2.6'
        padding={0}
        autoFocus={false}
        hiddenFrom='md'
      >
        <Stack bg='deepBlue2.6' h='100vh' style={{ overflow: 'hidden' }}>
          <Stack
            pt='80px'
            gap='xs'
          >
            {sections.map((section) => {
              const sectionId = section.href.replace('#', '');
              return (
                <NavLink
                  color='deepBlue2.5'
                  variant='filled'
                  autoFocus={false}
                  key={section.href}
                  href={section.href}
                  active={sectionId === active}
                  label={<Text fz='xl'>{section.label}</Text>}
                  classNames={{ root: classes.root }}
                  onClick={() => {
                    setActive(sectionId);
                    close();
                  }}
                />
              )
            })}
          </Stack>
          <Group
            mt={100}
            px='xl'
            mb='xl'
            justify='flex-end'
          >
            <ActionIcon
              component='a'
              href='https://t.me/StarkovGeorgiy'
              color='deepBlue2.4'
              size={40}
            >
              <IconBrandTelegram />
            </ActionIcon>
            <ActionIcon
              component='a'
              href='tel:89148739332'
              color='deepBlue2.4'
              size={40}
            >
              <IconPhone />
            </ActionIcon>
            <ActionIcon
              component='a'
              target='_blank'
              href='mailto:stgregor1@icloud.com'
              color='deepBlue2.4'
              size={40}
            >
              <IconMail />
            </ActionIcon>
          </Group>
        </Stack>
      </Modal>
    </Fragment >
  );
};

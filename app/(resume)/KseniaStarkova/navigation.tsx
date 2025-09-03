'use client'

import { ActionIcon, Box, Burger, Group, Modal, NavLink, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTelegram, IconMail, IconPhone } from '@tabler/icons-react';
import { Fragment, useState } from 'react';
import classes from './navigation.module.css';

type SectionProp = {
  href: string;
  label: string;
}

const sections: SectionProp[] = [
  {
    href: '#introduce',
    label: 'Главная',
  },
  {
    href: '#conditions',
    label: 'Условия работы',
  },
  {
    href: '#experience',
    label: 'Опыт работы',
  },
  {
    href: '#education',
    label: 'Образование',
  },
  {
    href: '#skills',
    label: 'Ключевые навыки',
  },
  {
    href: '#feedback',
    label: 'Обратная связь',
  },
]

export const Navigation = () => {
  const [opened, { close, toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  return (
    <Fragment>
      <Box bg='dark.8' w='100vw' h='6vh' hiddenFrom='sm' />
      <Group
        pos='fixed'
        top={0}
        bg='dark.8'
        w='100vw'
        h='6vh'
        c='white'
        justify='flex-end'
        px='6vw'
        style={{ zIndex: 10000 }}
        hiddenFrom='sm'
      >
        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" color='white' />
      </Group>
      <Modal
        opened={opened}
        onClose={() => close()}
        fullScreen
        withCloseButton={false}
        c='white'
        bg='dark.8'
        padding={0}
        autoFocus={false}
        hiddenFrom='sm'
      >
        <Stack pt='12vh' bg='dark.8' h='100vh' gap='xs'>
          {sections.map((section, index) => (
            <NavLink
              color='dark.6'
              variant="filled"
              autoFocus={false}
              key={section.href}
              href={section.href}
              active={index === active}
              label={<Text fz='xl'>{section.label}</Text>}
              classNames={{ root: classes.root }}
              onClick={() => {
                setActive(index);
                close();
              }}
            />
          ))}
          <Group px='xl' mt='12vh' mb='xl' justify='flex-end'>
            <ActionIcon
              component='a'
              href='https://t.me/StarkovaKsenya'
              color='orange.5'
              size={40}
            >
              <IconBrandTelegram />
            </ActionIcon>
            <ActionIcon
              component='a'
              href='tel:89133808958'
              color='orange.5'
              size={40}
            >
              <IconPhone />
            </ActionIcon>
            <ActionIcon
              component='a'
              target='_blank'
              href='mailto:starkova_k.s@mail.ru'
              color='orange.5'
              size={40}
            >
              <IconMail />
            </ActionIcon>
          </Group>
        </Stack>
      </Modal>
    </Fragment>
  );
};

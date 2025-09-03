'use client';

import { ActionIcon, Affix as MantineAffix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';

type AffixProps = {
  onClick: () => void;
};

export const Affix = ({ onClick }: AffixProps) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <MantineAffix
      position={{ bottom: 20, right: 20 }}
      style={{ zIndex: 100 }}
    >
      <Transition
        transition='slide-up'
        mounted={scroll.y > 0}
      >
        {(transitionStyles) => (
          <ActionIcon
            onClick={() => {
              onClick();
              scrollTo({ y: 0 });
            }}
            color='deepBlue2.5'
            style={transitionStyles}
            size={40}
          >
            <IconArrowUp size={24} />
          </ActionIcon>
        )}
      </Transition>
    </MantineAffix>
  );
};

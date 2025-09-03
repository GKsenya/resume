import { Box, ScrollArea } from '@mantine/core';
import { Metadata } from 'next';
import { WorkingConditions } from './conditions';
import { Education } from './education';
import { Experience } from './experience/experience';
import { Feedback } from './feedback';
import { Introduce } from './introduce';
import { Navigation } from './navigation';
import { Skills } from './skills';

export const metadata: Metadata = {
  title: 'Старкова Ксения | frontend-разработчик',
};

export default function KseniaStarkova() {
  return (
    <main>
      <Box bg='gray.0'>
        <Navigation />
        <ScrollArea
          h={{ base: '94vh', sm: '100vh' }}
          scrollbars='y'
          type='auto'
        >
          <Introduce />
          <WorkingConditions />
          <Experience />
          <Education />
          <Skills />
          <Feedback />
        </ScrollArea>
      </Box>
    </main>
  );
}

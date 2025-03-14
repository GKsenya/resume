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
      <Navigation />
      <Introduce />
      <WorkingConditions />
      <Experience />
      <Education />
      <Skills />
      <Feedback />
    </main>
  );
}

import { Metadata } from 'next';
import { Certificates } from './certicates';
import { WorkingConditions } from './conditions';
import { Education } from './education';
import { Experience } from './experience';
import { ExperienceBeforeIT } from './experienceBeforeIT';
import { Feedback } from './feedback';
import { Introduce } from './introduce';
import { Navigation } from './navigation';

export const metadata: Metadata = {
  title: 'Старков Георгий | ios-разработчик',
};

export default function GregorStarkov() {
  return (
    <main>
      <Navigation />
      <Introduce />
      <WorkingConditions />
      <Experience />
      <ExperienceBeforeIT />
      <Education />
      <Certificates />
      <Feedback />
    </main>
  );
}

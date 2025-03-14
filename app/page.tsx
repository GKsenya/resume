import { Metadata } from 'next';
import { Certificates } from './GregorStarkov/certicates';
import { WorkingConditions } from './GregorStarkov/conditions';
import { Education } from './GregorStarkov/education';
import { Experience } from './GregorStarkov/experience';
import { ExperienceBeforeIT } from './GregorStarkov/experienceBeforeIT';
import { Feedback } from './GregorStarkov/feedback';
import { Introduce } from './GregorStarkov/introduce';
import { Navigation } from './GregorStarkov/navigation';

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

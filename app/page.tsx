import { Certificates } from './resume/GregorStarkov/certicates';
import { WorkingConditions } from './resume/GregorStarkov/conditions';
import { Education } from './resume/GregorStarkov/education';
import { Experience } from './resume/GregorStarkov/experience';
import { ExperienceBeforeIT } from './resume/GregorStarkov/experienceBeforeIT';
import { Feedback } from './resume/GregorStarkov/feedback';
import { Introduce } from './resume/GregorStarkov/introduce';
import { Navigation } from './resume/GregorStarkov/navigation';

export default function GregorStarkov() {
  return (
    <>
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
    </>
  );
}

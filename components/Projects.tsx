'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import Project from './Project';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section className='scroll-mt-28 mb-28' id='projects' ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

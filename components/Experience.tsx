'use client';

import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import React from 'react';

export default function Experience() {
  const { ref, inView } = useSectionInView('Experience', 0.1);
  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: '#fafaf9',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.15',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #44403c',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: '#fafaf9',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-stone-700'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

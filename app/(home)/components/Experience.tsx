'use client';
import React from 'react';
import Title from './Title';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { HoverEffectExperience } from '@/components/ui/card-hover-effect-experiences';
import {
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSalesforce,
  SiTypescript
} from 'react-icons/si';
export default function Experience() {
  const experiences = [
    {
      profile: 'Associate Software Engineer',
      companyName: 'Nextrove LLC',
      skills: [SiSalesforce, SiJavascript, SiNodedotjs],
      startMonth: 'July 2023',
      endMonth: 'Present'
    },
    {
      profile: 'Software Engineering Internship',
      companyName: 'Raftlabs',
      skills: [
        SiNodedotjs,
        SiJavascript,
        SiTypescript,
        SiNextdotjs,
        SiGraphql,
        SiPostgresql
      ],
      startMonth: 'May 2022',
      endMonth: 'Jan 2023'
    },
    {
      profile: 'Backend Engineering Internship',
      companyName: 'TGH Technologies',
      skills: [SiNodedotjs, SiMongodb],
      startMonth: 'Feb 2022',
      endMonth: 'April 2022'
    },
    {
      profile: 'Software Engineering Internship',
      companyName: 'Wikimedia Foundation(GSoC 2021)',
      skills: [SiNodedotjs, SiJavascript, SiHtml5, SiCss3],
      startMonth: 'May 2021',
      endMonth: 'Aug 2021'
    }
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <TracingBeam>
        <Title
          text="Past Experiences 💻"
          className="flex flex-col items-center justify-center"
        />
        <HoverEffectExperience items={experiences} />
      </TracingBeam>
    </div>
  );
}

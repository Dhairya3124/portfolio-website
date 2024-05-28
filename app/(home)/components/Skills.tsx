"use client";
import React from 'react';
import Title from './Title';
import { SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function Skills() {
  const skills = [
    {
      text: 'React',
      Icon: SiReact
    },
    {
      text: 'Next.js',
      Icon: SiNextdotjs
    },
    {
      text: 'Node.js',
      Icon: SiNodedotjs
    },
    {
      text: 'PostgreSQL',
      Icon: SiPostgresql
    },
    {
      text: 'Typescript',
      Icon: SiTypescript
    },
    {
      text: 'MongoDB',
      Icon: SiMongodb
    },
    {
      text: 'Git',
      Icon: SiGit
    },
    {
      text: 'Javascript',
      Icon: SiJavascript
    },
    {
      text: 'Tailwind',
      Icon: SiTailwindcss
    },
  ];
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />  
      <HoverEffect items = {skills}/>
    </div>
  );
}

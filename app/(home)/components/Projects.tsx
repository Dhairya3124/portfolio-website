import React from 'react';
import { SiFlask, SiPostgresql, SiPython, SiTailwindcss } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Libsys',
      tech: [SiFlask, SiPython, SiPostgresql, SiTailwindcss],
      link: '',
      cover: '',
      background: 'bg-indigo-500'
    }
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20'>
        {projects.map((project,index)=>{
          return <Link href = {project.link} key={index}>
            
          </Link>
        })}

      </div>
    </div>
  );
}

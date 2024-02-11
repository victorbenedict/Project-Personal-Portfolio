import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-end Developer',
    location: 'Upwork',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - Present',
  },
  {
    title: 'Tier 2 Customer Support',
    location: 'Davao City, Philippines',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2018 - 2023',
  },
  {
    title: 'Network Technical Support',
    location: 'Dubai, UAE',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2014 - 2016',
  },
  {
    title: "Associate's degree in Software Development",
    location: 'General Santos City, Philippines',
    description:
      'I studied a two-year software development course provided by AMA Computer Learning College.',
    icon: React.createElement(LuGraduationCap),
    date: '2012',
  },
] as const;

export const projectsData = [
  {
    title: 'Rubeeks Web',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Supabase',
      'Tailwind',
      'Flowbite',
      'Turborepo',
      'Resend',
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Tindahan',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'SisBrew Coffee and Tea',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Supabase',
  'Turborepo',
  'Resend',
  'Flowbite',
  'Framer Motion',
  'Figma',
  'Routing and switching protocols',
  'WAN/LAN technologies',
  'Serial communication',
] as const;

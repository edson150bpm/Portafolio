// src/components/Skills.tsx
import React from 'react';

import html5Img        from '../assets/skills/HTML5.png';
import css3Img         from '../assets/skills/CSS3.png';
import jsImg           from '../assets/skills/JavaScript.png';
import tsImg           from '../assets/skills/Typescript.png';

import reactImg        from '../assets/skills/reactjs.png';
import reactNativeImg  from '../assets/skills/reactnative.png';
import nextImg         from '../assets/skills/next.png';
import laravelImg      from '../assets/skills/laravel.png';
import tailwindImg     from '../assets/skills/Tailwind.png';
import expo            from '../assets/skills/expo.svg';


import figmaImg        from '../assets/skills/Figma.svg';
import scrumImg        from '../assets/skills/scrum.png';
import visual          from '../assets/skills/visual-studio.svg';
import github          from '../assets/skills/github.png';
import postman         from '../assets/skills/postman.svg';
import ubuntuImg       from '../assets/skills/ubuntu.png';

import python          from '../assets/skills/Python.png';
import nodejs          from '../assets/skills/Nodejs.png';
import php             from '../assets/skills/PHP.png';

import Mysql           from '../assets/skills/MySQL.png';
import Postgresql      from '../assets/skills/Postgresql.png';
import firebase        from '../assets/skills/fierebase.png';





type SkillItem = {
  src: string;
  alt: string;
  mobile: string; // mobile size
  md?: string;    // md+ size
};

const categories: {
  title: string;
  items: SkillItem[];
}[] = [
  {
    title: 'Lenguajes',
    items: [
      { src: html5Img, alt: 'HTML5',      mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: css3Img,  alt: 'CSS3',       mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: jsImg,    alt: 'JavaScript', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: tsImg,    alt: 'TypeScript', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' }
    ]
  },
  {
    title: 'Frameworks & Librerías',
    items: [
      { src: reactImg,       alt: 'ReactJS',      mobile: 'w-[80px] h-[56px]',  md: 'md:w-[90px] md:h-[64px]' },
      { src: reactNativeImg, alt: 'React Native', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: nextImg,        alt: 'Next.js',      mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: tailwindImg,    alt: 'Tailwind CSS', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: laravelImg, alt: 'Laravel',    mobile: 'w-[90px] h-[40px]',   md: 'md:w-[140px] md:h-[56px]' },
      { src: expo, alt: 'Expo go',    mobile: 'w-[90px] h-[40px]',   md: 'md:w-[140px] md:h-[56px]' }


    ]
  },
  {
    title: 'Herramientas',
    items: [
      { src: figmaImg, alt: 'Figma', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: scrumImg, alt: 'Scrum', mobile: 'w-[120px] h-[52px]', md: 'md:w-[120px] md:h-[72px]' },
      { src: visual, alt: 'Visual Studio', mobile: 'w-[64px] h-[64px]',   md: 'md:w-[80px] md:h-[80px]' },
      { src: github, alt: 'GitHub', mobile: 'w-[64px] h-[64px]', md: 'md:w-[80px] md:h-[80px]' },
      { src: postman, alt: 'Postman', mobile: 'w-[64px] h-[64px]', md: 'md:w-[80px] md:h-[80px]' },
      { src: ubuntuImg, alt: 'Ubuntu', mobile: 'w-[64px] h-[64px]', md: 'md:w-[80px] md:h-[80px]' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { src: python, alt: 'Pyhton', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[80px] md:h-[80px]' },
      { src: nodejs, alt: 'Node JS', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[90px] md:h-[64px]' },
      { src: php, alt: 'PHP', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[90px] md:h-[64px]' }


    ]
  },
  {
    title: 'Bases de Datos',
    items: [
      { src: Mysql, alt: 'MySQL', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[120px] md:h-[90px]' },
      { src: Postgresql, alt: 'Postgresql', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[64px] md:h-[64px]' },
      { src: firebase, alt: 'Firebase', mobile: 'w-[48px] h-[48px]',  md: 'md:w-[90px] md:h-[90px]' },

    ]
  }
];

export default function Skills() {
  const mainCats = categories.slice(0, 3);
  const bottomCats = categories.slice(3);

  return (
    <section id="habilidades" className="py-20 container mx-auto px-4">

      {/* Primera fila: Lenguajes, Frameworks, Herramientas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mainCats.map(({ title, items }) => (
          <div
            key={title}
            className="
              p-6 rounded-lg shadow-lg
              bg-gradient-to-br from-cyan-50 via-white to-cyan-50
              dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
              transform transition-transform duration-300 hover:scale-105
            "
          >
            <h3
              className="
                text-2xl font-semibold mb-4 text-transparent bg-clip-text
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                animate-pulse
              "
            >
              {title}
            </h3>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {items.map(({ src, alt, mobile, md }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  title={alt}
                  className={`object-contain ${mobile} ${md ?? ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Segunda fila: Backend y Bases de Datos, centradas */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
        {bottomCats.map(({ title, items }) => (
          <div
            key={title}
            className="
              w-full max-w-sm
              p-6 rounded-lg shadow-lg
              bg-gradient-to-br from-cyan-50 via-white to-cyan-50
              dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
              transform transition-transform duration-300 hover:scale-105
            "
          >
            <h3
              className="
                text-2xl font-semibold mb-4 text-transparent bg-clip-text
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                animate-pulse
              "
            >
              {title}
            </h3>
            <div className="flex justify-center gap-6">
              {items.map(({ src, alt, mobile, md }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  title={alt}
                  className={`object-contain ${mobile} ${md ?? ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

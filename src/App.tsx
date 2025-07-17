// src/App.tsx
import React from 'react';
import type { IconBaseProps } from 'react-icons';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Timeline, { Experience } from './components/Timeline';
import perfil from './assets/img/perfil.png';
import { FaBriefcase  as _FaBriefcase  } from 'react-icons/fa';

// Import y casteo de íconos
import { AiOutlineMail as _AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin as _FaLinkedin }         from 'react-icons/fa';

const AiOutlineMail = _AiOutlineMail as React.FC<IconBaseProps>;
const FaLinkedin   = _FaLinkedin   as React.FC<IconBaseProps>;
const FaBriefcase   = _FaBriefcase   as React.FC<IconBaseProps>;

// Datos extraídos de tu CV
const experiencia: Experience[] = [
  {
    title: 'Front‑End Developer',
    subtitle: 'Vulcanics (Remoto – San Luis Potosí, México)',
    date: '05/2024 – Presente',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          Implementación de nuevos módulos e integración de funcionalidades en
          apps móviles con React Native y Expo, consumiendo REST APIs y gestionando
          despliegues a Google Play Store y App Store.
        </li>
        <li>
          Integración eficiente de datos frontend‑backend, asegurando sincronización
          en tiempo real y manejo óptimo de estado.
        </li>
        <li>
          Despliegue y administración de servidores Ubuntu con Nginx, PM2 y alta disponibilidad.
        </li>
        <li>
          Automatización de flujos con Bash para instalación, compilación y despliegue continuo.
        </li>
        <li>
          Uso de TypeScript y JavaScript avanzado con patrones de diseño y Prettier.
        </li>
        <li>
          Prototipado UI/UX en Figma y Tailwind, colaborando con diseño para componentes reutilizables.
        </li>
        <li>
          Trabajo en sprints ágiles: refinamiento de historias, code reviews y pair programming.
        </li>
        <li>
          Firebase Realtime Database para datos en tiempo real en móvil y web.
        </li>
        <li>
          Comunicación en tiempo real con Socket.io: chat, notificaciones y sincronización.
        </li>
        <li>
          Desarrollo de dashboards interactivos con Next.js y consumo de APIs.
        </li>
      </ul>
    )
  },
  {
    title: 'Desarrollador Web',
    subtitle: 'Centro Universitario de la Costa Sur, UdeG (Autlán de Navarro, Jalisco)',
    date: '08/2020 – 05/2024',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          Arquitectura MVC con Laravel y PHP en el “Sistema de Información Académica”:
          rutas, controladores, modelos Eloquent y migraciones.
        </li>
        <li>
          Desarrollo de módulos críticos (control de no adeudos, admisión, titulación)
          usando Eloquent ORM y Form Requests.
        </li>
        <li>
          Recopilación de requerimientos, planificación de entregables y coordinación
          con stakeholders.
        </li>
        <li>
          Configuración y monitoreo de entornos aislados para múltiples proyectos
          académicos, garantizando seguridad y disponibilidad.
        </li>
      </ul>
    )
  }
];

function App() {
  const [theme, setTheme] = useTheme();

  const proyectos = [
    {
      title: 'SOC Dashboard',
      description: 'Dashboard para atención de brokers en tiempo real.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      link: 'https://github.com/tu-usuario/botSoc-dashboard'
    },
    // más proyectos…
  ];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out">
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="pt-20">
          {/* Hero */}
          <section
            id="hero"
            className="
              min-h-[70vh] flex flex-col justify-center
              items-start md:items-center text-left md:text-center
              px-4 py-12
            "
          >
            <img
              src={perfil}
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-white dark:ring-gray-900"
            />
            <span className="mb-3 inline-block px-5 py-2 border-2 border-cyan-500 text-cyan-500 rounded-full font-medium">
              Disponible para trabajar
            </span>
            <h1 className="text-5xl font-bold mb-3">
              Hey, soy <span className="text-cyan-400">Edson Rodríguez</span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Frontend Developer con{' '}
              <span className="text-yellow-400">más de 4 años</span> de experiencia
              construyendo interfaces con React, React Native y Next.js. He trabajado
              en dashboards en tiempo real, chatbots financieros y análisis de datos,
              integrando APIs REST y WebSockets.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="mailto:edsonrf896@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <AiOutlineMail className="mr-2 text-xl" />
                Contáctame
              </a>
              <a
                href="https://linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <FaLinkedin className="mr-2 text-xl" />
                LinkedIn
              </a>
            </div>
          </section>

          {/* Experiencia Laboral */}
          <section id="experiencia" className="py-20 container mx-auto px-4">
       <h2 className="text-3xl font-semibold mb-8 flex items-center">
         <FaBriefcase className="text-2xl mr-2" />
         Experiencia Laboral
       </h2>
            <Timeline entries={experiencia} />
          </section>

          {/* Sobre mí */}
          <section id="sobremi" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Soy Edson Rodríguez, Frontend Developer con experiencia en React,
              React Native y Next.js. Me especializo en interfaces interactivas,
              rendimiento y buenas prácticas de accesibilidad y testing.
            </p>
          </section>

          {/* Proyectos Destacados */}
          <section id="proyectos" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Proyectos Destacados</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectos.map(p => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </section>

          {/* Habilidades */}
          <section id="habilidades" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Habilidades & Herramientas</h2>
            <Skills />
          </section>

          {/* Contacto */}
          <section id="contacto" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
            <form className="max-w-lg mx-auto space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-3 border rounded bg-white dark:bg-gray-700"
              />
              <input
                type="email"
                placeholder="Tu email"
                className="w-full p-3 border rounded bg-white dark:bg-gray-700"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full p-3 border rounded bg-white dark:bg-gray-700"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
              >
                Enviar
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

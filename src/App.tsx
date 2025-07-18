// src/App.tsx
import React, { useState } from 'react';
import type { IconBaseProps } from 'react-icons';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Timeline, { Experience } from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import ScrollReveal from './components/ScrollReveal'


import perfil from './assets/img/perfil.png';
import siaImg from './assets/img/sia.png';
import brokersImg from './assets/img/brokersImg.png';
import chatbotImg from './assets/img/chatbot.png';
import mako from './assets/img/mako.png';
import skala from './assets/img/skala.png';
import makoDiccionario from './assets/img/makoDiccionario.png';

import { FaBriefcase as _FaBriefcase } from 'react-icons/fa';
import { AiOutlineMail as _AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin as _FaLinkedin } from 'react-icons/fa';
import { FaGithub as _FaGithub } from 'react-icons/fa';


const FaBriefcase = _FaBriefcase as React.FC<IconBaseProps>;
const AiOutlineMail = _AiOutlineMail as React.FC<IconBaseProps>;
const FaLinkedin = _FaLinkedin as React.FC<IconBaseProps>;
const FaGithub = _FaGithub as React.FC<IconBaseProps>;


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
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const proyectos = [
    {
      title: 'Sistema de Información Académica',
      description:
        'Desarrollé y lideré de manera integral el Sistema de Información Académica (SIA), encargado de gestionar los módulos de no‑adeudos, admisión y titulación. Me encargué de todo el ciclo: recogida de requisitos, diseño UI/UX con componentes de Bootstrap, implementación de la arquitectura back‑end con Laravel, PHP, Eloquent ORM y MySQL, y construcción del front‑end accesible y responsivo.',
      tech: ['Laravel', 'PHP', 'Eloquent', 'MySQL'],
      image: siaImg
    },
    {
      title: 'Módulos Móviles de Brokers',
      description:
        'Actualmente implemento y doy mantenimiento a los módulos móviles de la aplicación de brokers, desarrollada con React Native y Expo; me encargo de añadir nuevas funcionalidades y optimizar los módulos existentes, así como de gestionar el despliegue continuo en Google Play Store y App Store, garantizando actualizaciones sin incidencias. Además, integré Firebase para el almacenamiento y sincronización de datos en tiempo real, permitiendo que la aplicación refleje instantáneamente cualquier cambio y ofrezca una experiencia de usuario fluida y reactiva.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
      image: brokersImg
    },
    {
      title: 'Dashboard de Chatbot Financiero',
      description:
        'Desarrollé el dashboard de administración del chatbot financiero con React y TypeScript, siguiendo una arquitectura limpia y fácilmente mantenible. La interfaz muestra métricas e historiales de conversación del chatbot, e incluye secciones para responder chats en tiempo real mediante un sistema de WebSockets, además de recibir notificaciones instantáneas que facilitan el seguimiento y control de las interacciones. Gracias al consumo de APIs especializadas, el dashboard permite a los brokers gestionar dudas, preguntas y solicitudes de forma rápida y eficiente, mejorando significativamente la atención al cliente.',
      tech: ['React', 'Tailwind CSS', 'Socket.io'],
      image: chatbotImg
    },
    {
      title: 'Dashboard de Chatbot Inteligente para Arrendamientos',
      description:
        'Actualmente doy mantenimiento y desarrollo nuevas funcionalidades en el dashboard de administración de arrendamientos. La plataforma consume APIs externas para integrar servicios de verificación, notificaciones y datos del chatbot inteligente. Ofrece secciones para revisar y filtrar los archivos que envían los usuarios, así como para monitorear en tiempo real las conversaciones con el bot. Gracias a su arquitectura modular y a las mejoras continuas, hemos optimizado la usabilidad, el rendimiento y la capacidad de escalar a nuevos flujos de trabajo.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: mako
    },
    {
      title: 'Skala: Plataforma de Matching de Talento con IA',
      description:
        'Implementé completamente el front‑end de Skala a partir de un prototipo en Figma. La aplicación, desarrollada en React y JavaScript, consume APIs REST que exponen los resultados de un motor de scraping en el back‑end, y presenta en tiempo real las mejores coincidencias de candidatos según los requisitos definidos. El UI se construyó con Tailwind CSS para lograr una interfaz ágil, responsiva y fácil de mantener.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      image: skala
    },
    {
      title: 'Panel de Vocabulario para Chatbot de Arrendamiento',
      description:
        'Desarrollé de forma integral el front‑end de Mako Diccionario, un panel construido en React que permite añadir, editar y eliminar palabras clave y sus definiciones para el chatbot de arrendamiento. Me encargué tanto del diseño UI en Tailwind CSS como de la implementación funcional, incluyendo la gestión de credenciales de servicio que el bot utiliza y que deben rotarse periódicamente. La aplicación consume APIs REST para realizar todas las operaciones CRUD y actualizar credenciales, ofreciendo una experiencia fluida y segura.',
      tech: ['React', 'JavaScript', 'API REST', 'Tailwind CSS'],
      image: makoDiccionario
    }
  ];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div
        className={`
          min-h-screen
          bg-gradient-to-br from-cyan-50 via-white to-cyan-50
          dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
          text-gray-900 dark:text-gray-100
          transition-colors duration-300 ease-in-out
        `}
      >
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="pt-20">
          <ScrollReveal>
            {/* Hero */}
            <section
              id="hero"
              className="min-h-[70vh] flex flex-col justify-center items-start md:items-center text-left md:text-center px-4 py-12"
            >
              <img
                src={perfil}
                alt="Foto de perfil"
                className="w-32 h-32 mb-4"
              />
              <h1 className="text-5xl font-bold mb-3">
                Hey, soy <span className="text-cyan-400">Edson Rodríguez</span>
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <span className="text-yellow-400">+4 años de experiencia. </span>
                Frontend Developer y Creador de interfaces interactivas desde Autlan de Navarro, México. Experto en React, React Native, Next.js y Tailwind CSS, construyendo aplicaciones web como moviles únicas y de alto rendimiento.
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
                  href="https://www.linkedin.com/in/edson-rodriguez-219820253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <FaLinkedin className="mr-2 text-xl" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/edson150bpm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <FaGithub className="mr-2 text-xl" />
                  GitHub
                </a>
              </div>
            </section>
          </ScrollReveal>

          {/* Experiencia Laboral */}
          <ScrollReveal>
            <section id="experiencia" className="py-20 container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-8 flex items-center">
                <FaBriefcase className="text-2xl mr-2" />
                Experiencia Laboral
              </h2>
              <Timeline entries={experiencia} />
            </section>
          </ScrollReveal>
          <ScrollReveal>
            {/* Proyectos Destacados */}
            <section id="proyectos" className="py-20 container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-8 flex items-center text-gray-900 dark:text-gray-100">
                <code className="text-xl mr-2">{"</>"}</code> Proyectos Destacados
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {proyectos.map((p, i) => (
                  <div
                    key={i}
                    className="cursor-pointer"
                    onClick={() => setLightboxImg(p.image)}
                  >
                    <ProjectCard {...p} />
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Lightbox Modal */}
          <ScrollReveal>
            {lightboxImg && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                onClick={() => setLightboxImg(null)}
              >
                <img
                  src={lightboxImg}
                  alt="Preview"
                  className="
                  max-h-[80vh] max-w-[90vw]
                  sm:max-w-[70vw] md:max-w-[50vw]
                  rounded-lg shadow-lg
                "
                />
              </div>
            )}
          </ScrollReveal>

          {/* Habilidades */}

          <ScrollReveal>
            <section id="habilidades" className="py-20 container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-6">
                Habilidades &amp; Herramientas
              </h2>
              <Skills />
            </section>
          </ScrollReveal>
          {/* Sobre mí */}
          <ScrollReveal>
            <section id="sobremi" className="py-20 container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Soy <span className="text-yellow-400">Edson Alejandro Rodríguez Flores</span>, ingeniero en{' '}
                <span className="text-yellow-400">Teleinformática</span> egresado de la{' '}
                <span className="text-yellow-400">Universidad de Guadalajara</span>. Cuento con{' '}
                <span className="text-yellow-400">más de cuatro años de experiencia</span> colaborando
                 estrechamente con equipos de desarrollo en la Universidad de Guadalajara como en{' '}
                <span className="text-yellow-400">Vulcanics</span> (actualmente de forma remota),
                liderando proyectos de extremo a extremo.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                Tengo experiencia implementando arquitecturas <span className="text-yellow-400">MVC</span> con{' '}
                <span className="text-yellow-400">Laravel</span> y <span className="text-yellow-400">PHP</span>, desarrollando
                interfaces y prototipos en <span className="text-yellow-400">Figma</span>, y construyendo aplicaciones
                web y móviles usando tecnologías como{' '}
                <span className="text-yellow-400">React</span>, <span className="text-yellow-400">React Native</span>,{' '}
                <span className="text-yellow-400">Next.js</span> y <span className="text-yellow-400">Tailwind CSS</span>.

                Disfruto <span className="text-yellow-400">trabajar en equipo</span>, escribir código limpio y escalable,
                y enfocarme en la optimización del rendimiento aplicando buenas prácticas y patrones de diseño. Soy
                autodidacta y siempre estoy explorando <span className="text-yellow-400">nuevas tecnologías</span>, desde integrar{' '}
                <span className="text-yellow-400">Firebase</span> para funcionalidades en tiempo real, hasta desplegar servicios
                en <span className="text-yellow-400">Ubuntu</span> con <span className="text-yellow-400">Nginx</span> y{' '}
                <span className="text-yellow-400">PM2</span>. Me motiva encontrar soluciones innovadoras que sean accesibles y eficientes.
              </p>
            </section>


          </ScrollReveal>
        </main>
      </div>
    </div>
  );
}

export default App;

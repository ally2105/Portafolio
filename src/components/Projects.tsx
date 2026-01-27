import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'TalentoPlus S.A.S.',
      description: 'Sistema completo de gestión de empleados con aplicación web MVC, API REST con JWT, dashboard IA, generación de PDF y importación de Excel. Arquitectura en capas con principios Clean Architecture.',
      image: '/projects/p1.png',
      tags: ['ASP.NET Core', 'PostgreSQL', 'Entity Framework', 'JWT', 'QuestPDF'],
      links: { demo: '#', github: 'https://github.com/ally2105/TalentoPlus' }
    },
    {
      title: 'Firmeza',
      description: 'Sistema integral de gestión de construcción con API REST, frontend SPA en React, panel de administración MVC. Incluye autenticación JWT, carrito de compras, generación de PDF, envío de correos y importación de Excel.',
      image: '/projects/p3.png',
      tags: ['.NET 8', 'React', 'PostgreSQL', 'Docker', 'iTextSharp'],
      links: { demo: '#', github: 'https://github.com/ally2105/gestion_constructora.git' }
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container">
        <h2 className="text-4xl font-bold mb-16">Proyectos <span className="gradient-text">Destacados</span></h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="glass overflow-hidden group glass-hover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-1/60 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a href={project.links.github} className="w-12 h-12 bg-brand-5 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Github size={20} /></a>
                    <a href={project.links.demo} className="w-12 h-12 bg-brand-5 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

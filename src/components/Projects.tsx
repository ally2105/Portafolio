import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Nexus Analytics',
      description: 'Plataforma de análisis de datos en tiempo real con visualizaciones 3D y dashboard interactivo.',
      image: '/projects/p1.png',
      tags: ['React', 'Three.js', 'Node.js'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Vibrant Finds',
      description: 'Aplicación móvil de e-commerce con una interfaz minimalista y sistema de pagos integrado.',
      image: '/projects/p2.png',
      tags: ['React Native', 'Firebase', 'Stripe'],
      links: { demo: '#', github: '#' }
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container">
        <h2 className="text-4xl font-bold mb-16">Proyectos <span className="gradient-text">Destacados</span></h2>

        <div className="grid md:grid-cols-2 gap-12">
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

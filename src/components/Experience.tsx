import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovators',
      role: 'Senior Full Stack Developer',
      period: '2022 - Presente',
      description: 'Liderazgo técnico en el desarrollo de microservicios y optimización de front-end para alta concurrencia.'
    },
    {
      company: 'Creative Studio',
      role: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Creación de interfaces interactivas premium utilizando React y animaciones avanzadas.'
    },
    {
      company: 'App Factory',
      role: 'Junior Web Developer',
      period: '2018 - 2020',
      description: 'Desarrollo de aplicaciones SPA y mantenimiento de plataformas e-commerce.'
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-24">Mi <span className="gradient-text">Experiencia</span></h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-5 shadow-[0_0_15px_rgba(140,49,147,0.6)] z-10 hidden md:block" />

                <div className="w-full md:w-1/2">
                  <div className={`glass p-8 glass-hover ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-sm font-bold text-brand-5 mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-400 line-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

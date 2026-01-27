import { Layout, Server, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-10 h-10 text-brand-5 mb-6" />,
      skills: ['React', 'Next.js', 'Tailwind', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Backend',
      icon: <Server className="w-10 h-10 text-brand-5 mb-6" />,
      skills: ['Node.js', 'Python', 'C#', '.NET / ASP.NET Core']
    },
    {
      title: 'Base de Datos',
      icon: <Database className="w-10 h-10 text-brand-5 mb-6" />,
      skills: ['PostgreSQL', 'Mysql']
    },
    {
      title: 'DevOps',
      icon: <Terminal className="w-10 h-10 text-brand-5 mb-6" />,
      skills: ['Docker', 'Vercel', 'Git']
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">Mis <span className="gradient-text">Habilidades</span></h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="glass p-10 text-center glass-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-center">{category.icon}</div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

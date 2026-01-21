import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="glass aspect-square overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/me.jpg"
              alt="Perfil"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Sobre <span className="gradient-text">Mí</span></h2>
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                Soy desarrolladora web full-stack con más de 2 años de experiencia creando soluciones digitales eficientes y escalables. Me especializo en transformar ideas complejas en interfaces intuitivas, funcionales y centradas en el usuario.
              </p>
              <p>
                Mi enfoque se basa en una arquitectura limpia, alto rendimiento y una experiencia de usuario cuidada. Me mantengo en constante aprendizaje para estar al día con las tecnologías y buenas prácticas del ecosistema web.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center md:text-left">
                <span className="block text-3xl font-bold text-brand-5 font-display">20</span>
                <span className="text-sm text-gray-400">Proyectos</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl font-bold text-brand-5 font-display">5</span>
                <span className="text-sm text-gray-400">Clientes</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl font-bold text-brand-5 font-display">2</span>
                <span className="text-sm text-gray-400">Años Exp.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

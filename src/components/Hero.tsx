import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center pt-[120px] relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-6">
                        <motion.div
                            className="w-24 h-24 rounded-full border-2 border-brand-5 p-1 glass overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src="/me.jpg" alt="Dev" className="w-full h-full object-cover rounded-full" />
                        </motion.div>
                    </div>
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-5/10 text-brand-5 text-sm font-semibold border border-brand-5/20 mb-8">
                        Disponible para nuevos proyectos
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
                        Creamos experiencias <br />
                        <span className="gradient-text">digitales excepcionales</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Soy una Desarrolladora full-stack con enfoque en la creación de productos escalables, bien diseñados y preparados para crecer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#projects" className="btn-primary">
                            Ver proyectos <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contáctame
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

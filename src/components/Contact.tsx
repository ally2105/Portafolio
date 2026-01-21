import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">Hablemos de tu <span className="gradient-text">Próximo Proyecto</span></h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 glass flex items-center justify-center text-brand-5"><Mail /></div>
              <div>
                <h4 className="text-lg font-bold">Email</h4>
                <p className="text-gray-400">hola@tusitio.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 glass flex items-center justify-center text-brand-5"><Phone /></div>
              <div>
                <h4 className="text-lg font-bold">Teléfono</h4>
                <p className="text-gray-400">+34 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 glass flex items-center justify-center text-brand-5"><MapPin /></div>
              <div>
                <h4 className="text-lg font-bold">Ubicación</h4>
                <p className="text-gray-400">Madrid, España</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="glass p-10 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input type="text" placeholder="Nombre" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-5 transition-colors" required />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-5 transition-colors" required />
            </div>
            <div>
              <textarea placeholder="Mensaje" rows={5} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-5 transition-colors" required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Enviar Mensaje <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

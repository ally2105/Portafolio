const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-brand-1/50 relative">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Allison Pauleth. Todos los derechos reservados.</p>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-brand-5 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-brand-5 transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

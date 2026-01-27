import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className="portfolio-app">

      <BackgroundVideo />
      <div className="bg-gradient-custom" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />

        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

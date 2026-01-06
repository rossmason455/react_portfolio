import { BrowserRouter as Router, Routes, Route  } from 'react-router'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

// pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact'
// import PageNotFound from './pages/PageNotFound';
// import ProjectIndex from '@/pages/projects/Index';

export default function App() {

  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(localStorage.getItem('dark') === 'true');
  const [showWelcome, setShowWelcome] = useState(true);
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  useEffect(() => {
    if (!showWelcome) {
      setPortfolioVisible(true);
    }
  }, [showWelcome]);

  useEffect(() => {
    console.log("Dark Mode:", isDark);

    document.documentElement.classList.toggle('dark', isDark);

    localStorage.setItem('dark', isDark);

  }, [isDark]);

  useEffect(() => {
    if (!showWelcome) {
      const sections = ['intro', 'projects', 'contact'];
      const targets = sections.map(section => document.getElementById(section));

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            console.log(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      }, { threshold: 0.3, rootMargin: '0px 0px 0px 0px' });

      targets.forEach(el => {
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [showWelcome]);

  const toggleTheme = () => setIsDark(currentMode => !currentMode);

  return (
    <div className="min-h-screen bg-[url('/images/3306716.jpg')] bg-cover bg-center text-foreground relative">
      {showWelcome ? (
        <Welcome onEnter={() => setShowWelcome(false)} />
      ) : (
        <div className={`transition-opacity duration-1000 ${portfolioVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar activeSection={activeSection} />
          <main className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-16'>
            <Intro />
            <Projects />
            <Contact />
            <Footer toggleTheme={toggleTheme} isDark={isDark} />
          </main>

          <div className='fixed bottom-0 left-0 h-24 w-full from-background via-background/80 to-transparent pointer-events-none'></div>
        </div>
      )}
    </div>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />

    //     <Route path='/projects' element={<ProjectIndex />} />


    //     <Route path='*' element={<PageNotFound />} />
    //   </Routes>

    //   <Navbar />

    // </Router>
  );
}
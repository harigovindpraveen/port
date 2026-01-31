
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard.tsx';

const PortfolioPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            const staggerContainer = entry.target.querySelector('.stagger-in');
            if (staggerContainer) {
              const items = staggerContainer.querySelectorAll('.stagger-item');
              items.forEach((item, i) => {
                (item as HTMLElement).style.animationDelay = `${i * 100}ms`;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-[#F9F9F9]">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};


function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('isAuthenticated') === 'true'
  );
  const [authError, setAuthError] = useState('');

  const navigate = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  
  const handleLogin = (username: string, password: string) => {
    if (username === 'harigovindpraveen' && password === 'hari123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
      setAuthError('');
      navigate('/admin/dashboard');
    } else {
      setAuthError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const renderContent = () => {
    if (path.startsWith('/admin')) {
      if (isAuthenticated) {
         if (path === '/admin/login') {
            navigate('/admin/dashboard');
            return null;
         }
        return <AdminDashboard onLogout={handleLogout} />;
      }
      return <AdminLogin onLogin={handleLogin} error={authError} navigate={navigate} />;
    }
    
    return <PortfolioPage navigate={navigate} />;
  };

  return <div className="app-container">{renderContent()}</div>;
}

export default App;

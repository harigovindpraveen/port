
import React from 'react';
import ParticleCanvas from './ParticleCanvas';

const Hero = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="bg-[#F9F9F9] min-h-[calc(100vh-62px)] flex items-center justify-center relative overflow-hidden p-4">
      <ParticleCanvas />
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-8xl font-bold text-black mb-4">
          Hi, I'm Harigovind P.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 mb-8">
          An aspiring computer science engineer with a passion for solving complex problems and exploring the frontiers of technology.
        </p>
        <div className="flex justify-center items-center gap-4">
           <a
            href="#about"
            className="bg-[--accent] text-black font-bold py-3 px-6 brutalist-button"
            onClick={handleNavClick}
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
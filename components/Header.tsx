
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[#F9F9F9] border-b-2 border-black sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#hero" className="text-2xl font-bold text-black" onClick={handleNavClick}>
          Harigovind P
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-black font-medium hover:underline" onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
           <a href="mailto:harigovind.praveen@gmail.com" className="bg-[--accent] text-black font-bold py-2 px-4 rounded-md brutalist-button">
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden z-50 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="_0_0_24_24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

       <div className={`fixed inset-0 z-40 bg-[#F9F9F9] md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        <nav className="h-full flex flex-col items-center justify-center space-y-8 -mt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-black text-3xl font-bold"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
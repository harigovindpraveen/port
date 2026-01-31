
import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

interface FooterProps {
  navigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };
  
  return (
    <footer className="bg-[#F9F9F9] border-t-2 border-black">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-black text-sm font-medium">
          &copy; {new Date().getFullYear()} Harigovind P. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
           <a
            href="/admin/login"
            onClick={(e) => handleNav(e, '/admin/login')}
            className="text-black text-sm font-medium hover:underline"
          >
            Admin Login
          </a>
          <a href="https://github.com/harigovindpraveen" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-black hover:opacity-70 transition-opacity">
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

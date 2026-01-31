
import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center bg-white fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Get In Touch
        </h2>
        <p className="max-w-xl mx-auto text-gray-700 text-lg mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
        </p>
        <a
          href="mailto:harigovind.praveen@gmail.com"
          className="inline-block bg-[--accent] text-black font-bold py-4 px-8 rounded-md brutalist-button text-lg pulse-button"
        >
          Send an Email
        </a>

        <div className="mt-12">
            <p className="text-black font-medium mb-4">Find me on</p>
            <div className="flex justify-center space-x-8">
                <a href="https://github.com/harigovindpraveen" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity" aria-label="GitHub Profile">
                    <GitHubIcon className="w-8 h-8" />
                </a>
                <a href="#" className="text-black hover:opacity-70 transition-opacity" aria-label="LinkedIn Profile">
                    <LinkedInIcon className="w-8 h-8" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
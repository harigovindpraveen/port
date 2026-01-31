
import React, { useEffect, useRef } from 'react';
import { EDUCATION } from '../constants';

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => items?.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <section id="education" className="py-24 fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education
        </h2>
        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-black" aria-hidden="true"></div>
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative mb-12 timeline-item">
              <div className="absolute left-1/2 -translate-x-1/2 mt-1.5 w-4 h-4 bg-[--accent] rounded-full border-2 border-black"></div>
              <div
                className={`w-[calc(50%-2rem)] p-6 bg-white rounded-md brutalist-border brutalist-shadow ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="text-xl font-bold text-black mb-1 sm:mb-0">
                    {edu.degree}
                  </h3>
                  <span className="text-gray-600 text-sm font-bold whitespace-nowrap">
                    {edu.date}
                  </span>
                </div>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectTags = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

  useEffect(() => {
    setIsAnimating(true);
    const processTimeout = setTimeout(() => {
      let processedProjects = [...PROJECTS];

      // 1. Filter
      if (activeFilter !== 'All') {
        processedProjects = processedProjects.filter(p => p.tags.includes(activeFilter));
      }

      // 2. Sort
      processedProjects.sort((a, b) => {
        switch (sortOrder) {
          case 'oldest':
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          case 'title-asc':
            return a.title.localeCompare(b.title);
          case 'title-desc':
            return b.title.localeCompare(a.title);
          case 'newest':
          default:
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      });
      
      setFilteredProjects(processedProjects);
      setIsAnimating(false);
    }, 300); // Corresponds to transition duration

    return () => clearTimeout(processTimeout);

  }, [activeFilter, sortOrder]);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Things I've Built
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-start items-start">
          <div>
            <label htmlFor="filter-select" className="font-bold text-sm mb-1 block text-gray-700">Filter by</label>
            <div className="relative">
              <select
                id="filter-select"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="appearance-none w-full sm:w-auto bg-white font-bold py-2 px-4 pr-8 rounded-md brutalist-border brutalist-button focus:outline-none"
              >
                {projectTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag === 'All' ? 'All Projects' : tag}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="sort-select" className="font-bold text-sm mb-1 block text-gray-700">Sort by</label>
            <div className="relative">
              <select
                id="sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none w-full sm:w-auto bg-white font-bold py-2 px-4 pr-8 rounded-md brutalist-border brutalist-button focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
              </div>
            </div>
          </div>
        </div>


        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredProjects.map((project) => (
            <button
              key={project.title}
              className="bg-white rounded-lg brutalist-border brutalist-shadow flex flex-col group text-left transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--accent]"
              onClick={() => handleOpenModal(project)}
            >
              <div className="overflow-hidden rounded-t-md border-b-2 border-black">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"/>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-md brutalist-border border-gray-400">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-gray-500 text-xs font-bold py-1">+ {project.tags.length - 3} more</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default Projects;
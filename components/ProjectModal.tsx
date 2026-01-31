
import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import FloatingShapes from './FloatingShapes';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const videoElement = videoRef.current; // Capture the video element for cleanup

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      if (videoElement) {
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Ignore AbortError which is thrown when the video play request is interrupted by unmounting the component.
            if (error.name !== 'AbortError') {
              console.error("Video autoplay was prevented:", error);
            }
          });
        }
      }
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };
  }, [project, onClose]);
  
  if (!project) return null;

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 bg-opacity-70 flex items-center justify-center z-50 p-4 modal-backdrop-animate"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg brutalist-border brutalist-shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col modal-content-animate relative overflow-hidden"
        onClick={handleModalContentClick}
      >
        <FloatingShapes />
        <header className="p-4 border-b-2 border-black flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 id="project-modal-title" className="text-2xl font-bold">{project.title}</h2>
          <button onClick={onClose} aria-label="Close project details" className="text-3xl font-bold hover:text-[--accent] leading-none p-1">&times;</button>
        </header>

        <div className="p-6 relative z-10">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              poster={project.imageUrl}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto max-h-80 object-cover rounded-md brutalist-border mb-6 bg-black"
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto max-h-80 object-cover rounded-md brutalist-border mb-6" />
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-md brutalist-border border-gray-400">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="text-gray-600 text-sm font-bold mb-4">
            {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>

          <p className="text-gray-700 mb-6 whitespace-pre-wrap">{project.detailedDescription}</p>

          <div className="flex items-center flex-wrap gap-4 text-black mt-auto">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium brutalist-button bg-gray-100 py-2 px-4 rounded-md">
                <ExternalLinkIcon className="w-5 h-5" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
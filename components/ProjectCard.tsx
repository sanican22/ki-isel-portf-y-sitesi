
import React from 'react';
import { Project } from '../types';
import { GithubIcon } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10 group transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-2">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
                <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
        </div>
        <p className="text-gray-400 mb-4 h-24">{project.description}</p>
        <div className="flex items-center justify-between">
            {project.liveUrl && (
                <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
                >
                    Canlı Demo
                </a>
            )}
            {project.codeUrl && (
                <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
                >
                    <GithubIcon className="w-6 h-6" />
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

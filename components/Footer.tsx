
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:ahmet@ornek.com" className="hover:text-cyan-400 transition-colors"><MailIcon className="w-6 h-6" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><GithubIcon className="w-6 h-6" /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Ahmet. Tüm hakları saklıdır.</p>
        <p className="text-sm mt-2">React ve Tailwind CSS ile tasarlandı.</p>
      </div>
    </footer>
  );
};

export default Footer;

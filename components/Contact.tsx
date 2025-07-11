
import React from 'react';
import Section from './Section';
import { GithubIcon, LinkedinIcon, MailIcon } from '../constants';

const Contact: React.FC = () => {
    const socialLinks = [
        {
            name: "Email",
            icon: <MailIcon className="w-8 h-8"/>,
            href: "mailto:ahmet@ornek.com",
            text: "ahmet@ornek.com",
        },
        {
            name: "LinkedIn",
            icon: <LinkedinIcon className="w-8 h-8"/>,
            href: "#",
            text: "linkedin.com/in/ahmet",
        },
        {
            name: "GitHub",
            icon: <GithubIcon className="w-8 h-8"/>,
            href: "#",
            text: "github.com/ahmet",
        },
    ];

  return (
    <Section id="contact" title="İletişim" className="bg-gray-800/50">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          Benimle bir proje üzerinde çalışmak veya sadece merhaba demek isterseniz, bana ulaşmaktan çekinmeyin.
        </p>
        <div className="flex flex-col items-center space-y-6">
          {socialLinks.map((link) => (
             <a
             key={link.name}
             href={link.href}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
           >
             <div className="p-3 bg-gray-700 rounded-full group-hover:bg-cyan-500 transition-colors duration-300">
                {link.icon}
             </div>
             <span className="text-lg">{link.text}</span>
           </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;

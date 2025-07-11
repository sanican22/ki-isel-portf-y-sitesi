
import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="Hakkımda" className="bg-gray-800/50">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/3 flex justify-center">
          <img
            src="https://picsum.photos/seed/avatar/400/400"
            alt="Profil Fotoğrafı"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-400 shadow-lg"
          />
        </div>
        <div className="lg:w-2/3 text-center lg:text-left">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Yıllardır web teknolojileriyle uğraşıyorum ve özellikle React ekosisteminde uzmanlaştım. Müşteri ihtiyaçlarını anlayarak estetik ve fonksiyonel arayüzler tasarlamayı hedefliyorum. UI/UX prensiplerine sadık kalarak, her projede en iyi kullanıcı deneyimini sunmak için çalışıyorum. Gemini API gibi yeni nesil teknolojileri projelerime entegre etmekten keyif alıyorum.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Takım çalışmasına yatkınım ve sürekli öğrenme ilkesini benimsiyorum. Boş zamanlarımda açık kaynak projelere katkıda bulunuyor ve yeni teknolojileri deniyorum.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-10 text-white">Yeteneklerim</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2 group">
              <div className="p-4 bg-gray-700 rounded-full transition-all duration-300 group-hover:bg-cyan-500 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="font-medium text-gray-300 transition-colors duration-300 group-hover:text-cyan-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;

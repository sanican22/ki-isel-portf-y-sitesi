
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center text-white bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url(https://picsum.photos/1920/1080?grayscale&blur=2)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>

      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          <span className="block">Merhaba, ben Ahmet.</span>
          <span className="block text-cyan-400">Senior Frontend Geliştirici</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          Kullanıcı dostu, modern ve performans odaklı web uygulamaları oluşturma tutkusuyla çalışan bir mühendisim.
        </p>
        <a
          href="#contact"
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300"
        >
          İletişime Geç
        </a>
      </div>
    </section>
  );
};

export default Hero;

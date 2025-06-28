import {FaLink,FaEnvelope,} from 'react-icons/fa';
import Foto from '../assets/foto.png';
import Capa from '../assets/capa.jpg';

const links = [
  { text: 'Meu Portfólio', icon: FaLink, href: 'https://portfolio-silvia-soares-projects.vercel.app/' },
  { text: 'LinkedIn', icon: FaLink, href: 'https://www.linkedin.com/in/silviaso1' },
  { text: 'Github', icon: FaLink, href: 'https://github.com/silviaso1' },
  { text: 'Kaggle', icon: FaLink, href: 'https://www.kaggle.com/silviaso1' },
  { text: 'Lattes', icon: FaLink, href: 'http://lattes.cnpq.br/4301159007950673' },
  { text: 'Orcid', icon: FaLink, href: 'https://orcid.org/0009-0001-4379-7107' },
  { text: 'Email', icon: FaEnvelope, href: 'mailto:silviasoliveira30@gmail.com' },
];


const Perfil = () => (
  <div className="min-h-screen bg-[#c7d4c4] flex flex-col items-center">
    
    <div
      className="w-full h-64 md:h-100 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Capa})`,
      }}
    >
      <div className="absolute -bottom-5 md:-bottom-3 left-1/2 transform -translate-x-1/2 z-20">
        <div className="rounded-full p-3 bg-[#c7d4c4]">
          <div className="rounded-full border-4 border-white">
            <img
              src={Foto}
              alt="Silvia Soares"
              className="w-33 h-33 md:w-45 md:h-45 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#c7d4c4] w-full -mt-20 md:-mt-30 pt-24 md:pt-28 pb-12 relative text-center rounded-t-[50%_80px] md:rounded-t-[50%_120px] px-4">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-6 md:space-y-8">
        <div className="mt-4 md:mt-6">
          <h1 className="text-3xl md:text-4xl text-black font-bold ml-4 ">Silvia Soares</h1>
          <p className=" ml-4 text-sm md:text-base text-black uppercase tracking-wider mt-2">
            Dev & Data Analyst
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 md:gap-5 px-2">
          {links.map(({ text, href, icon: Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              className="relative flex items-center justify-center gap-3 w-full text-[#2a3439] bg-white py-4 px-6 rounded-[12px] font-medium text-center shadow-[7px_7px_0_#000] border-2 border-black overflow-hidden transition-all duration-200 hover:translate-y-1 hover:shadow-[0_2px_0_#d1d9e0,0_3px_5px_rgba(0,0,0,0.1)] text-lg md:text-xl"
            >
              <Icon className="text-xl" />
              {text}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0, 0, 0, 0.1)] to-[rgba(255,255,255,0.1)] transform -translate-x-full transition-transform duration-300 hover:translate-x-full pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Perfil;

"use client";

// import { useRouter } from 'next/router';
import { TfiWorld } from "react-icons/tfi";



const LanguageSwitcher: React.FC = () => {


  return (
    <div className="absolute top-4 right-4">
    <button
      
      className="relative z-50 flex items-center bg-transparent rounded-full shadow-md   "
      aria-label="Switch language"
    >
    
    <TfiWorld className="transition duration-200 text-white hover:text-gray-300 bg-transparent text-4xl"/>
      {/* {locale === 'de' ? 'EN' : 'DE'} */}
    </button>
    </div>
  );
};

export default LanguageSwitcher;

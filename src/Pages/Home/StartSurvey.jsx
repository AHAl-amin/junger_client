
import React, { useState } from 'react';
import Bannerbg from '../../../public/image/banner.png';
import VoiceImg from '../../../public/image/voiceIcon.png';
import bannerMiddle from '../../../public/image/bannerMiddle.png';
import { Globe as GlobeIcon, ChevronDown as ChevronDownIcon } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
 
  { code: 'es', name: 'Hindi' },
];

function StartSurvey() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${Bannerbg})` }}
    >
      <div className="relative flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center">
        <h1 className="text-[#168F79] font-extrabold text-7xl italic product mt-10">
          Voice Survey
        </h1>
        <p className="text-xl font-semibold text-[#637270] md:w-1/3 mt-4">
          Answer a few questions to help us improve our services. Your feedback matters to us!
        </p>

        {/* Dropdown */}
        <div className="relative w-full max-w-xs mt-6">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-2">
              <GlobeIcon size={20} className="text-gray-600" />
              <span className="text-gray-800">{selectedLanguage.name}</span>
            </div>
            <ChevronDownIcon
              size={20}
              className={`text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden z-10">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`w-full text-left p-4 hover:bg-gray-100 transition-colors duration-150 ${
                    selectedLanguage.code === language.code ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => selectLanguage(language)}
                >
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Get Started Button */}
        <button className="px-14 py-3 mt-10 rounded-full bg-gradient-to-t from-[#02362E] to-[#298F7D] text-white font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default StartSurvey;


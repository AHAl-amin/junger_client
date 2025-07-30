
import React, { useState } from 'react';
import Bannerbg from '../../../public/image/banner.png';
import { Link } from 'react-router-dom'

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
      <div className="relative flex md:space-y-14 space-y-12 flex-col bg-[linear-gradient(to_bottom_left,#0C4B4000,#E0ECE940,#FFFFFF)]   items-center justify-center h-[calc(100vh-100px)] text-center">
        <div className=''>
          <h1 className="text-[#168F79] font-extrabold text-7xl italic product mt-10">
            Voice Survey
          </h1>
          <p className="text-lg md:text-xl  leading-relaxed font-semibold mx-auto text-[#637270] md:w-2/3 mt-4">
            Answer a few questions to help us improve our services. Your feedback matters to us!
          </p>
        </div>

        {/* Dropdown */}
        <div>
          <div className="relative w-full  mt-6">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
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
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden z-10 ">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`w-full text-left p-4 hover:bg-gray-100 transition-colors duration-150 cursor-pointer ${selectedLanguage.code === language.code ? '' : ''
                      }`}
                    onClick={() => selectLanguage(language)}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            )}

          </div>
          <p className='mt-6 text-[#6F6464]'>Your responses will be used to improve our services. <br /> All information is kept confidential.</p>
        </div>
     

      

<Link to='/ai_question'>
<button className="px-14 py-3 mt-10 rounded-full bg-gradient-to-t from-[#02362E] to-[#298F7D] text-white font-semibold cursor-pointer">
  Start Survey
</button>
</Link>
      </div >
    </div >
  );
}

export default StartSurvey;




// import React, { useState } from 'react';
// import { Globe as GlobeIcon, ChevronDown as ChevronDownIcon } from 'lucide-react';

// const languages = [
//   { code: 'en', name: 'English' },
//   { code: 'es', name: 'Hindi' },
// ];

// function StartSurvey() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

//   const toggleDropdown = () => setIsOpen(!isOpen);
//   const selectLanguage = (language) => {
//     setSelectedLanguage(language);
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className="bg-cover bg-center"
//       style={{ backgroundImage: `url('/image/banner.png')` }}
//     >
//       <div className="relative flex md:space-y-14 space-y-12 flex-col items-center justify-center h-[calc(100vh-100px)] text-center">
//         <div>
//           <h1 className="text-[#168F79] font-extrabold text-7xl italic product mt-10">
//             Voice Survey
//           </h1>
//           <p className="text-xl font-semibold mx-auto text-[#637270] md:w-2/3 mt-4">
//             Answer a few questions to help us improve our services. Your feedback matters to us!
//           </p>
//         </div>

//         {/* Language Dropdown */}
//         <div>
//           <div className="relative w-full mt-6">
//             <button
//               onClick={toggleDropdown}
//               className="flex items-center justify-between w-full p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <GlobeIcon size={20} className="text-gray-600" />
//                 <span className="text-gray-800">{selectedLanguage.name}</span>
//               </div>
//               <ChevronDownIcon
//                 size={20}
//                 className={`text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//               />
//             </button>

//             {isOpen && (
//               <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden z-10">
//                 {languages.map((language) => (
//                   <button
//                     key={language.code}
//                     className={`w-full text-left p-4 hover:bg-gray-100 transition-colors duration-150 cursor-pointer`}
//                     onClick={() => selectLanguage(language)}
//                   >
//                     {language.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <p className="mt-6 text-[#6F6464]">
//             Your responses will be used to improve our services. <br />
//             All information is kept confidential.
//           </p>
//         </div>

//         <button className="px-14 py-3 mt-10 rounded-full bg-gradient-to-t from-[#02362E] to-[#298F7D] text-white font-semibold cursor-pointer">
//           Start Survey
//         </button>
//       </div>
//     </div>
//   );
// }

// export default StartSurvey;

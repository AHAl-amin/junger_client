"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"
import logo from '../../../public/image/logo.png';
import { Link } from "react-router-dom";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
]

const data = [
  {
    question: "Do you use public transportation regularly?",
    traslationquestion: "क्या आप नियमित रूप से सार्वजनिक परिवहन का उपयोग करते हैं?",
    transcript: "उत्तर: लोरेम इप्सम डोलर सिट अमेट कंसेटेचर। डिग्निसिम और स्केलेरिस्क",
    translation: "Answer: Lorem ipsum dolor sit amet consectetur. Dignissim at scelerisque",
  },
  {
    question: "Are you satisfied with the current public services?",
    traslationquestion: "क्या आप वर्तमान सार्वजनिक सेवाओं से संतुष्ट हैं?",
    transcript: "उत्तर: लोरेम इप्सम डोलर सिट अमेट कंसेटेचर। डिग्निसिम और स्केलेरिस्क",
    translation: "Answer: Lorem ipsum dolor sit amet consectetur. Dignissim at scelerisque",
  },
  {
    question: "Would you recommend our services to others?",
    traslationquestion: "क्या आप हमारी सेवाओं की दूसरों को अनुशंसा करेंगे?",
    transcript: "उत्तर: लोरेम इप्सम डोलर सिट अमेट कंसेटेचर। डिग्निसिम और स्केलेरिस्क",
    translation: "Answer: Lorem ipsum dolor sit amet consectetur. Dignissim at scelerisque",
  },
]

export default function Feedback() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/image/banner.png')` }}
    >
      <div className=" bg-[linear-gradient(to_bottom_left,#0C4B4000,#E0ECE940,#FFFFFF)]">
      <div className=" px-30 pt-6  mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="md:h-14 h-10 w-auto" />
        </div>


      </div>
        <div className="  ">
          {/* Header Section */}
          <div className="relative flex flex-col items-center justify-center text-center py-10 px-4 ">
            <div className="max-w-4xl mx-auto ">
              <h1 className="text-teal-600 font-bold text-3xl md:text-6xl mb-4 italic ">Survey Feedback Overview</h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Here is a brief summary of the survey questions and their translated responses. The results are displayed in
                both the original language and translated format.
              </p>
            </div>


          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Transcript Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#0E4642]">Transcript</h3>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="space-y-6">
                    {data.map((item, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                        <p className="text-teal-600 font-medium md:text-lg text-[12px] mb-3">
                          {index + 1}. {item.traslationquestion}
                        </p>
                        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 md:text-lg text-[12px] border-gray-200">{item.transcript}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Translation Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#0E4642]">Translation</h3>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="space-y-6">
                    {data.map((item, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                        <p className="text-teal-600 font-medium text-lg mb-3">
                          {index + 1}. {item.question}
                        </p>
                        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200">{item.translation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Link to='/survey_result' className="flex justify-center ">
              <button className='px-14 cursor-pointer rounded-full py-3 md:mt-10 md:my-0 my-10 bg-gradient-to-t from-[#02362E] to-[#298F7D] text-gray-100' >View Survey Result</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


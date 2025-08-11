


"use client";

import { useState, useEffect } from "react";
import logo from "../../../public/image/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Feedback() {
  const [conversation, setConversation] = useState([]); // Original (English)
  const [translatedConversation, setTranslatedConversation] = useState([]); // Translated (Hindi)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();


  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://10.10.13.92:8000/conversations/");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      console.log("result...........", result);

      setConversation(result.translation?.conversation || []);
      setTranslatedConversation(result.conversation || []);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);


      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    loadData();
  }, [location.pathname]);

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/image/banner.png')` }}
    >
      <div className="bg-[linear-gradient(to_bottom_left,#0C4B4000,#E0ECE940,#FFFFFF)] min-h-screen">
        <div className="px-30 pt-6 mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="md:h-14 h-10 w-auto" />
          </div>
        </div>

        <div>
          {/* Header */}
          <div className="relative flex flex-col items-center justify-center text-center py-10 px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-teal-600 font-bold text-3xl md:text-6xl mb-4 italic">
                Survey Feedback Overview
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Here is a brief summary of the survey questions and their
                translated responses. The results are displayed in both the
                original language and translated format.
              </p>
            </div>
          </div>

          {/* Loading/Error */}
          {/* {loading && <p className="text-center text-gray-500">Loading...</p>} */}

          {loading && (
            <div className="flex justify-center items-center py-10">
              <svg
                className="animate-spin h-8 w-8 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <span className="ml-3 text-teal-600 font-medium">Loading...</span>
            </div>
          )}

          {error && <p className="text-center text-red-500">Error: {error}</p>}

          {/* Main Content */}
          {!loading && !error && conversation.length > 0 && (
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Transcript  */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#0E4642]">
                    Transcript
                  </h3>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="space-y-6">
                      {translatedConversation.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                        >
                          <p className={`${item.role === "agent" ? "text-teal-600" : "text-gray-700"
                            } font-medium md:text-lg text-[12px] mb-3`}>
                            {index + 1}. {item.role === "agent" ? "Agent " : "User"}
                          </p>
                          <p
                            className={`leading-relaxed pl-4 md:text-lg text-[12px] ${item.role === "agent" ? "text-teal-600" : "text-gray-700"
                              }`}
                          >
                            {item.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Translation  */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#0E4642]">
                    Translation
                  </h3>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="space-y-6">
                      {conversation.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                        >
                          <p className={`${item.role === "agent" ? "text-teal-600" : "text-gray-700"
                            } font-medium md:text-lg text-[12px] mb-3`}>
                            {index + 1}. {item.role === "agent" ? "Agent " : "User"}
                          </p>
                          <p
                            className={`leading-relaxed pl-4 md:text-lg text-[12px] ${item.role === "agent" ? "text-teal-600" : "text-gray-700"
                              }`}
                          >
                            {item.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {!loading && !error && conversation.length === 0 && (
            <p className="text-center text-gray-600 mt-10">
              No conversation data available.
            </p>
          )}
          <Link to='/ai_question' className="w-full flex justify-center my-4">
            <button className="flex items-center gap-2 md:px-6 py-2 px-2 md:py-3 md:font-bold text-[12px] md:text-[16px] font-medium  cursor-pointer bg-gradient-to-t from-[#02362E] to-[#298F7D] text-white rounded-full hover:bg-teal-800 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Start New Survey
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}


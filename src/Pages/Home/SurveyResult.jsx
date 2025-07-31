

import * as React from 'react';
import { useState } from 'react'; // Import useState for managing state
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import logo from '../../../public/image/logo.png';
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router-dom';

// Sample data for the pie chart
const platforms = [
    { id: 0, value: 70, label: 'Mobile' },
    { id: 1, value: 30, label: 'Desktop' },
];

// Color palette for the second chart
const palette = ['lightcoral', 'slateblue'];

// Assign custom color per item for the third chart
const colorPerItem = [
    { id: 0, value: 7, label: 'Respons', color: '#26779A' },
    { id: 1, value: 3, label: 'No respons', color: '#E57373' },
];

// Shared chart settings
const pieParams = {
    height: 200,
    margin: { right: 5 },
    hideLegend: true,
};

const statistics = [
    {
        "id": 1,
        "label": "Total Questions",
        "value": 4,
        "bgColor": "bg-amber-50",
        "textColor": "text-[#7F8448]"
    },
    {
        "id": 2,
        "label": "Response",
        "value": 4,
        "bgColor": "bg-blue-50",
        "textColor": "text-[#466776]"
    },
    {
        "id": 3,
        "label": "No Response",
        "value": 4,
        "bgColor": "bg-red-50",
        "textColor": "text-[#E57373]"
    }
];

const responsesData = {
    "title": "Detailed Response",
    "responses": [
        {
            "id": 1,
            "question": "Do you use public transportation regularly?",
            "response": "Lorem ipsum dolor sit amet consectetur. Iaculis ullamcorper et amet viverra.",
            "hasMore": true
        },
        {
            "id": 2,
            "question": "Do you use public transportation regularly?",
            "response": "Lorem ipsum dolor sit amet consectetur. Iaculis ullamcorper et amet viverra.",
            "hasMore": true
        },
        {
            "id": 3,
            "question": "Do you use public transportation regularly?",
            "response": "Lorem ipsum dolor sit amet consectetur. Quam sed magna eu convallis neque faucibus consectetur. Pellentesque mauris ut gravida id dui suspendisse dictum. Sed et ornare quam est adipiscing elit risus praesent molestae. Risus non non erat pulvinar praesent fames adipiscing metus in.",
            "hasMore": true
        }
    ]
};

export default function SurveyResult() {
    // State to track which responses are expanded
    const [expanded, setExpanded] = useState({});

    // Function to toggle the expanded state for a specific response
    const toggleExpanded = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the state for the specific response
        }));
    };

    return (
        <div className='bg-[#F7FEFC]'>
            <div className="flex items-center space-x-4 pt-10 ml-30">
                <img src={logo} alt="Logo" className="h-14 w-auto" />
            </div>
            <div className=' mx-auto max-w-7xl space-y-12 '>
                <div className='flex flex-col items-center justify-center text-center  '>
                    <h1 className="text-[#168F79] font-extrabold md:text-6xl text-3xl italic product mt-10">
                        Survey Results
                    </h1>
                    <p className="text-lg md:text-xl  leading-relaxed font-semibold mx-auto text-gray-500 md:w-2/3 mt-4">
                        Thank you for completing the survey! Here's a summary <br /> of your responses.
                    </p>
                </div>
                <div className="flex gap-4  ">
                    {statistics?.map((stat) => (
                        <div key={stat.id} className={`${stat.bgColor} rounded-lg text p-6 flex-1 min-w-0 h-40 space-y-8 border border-[#D2EBE8]`}>
                            <div className={`${stat.textColor} text-2xl font-medium  opacity-70`}>{stat.label}</div>
                            <div className={`${stat.textColor} text-4xl font-bold`}>{stat.value}</div>
                        </div>
                    ))}
                </div>
                <div className='bg-[#FFFFFF] shadow p-10 rounded'>
                    <p className='text-gray-600 text-3xl'>Response Distribution</p>
                    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
                        <Box flexGrow={1}>
                            <PieChart
                                colors={palette}
                                series={[
                                    {
                                        data: colorPerItem,
                                    },
                                ]}
                                {...pieParams}
                            />
                        </Box>
                    </Stack>
                    <div className='flex justify-center items-center gap-10 mt-10 mb-10'>
                        <div className='flex gap-4 items-center'>
                            <div className='w-8 h-8 bg-[#26779A] rounded-full'></div>
                            <p className='text-3xl text-gray-500'>Respons</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div className='w-8 h-8 bg-[#E57373] rounded-full'></div>
                            <p className='text-3xl text-gray-500'>No Respons</p>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto p-6 mb-10 bg-[#FFFFFF] rounded shadow">
                    {/* Header */}
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Detailed Response</h1>
                    {/* Table Header */}
                    <div className="grid grid-cols-2 gap-8 mb-4 p-4 rounded bg-[#E7EDEC]">
                        <div className="text-teal-600 font-bold text-2xl ">Questions</div>
                        <div className="text-teal-600 font-bold text-2xl">Your Response</div>
                    </div>
                    {/* Response Rows */}
                    <div className="space-y-0">
                        {responsesData?.responses?.map((item, index) => (
                            <div
                                key={item.id}
                                className={`grid grid-cols-2 gap-8 py-6 px-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                            >
                                <div className="text-gray-800 text-xl leading-relaxed">{item.question}</div>
                                <div className="text-gray-600 text-xl leading-relaxed">
                                    {/* Conditionally render truncated or full response */}
                                    {item.hasMore && !expanded[item.id] ? (
                                        <>
                                            {item.response.substring(0, 50)}... {/* Truncate to 50 characters */}
                                            <button
                                                className="text-teal-600 hover:text-teal-700 ml-1 font-medium"
                                                onClick={() => toggleExpanded(item.id)}
                                            >
                                                See more
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {item.response}
                                            {item.hasMore && (
                                                <button
                                                    className="text-teal-600 hover:text-teal-700 ml-1 font-medium"
                                                    onClick={() => toggleExpanded(item.id)}
                                                >
                                                    See less
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-12 my-12 justify-center ">
                        <button className="flex items-center gap-2 px-6 py-3 border border-[#023129] font-bold text-[#023129] rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                            <FiDownload />
                            Export Result
                        </button>
                        <Link to='/'>
                        <button className="flex items-center gap-2 px-6 py-3 font-bold cursor-pointer bg-gradient-to-t from-[#02362E] to-[#298F7D] text-white rounded-full hover:bg-teal-800 transition-colors">
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
        </div>
    );
}
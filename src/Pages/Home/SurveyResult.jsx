


import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import logo from '../../../public/image/logo.png';
import { Link } from 'react-router-dom';

// Color palette for the chart
const palette = ['lightcoral', 'slateblue'];

// Shared chart settings
const pieParams = {
    height: 200,
    margin: { right: 5 },
    hideLegend: true,
};

// Initial statistics with unique colors for each card
const initialStatistics = [
    {
        id: 1,
        label: "Completeness",
        value: 0,
        bgColor: "bg-green-50",
        textColor: "text-green-600"
    },
    {
        id: 2,
        label: "Clarity",
        value: 0,
        bgColor: "bg-blue-50",
        textColor: "text-blue-600"
    },
    {
        id: 3,
        label: "Empathy/Tone & Neutrality",
        value: 0,
        bgColor: "bg-purple-50",
        textColor: "text-purple-600"
    },
    {
        id: 4,
        label: "Confidentiality & FPIC Adherence",
        value: 0,
        bgColor: "bg-red-50",
        textColor: "text-red-600"
    },
    {
        id: 5,
        label: "Data Accuracy",
        value: 0,
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-600"
    }
];

export default function SurveyResult() {
    // State to track which card is selected
    const [selectedCardId, setSelectedCardId] = useState(initialStatistics[0].id);
    // State to store statistics data
    const [statistics, setStatistics] = useState(initialStatistics);

    // Fetch data from API
    useEffect(() => {
        fetch('http://10.10.13.92:8000/graph_data/')
            .then(response => response.json())
            .then(data => {
                const processedResults = data.processed_results;
                const criteriaMap = {
                    'completeness': 'Completeness',
                    'clarity_questioning__transcription_quality': 'Clarity',
                    'empathytone__neutrality': 'Empathy/Tone & Neutrality',
                    'confidentiality__fpic_adherence': 'Confidentiality & FPIC Adherence',
                    'data_accuracy_demographics_consent_metadata': 'Data Accuracy'
                };
                console.log(data)

                const updatedStatistics = initialStatistics.map(stat => {
                    const matchingResult = processedResults.find(result => 
                        criteriaMap[result.criteria_id] === stat.label
                    );
                    return {
                        ...stat,
                        value: matchingResult ? matchingResult.mark : stat.value
                    };
                });

                setStatistics(updatedStatistics);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Get the selected statistic based on selectedCardId
    const selectedStat = statistics.find(stat => stat.id === selectedCardId) || statistics[0];

    // Dynamic PieChart data based on selected card
    const colorPerItem = [
        { id: 0, value: selectedStat.value, label: 'Score', color: '#489789' },
        { id: 1, value: 5 - selectedStat.value, label:"No score",  color: '#E57373' },
    ];

    return (
        <div className='bg-[#F7FEFC]'>
            <div className="flex items-center space-x-4 pt-10 ml-30">
                <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
            </div>
            <div className='mx-auto max-w-7xl space-y-12'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className="text-[#168F79] font-extrabold md:text-6xl text-3xl italic product mt-10">
                        Survey Results
                    </h1>
                    <p className="text-[14px] md:text-xl leading-relaxed font-semibold mx-auto text-gray-500 md:w-2/3 mt-4">
                        Thank you for completing the survey! Here's a summary <br /> of your responses.
                    </p>
                </div>
                <div className="flex md:flex-row flex-col gap-4 md:p-0 p-4">
                    {statistics.map((stat) => (
                        <div
                            key={stat.id}
                            className={`${stat.bgColor} rounded-lg text p-6 flex-1 min-w-0 h-40 space-y-8 border relative border-[#D2EBE8] cursor-pointer ${selectedCardId === stat.id ? 'ring-2 ring-[#168F79]' : ''}`}
                            onClick={() => setSelectedCardId(stat.id)}
                        >
                            <div className={`${stat.textColor} text-xl font-medium opacity-70`}>{stat.label}</div>
                            <div className={`${stat.textColor} text-4xl font-bold absolute bottom-2`}>{stat.value}</div>
                        </div>
                    ))}
                </div>
                <div className='bg-[#FFFFFF]  shadow md:p-10 p-4 md:mb-10 md:mx-0 mx-4 rounded'>
                    <p className='text-gray-500 md:text-3xl text-xl mb-8 md:mb-0'> {selectedStat.label}</p>
                    <Stack direction="row" width="100%"  textAlign="center" spacing={2}>
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
                        <div className='flex md:gap-4 gap-2 items-center'>
                            {/* <div className='md:w-8 md:h-8 w-4 h-4 bg-[#26779A] rounded-full'></div> */}
                            <p className='md:text-3xl text-xl text-gray-500'>Score {selectedStat.value} out of 5</p>
                        </div>
                    </div>
                </div>
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
              Show survey result
            </button>

          </Link>
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import HeaderImage from '../../components/header/HeaderImage';
import DemoFooter from '../../components/footer/DemoFooter';
import Button from '@mui/material/Button';
import './style2.css'

export default function NewJobPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResults, setSelectedResults] = useState([]);
    const [suggestedJobs, setSuggestedJobs] = useState([]);

    const simulatedResults = [
        {
            "name": "Business Analysis",
            "jobs": [
                { "id": 1, "name": "Business Analyst - Clinical & Logistics Platform" },
                { "id": 2, "name": "Business Analyst" },
                { "id": 3, "name": "Data Analyst" },
                { "id": 8, "name": "Tolling Business Analyst" },
                { "id": 9, "name": "Business Analyst - Risk" },
                { "id": 10, "name": "Digital Analyst" },
                { "id": 11, "name": "KYC Business System Analyst" },
                { "id": 12, "name": "Radiology Systems Analyst" },
                { "id": 13, "name": "Ecommerce Business Analyst" }
            ]
        },
        {
            "name": "Finance",
            "jobs": [
                { "id": 5, "name": "Analyst - FP&A Global Revenue" },
                { "id": 6, "name": "Investment Analyst - Graduate" },
                { "id": 14, "name": "Chief Financial Officer" },
                { "id": 40, "name": "Finance Assistant/ Accountant" }
            ]
        },
        {
            "name": "Information Technology",
            "jobs": [
                { "id": 4, "name": "Information Security Analyst, Incident Response" },
                { "id": 18, "name": "Software Developer" },
                { "id": 22, "name": "Backend developer (JAVA)" },
                { "id": 32, "name": "Technical Project Manager" },
                { "id": 33, "name": "AutoCAD Operator" },
                { "id": 36, "name": "Game Developer Specialist" }
            ]
        },
        {
            "name": "Sales and Marketing",
            "jobs": [
                { "id": 19, "name": "Saleswomen" },
                { "id": 37, "name": "Marketing Specialist, Commodity Export" }
            ]
        },
        {
            "name": "Administration",
            "jobs": [
                { "id": 15, "name": "Full-time Community Connections Intern (paid internship)" },
                { "id": 16, "name": "Country Coordinator" },
                { "id": 17, "name": "BCC Specialist" },
                { "id": 27, "name": "Receptionist" },
                { "id": 28, "name": "Programs Manager" },
                { "id": 29, "name": "Proposal writer" },
                { "id": 30, "name": "Manager of Information Systems" },
                { "id": 34, "name": "Language and Administrative Assistant" },
                { "id": 35, "name": "Executive Director" }
            ]
        },
        {
            "name": "Engineering",
            "jobs": [
                { "id": 41, "name": "Engineer/ Supervisor for the Global Fund Project" }
            ]
        },
        {
            "name": "Design",
            "jobs": [
                { "id": 21, "name": "Graphic Designer" }
            ]
        },
        {
            "name": "Language and Communication",
            "jobs": [
                { "id": 31, "name": "English Translator/ Interpreter" },
                { "id": 23, "name": "Journalism Trainer" },
                { "id": 42, "name": "Latin America Manager" },
                { "id": 43, "name": "Scriptwriters" }
            ]
        },
        {
            "name": "Non-Profit/NGO",
            "jobs": [
                { "id": 38, "name": "NGO Training on the Framework Convention for the Protection of" },
                { "id": 39, "name": "Global Supplementary Grant Program" }
            ]
        }
    ]

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Filter and update the search results based on the query
        // const filteredResults = simulatedResults.filter(category =>
        //     category.jobs.some(job => job.name.toLowerCase().includes(query.toLowerCase()))
        // );

        const filteredResults = simulatedResults.map(category => ({
            ...category,
            jobs: category.jobs.filter(job =>
                job.name.toLowerCase().includes(query.toLowerCase())
            )
        })).filter(category => category.jobs.length > 0);

        console.log(filteredResults)
        setSearchResults(filteredResults);
    };

    const handleJobClick = (job) => {
        setSelectedResults([...selectedResults, job]);

        const selectedCategory = simulatedResults.find(category =>
            category.jobs.some(j => j.id === job.id)
        );

        // Suggest other jobs in the same category
        if (selectedCategory) {
            setSuggestedJobs(selectedCategory.jobs.filter(j => j.id !== job.id));
            // setSuggestedJobs([]);
        } else {
            setSuggestedJobs([]);
        }
        console.log("List suggestion: ", suggestedJobs)
    };

    return (
        <div>
            <div style={{ marginBottom: 100 }}>
                <HeaderImage />
            </div>


            <div
                className='outer-search'
            >
                <div>
                    <input
                        type="text"
                        className="search-input" // Apply a CSS class
                        placeholder="Enter job name ... "
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <Button variant="contained">New job</Button>
                </div>
                <DemoFooter />
            </div>
        </div>
    );
}
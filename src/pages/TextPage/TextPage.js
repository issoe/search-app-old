import React, { useState } from 'react';
import HeaderImage from '../../components/header/HeaderImage';
import DemoFooter from '../../components/footer/DemoFooter';

export default function TextPage() {
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
                { "id": 23, "name": "Journalism Trainer" }
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

        // Simulate API call to get search results (you can replace this with your actual API call)
        // For simplicity, let's assume we have a hardcoded list of results.
        // const simulatedResults = [
        //     { id: 1, name: 'Business Analyst - Clinical & Logistics Platform' },
        //     { id: 2, name: 'Business Analyst' },
        //     { id: 3, name: 'Data Analyst' },
        //     { id: 4, name: 'Information Security Analyst}, Incident Response' },
        //     { id: 5, name: 'Analyst - FP&A Global Revenue' },
        //     { id: 6, name: 'Investment Analyst - Graduate' },
        //     { id: 7, name: 'IT Business Process Analysis' },
        //     { id: 8, name: 'Tolling Business Analyst' },
        //     { id: 9, name: 'Business Analyst - Risk' },
        //     { id: 10, name: 'Digital Analyst' },
        //     { id: 11, name: 'KYC Business System Analyst' },
        //     { id: 12, name: 'Radiology Systems Analyst' },
        //     { id: 13, name: 'Ecommerce Business Analyst' },
        //     { id: 14, name: 'Chief Financial Officer' },
        //     { id: 15, name: 'Full-time Community Connections Intern (paid internship)' },
        //     { id: 16, name: 'Country Coordinator' },
        //     { id: 17, name: 'BCC Specialist' },
        //     { id: 18, name: 'Software Developer' },
        //     { id: 19, name: 'Saleswomen' },
        //     { id: 20, name: 'Chief of Party (COP)' },
        //     { id: 21, name: 'Graphic Designer' },
        //     { id: 22, name: 'Backend developer (JAVA)' },
        //     { id: 23, name: 'Journalism Trainer' },
        //     { id: 24, name: 'Training Officer' },
        //     { id: 25, name: 'Programmer' },
        //     { id: 26, name: 'Tester' },
        //     { id: 27, name: 'Receptionist' },
        //     { id: 28, name: 'Programs Manager' },
        //     { id: 29, name: 'Proposal writer' },
        //     { id: 30, name: 'Manager of Information Systems' },
        //     { id: 31, name: 'English Translator/ Interpreter' },
        //     { id: 32, name: 'Technical Project Manager' },
        //     { id: 33, name: 'AutoCAD Operator' },
        //     { id: 34, name: 'Language and Administrative Assistant' },
        //     { id: 35, name: 'Executive Director' },
        //     { id: 36, name: 'Game Developer Specialist' },
        //     { id: 37, name: 'Marketing Specialist}, Commodity Export' },
        //     { id: 38, name: 'NGO Training on the Framework Convention for the Protection of' },
        //     { id: 39, name: 'Global Supplementary Grant Program' },
        //     { id: 40, name: 'Finance Assistant/ Accountant' },
        //     { id: 41, name: 'Engineer/ Supervisor for the Global Fund Project' }
        // ];


        // Filter and update the search results based on the query
        const filteredResults = simulatedResults.filter(category =>
            category.jobs.some(job => job.name.toLowerCase().includes(query.toLowerCase()))
        );


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

            <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                value={searchQuery}
                onChange={handleSearchChange}

            />

            <ul>
                {searchResults.map((category, categoryIndex) => (
                    <li key={categoryIndex}>
                        <h3>{category.name}</h3>
                        <ul>
                            {category.jobs.map((job, jobIndex) => (
                                <li key={job.id}>
                                    <button onClick={() => handleJobClick(job)}>
                                        {job.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <h2>Recently:</h2>
            <ul>
                {selectedResults.map((job, index) => (
                    <li key={index}>{job.name}</li>
                ))}
            </ul>

            <h2>Suggestion</h2>
            <ul>
                {suggestedJobs.map((job, index) => (
                    <li key={index}>{job.name}</li>
                ))}
            </ul>
            <DemoFooter />

        </div>
    );
}
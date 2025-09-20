import React from 'react';
import LectureItem from '../components/LectureItem';
import type { Lecture } from '../../../types/lecture';


// --- Icon Components ---
const FilterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" /> </svg>);
const SortIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l-3.146-3.147a.5.5 0 0 1-.708.708l-4 4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0L4 13.293V1.5a.5.5 0 0 1 .5-.5" /> </svg>);
const SearchIcon = () => (<svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" /> </svg>);
// --- End of Icon Components ---

// Sample data for lectures. In a real app, you would fetch this.
const lecturesData: Lecture[] = [
    { id: 1, title: 'Introduction', duration: '10:47 minutes', size: '21 MB', type: 'Recorded', date: 'Sept 1, 2025', version: '1.1', status: 'completed' },
    { id: 2, title: 'Basic Syntax', duration: '10:47 minutes', size: '21 MB', type: 'Recorded', date: 'Sept 1, 2025', version: '1.1', status: 'completed' },
    { id: 3, title: 'Core Concepts', duration: '10:47 minutes', size: '21 MB', type: 'Live', date: 'Sept 1, 2025', version: '1.1', status: 'completed' },
    { id: 4, title: 'Object Oriented', duration: '10:47 minutes', size: '21 MB', type: 'Recorded', date: 'Sept 1, 2025', version: '1.1', status: 'pending' },
    { id: 5, title: 'Object Oriented', duration: '10:47 minutes', size: '21 MB', type: 'Recorded', date: 'Sept 1, 2025', version: '1.1', status: 'pending' },
];

const LecturesDashboard: React.FC = () => {
    return (
        <div className="bg-gray-100 p-4 md:p-8 flex items-center justify-center min-h-screen font-sans">
            <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
                <header className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    </div>
                    <p className="text-sm text-gray-500">
                        <span className="text-gray-400">Teachers</span> /
                        <span className="text-gray-400">Lectures</span> /
                        <span className="font-medium text-gray-600">View Existing</span>
                    </p>
                    <div className="w-16"></div>
                </header>

                <div className="p-4 sm:p-6 lg:p-8">
                    <nav className="border-b border-gray-200 mb-6">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
                            {['Lectures', 'Upload Content', 'Analytics', 'Assignments', 'Quiz', 'Schedule', 'Settings'].map((item, index) => (
                                <li key={item} className="mr-2">
                                    <a href="#" className={`inline-block p-4 border-b-2 rounded-t-lg ${index === 0 ? 'text-indigo-600 border-indigo-600 active' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <main className="w-full lg:w-2/3">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 text-gray-600 font-medium text-sm"><FilterIcon /> Filters</button>
                                    <button className="flex items-center gap-2 text-gray-600 font-medium text-sm"><SortIcon /> Sort By</button>
                                </div>
                                <div className="relative w-full sm:w-auto">
                                    <SearchIcon />
                                    <input type="text" placeholder="Search for Lecture" className="w-full sm:w-72 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                {lecturesData.map(lecture => <LectureItem key={lecture.id} lecture={lecture} />)}
                            </div>
                        </main>

                        <aside className="w-full lg:w-1/3">
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                                    <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Create new lecture</button>
                                    <button className="w-full bg-indigo-100 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-200 transition">Go/Schedule Live</button>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-lg text-gray-800 mb-4">Today's Task</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center">
                                            <input id="task1" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" defaultChecked />
                                            <label htmlFor="task1" className="ml-3 block text-sm font-medium text-gray-700">Complete MCA Lec1</label>
                                        </li>
                                        <li className="flex items-center">
                                            <input id="task2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="task2" className="ml-3 block text-sm font-medium text-gray-700">Upload Assignments</label>
                                        </li>
                                        <li className="flex items-center">
                                            <input id="task3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" defaultChecked />
                                            <label htmlFor="task3" className="ml-3 block text-sm font-medium text-gray-700">Assign Mini Project</label>
                                        </li>
                                    </ul>
                                </div>
                                <button className="w-full bg-indigo-50 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition">View Drafts</button>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LecturesDashboard;

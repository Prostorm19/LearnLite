import React from 'react';
import type { Lecture } from '../../../types/lecture';

// --- Icon Components ---
const CheckIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-500 h-6 w-6"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const UploadIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400 h-6 w-6"
    >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
);
// --- End of Icon Components ---


interface LectureItemProps {
    lecture: Lecture;
    onViewLecture?: (lectureId: number) => void;
}

const LectureItem: React.FC<LectureItemProps> = ({ lecture, onViewLecture }) => {
    const handleViewLecture = () => {
        onViewLecture?.(lecture.id);
    };

    return (
        <div className="bg-white p-3.5 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
            <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{lecture.title}</h3>
                <p className="text-sm text-gray-500">
                    <span className="inline-block">{lecture.duration}</span>
                    <span className="mx-2">•</span>
                    <span className="inline-block">{lecture.size}</span>
                    <span className="mx-2">•</span>
                    {lecture.type === 'Live' ? (
                        <span className="text-red-500 font-medium">Live</span>
                    ) : (
                        <span>{lecture.type}</span>
                    )}
                </p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <p className="text-sm text-gray-500 flex-grow sm:flex-grow-0">
                    <span className="inline-block">{lecture.date}</span>
                    <span className="mx-2">•</span>
                    <span className="inline-block">{lecture.version}</span>
                </p>
                <div className="flex items-center">
                    {lecture.status === 'completed' ? <CheckIcon /> : <UploadIcon />}
                </div>
                <button
                    onClick={handleViewLecture}
                    className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                    aria-label={`View lecture: ${lecture.title}`}
                >
                    View Lecture
                </button>
            </div>
        </div>
    );
};

export default LectureItem;
